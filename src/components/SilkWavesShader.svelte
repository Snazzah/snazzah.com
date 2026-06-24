<script lang="ts">
  type Props = {
    timeScale?: number;
    horizontalOffset?: number;
    verticalOffset?: number;
    class?: string;
  };

  let {
    timeScale = 1,
    horizontalOffset = 0,
    verticalOffset = 0,
    class: _class
  }: Props = $props();

  let canvas: HTMLCanvasElement;
  let gl: WebGLRenderingContext | null = null;
  let program: WebGLProgram | null = null;
  let positionBuffer: WebGLBuffer | null = null;
  let resizeObserver: ResizeObserver | null = null;
  let motionQuery: MediaQueryList | null = null;
  let animationFrame = 0;
  let shaderTime = 0;
  let reducedMotion = false;
  let currentTimeScale = 1;
  let ready = false;

  const vertexShader = `
    attribute vec2 aPosition;

    void main() {
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const fragmentShader = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    #define INVERT 1

    uniform float iTime;
    uniform vec3 iResolution;
    uniform vec2 iOffset;

    vec2 hash22(vec2 p) {
      vec3 p3 = fract(p.xyx * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.xx + p3.yz) * p3.zy);
    }

    float noise(vec2 p) {
      const float kF = 1024.0;
      vec2 i = floor(p);
      vec2 f = fract(p);
      f *= f * (3.0 - 2.0 * f);
      return mix(mix(sin(kF * dot(p, hash22(i + vec2(0, 0)))),
                    sin(kF * dot(p, hash22(i + vec2(1, 0)))), f.x),
                mix(sin(kF * dot(p, hash22(i + vec2(0, 1)))),
                    sin(kF * dot(p, hash22(i + vec2(1, 1)))), f.x), f.y);
    }

    float fabric(vec2 p) {
      const mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
      float f = 0.0;
      f += 0.4 * noise(p); p = m * p;
      f += 0.3 * noise(p); p = m * p;
      f += 0.2 * noise(p); p = m * p;
      f += 0.1 * noise(p);
      return f;
    }

    const float A = 12.0;
    const float B = 2.0;
    const float C = 5.0;
    const float D = 5.0;

    float silk(vec2 uv, float t) {
      float s = sin(D * (uv.x + uv.y + cos(B * uv.x + C * uv.y)) + sin(A * (uv.x + uv.y)) - t);
      s = 0.7 + 0.3 * (s * s * 0.5 + s);
      s *= 0.9 + 0.6 * fabric(uv * min(iResolution.x, iResolution.y) * 0.0006);
      return s * 0.9 + 0.1;
    }

    float silkd(vec2 uv, float t) {
      float xy = uv.x + uv.y;
      float d = (D * (1.0 - B * sin(B * uv.x + C * uv.y)) + A * cos(A * xy)) * cos(D * (cos(B * uv.x + C * uv.y) + xy) + sin(A * xy) - t);
      return 0.005 * d * (sign(d) + 3.0);
    }

    void mainImage(out vec4 fragColor, vec2 fragCoord) {
      vec2 uv = fragCoord.xy / min(iResolution.x, iResolution.y) + iOffset;
      float t = iTime;
      uv.y += 0.03 * sin(8.0 * uv.x - t);

      float s = sqrt(silk(uv, t));
      float d = silkd(uv, t);

      vec3 c = vec3(s);
      c += 0.7 * vec3(1, 0.83, 0.6) * d;
      c *= 1.0 - max(0.0, 0.8 * d);
    #if INVERT
      c = pow(c, 0.3 / vec3(0.52, 0.5, 0.4));
      c = 1.0 - c;
    #else
      c = pow(c, vec3(0.52, 0.5, 0.4));
    #endif

      fragColor = vec4(c, 1.0);
    }

    void main() {
      mainImage(gl_FragColor, gl_FragCoord.xy);
    }
  `;

  function compileShader(context: WebGLRenderingContext, type: number, source: string) {
    const shader = context.createShader(type);

    if (!shader) {
      throw new Error('Unable to create WebGL shader.');
    }

    context.shaderSource(shader, source);
    context.compileShader(shader);

    if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
      const message = context.getShaderInfoLog(shader) ?? 'Unknown shader compile error.';
      context.deleteShader(shader);
      throw new Error(message);
    }

    return shader;
  }

  function createProgram(context: WebGLRenderingContext) {
    const vertex = compileShader(context, context.VERTEX_SHADER, vertexShader);
    const fragment = compileShader(context, context.FRAGMENT_SHADER, fragmentShader);
    const shaderProgram = context.createProgram();

    if (!shaderProgram) {
      throw new Error('Unable to create WebGL program.');
    }

    context.attachShader(shaderProgram, vertex);
    context.attachShader(shaderProgram, fragment);
    context.linkProgram(shaderProgram);
    context.deleteShader(vertex);
    context.deleteShader(fragment);

    if (!context.getProgramParameter(shaderProgram, context.LINK_STATUS)) {
      const message = context.getProgramInfoLog(shaderProgram) ?? 'Unknown shader link error.';
      context.deleteProgram(shaderProgram);
      throw new Error(message);
    }

    return shaderProgram;
  }

  function setUniforms() {
    if (!gl || !program) return;

    gl.useProgram(program);
    gl.uniform1f(gl.getUniformLocation(program, 'iTime'), shaderTime);
    gl.uniform2f(gl.getUniformLocation(program, 'iOffset'), horizontalOffset, verticalOffset);
  }

  function resizeCanvas() {
    if (!gl || !program || !canvas) return;

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(canvas.clientWidth * pixelRatio));
    const height = Math.max(1, Math.floor(canvas.clientHeight * pixelRatio));

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    gl.viewport(0, 0, width, height);
    gl.useProgram(program);
    gl.uniform3f(gl.getUniformLocation(program, 'iResolution'), width, height, 1);
  }

  function renderFrame() {
    if (!gl) return;

    setUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  function stopLoop() {
    if (!animationFrame) return;

    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  }

  function startLoop() {
    if (animationFrame || reducedMotion) return;

    const animate = () => {
      shaderTime += 0.01 * currentTimeScale;
      renderFrame();
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
  }

  function syncMotionPreference() {
    reducedMotion = !!motionQuery?.matches;

    if (reducedMotion) {
      stopLoop();
      return;
    }

    startLoop();
  }

  $effect(() => {
    if (!canvas) return;

    gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false
    });

    if (!gl) return;

    program = createProgram(gl);
    positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    resizeCanvas();
    ready = true;

    resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      if (reducedMotion) renderFrame();
    });
    resizeObserver.observe(canvas);

    motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionQuery.addEventListener('change', syncMotionPreference);
    syncMotionPreference();

    return () => {
      stopLoop();
      resizeObserver?.disconnect();
      motionQuery?.removeEventListener('change', syncMotionPreference);

      if (gl) {
        if (positionBuffer) gl.deleteBuffer(positionBuffer);
        if (program) gl.deleteProgram(program);
      }

      ready = false;
      gl = null;
      program = null;
      positionBuffer = null;
      resizeObserver = null;
      motionQuery = null;
    };
  });

  $effect(() => {
    currentTimeScale = timeScale;
    setUniforms();
    if (ready && reducedMotion) renderFrame();
  });
</script>

<canvas bind:this={canvas} class="absolute inset-0 h-full w-full {_class}" aria-hidden="true"></canvas>
