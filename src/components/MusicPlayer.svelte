<script lang="ts">
  import Icon from '@iconify/svelte';
  import pauseIcon from '@iconify-icons/mdi/pause';
  import playIcon from '@iconify-icons/mdi/play';
  import skipNextIcon from '@iconify-icons/mdi/skip-next';
  import { onDestroy, onMount, tick } from 'svelte';
  import { fly } from 'svelte/transition';

  let playerToggle = $state(false);
  let isPlaying = $state(false);
  let trackIndex = $state(0);
  let audio: HTMLAudioElement | undefined = $state();
  let visualizerLevels = $state<number[]>([]);
  let { shaderTimeScale = $bindable(1) }: { shaderTimeScale?: number } = $props();

  type BeatRange = {
    from: number;
    to: number;
  };

  type Track = {
    artist: string;
    song: string;
    file: string;
    volume: number;
    url: string;
    bpm?: number;
    beatSkipRanges?: BeatRange[];
  };

  const tracks: Track[] = [
    {
      artist: 'asoookha',
      song: "Please, Let's Go",
      file: 'pleaseletsgo.m4a',
      volume: 0.25,
      url: 'https://open.spotify.com/track/3yISBMGmyWBepG3qC3dYsM?si=64682658b53c4ccb',
      bpm: 81,
      beatSkipRanges: [
        { from: 0, to: 4 }
      ]
    },
    {
      artist: 'Aexion',
      song: 'Penrose',
      file: 'penrose.mp3',
      volume: 0.5,
      url: 'https://open.spotify.com/track/581LGl1wK66VxvnEJyAsrx',
      bpm: 90,
      beatSkipRanges: [
        { from: 0, to: 60 }
      ]
    },
    {
      artist: 'asoookha',
      song: "nyx",
      file: 'nyx.mp3',
      volume: 0.25,
      url: 'https://open.spotify.com/track/4iWCcE1BrWHmA9MuCQSsLs',
      bpm: 147,
      beatSkipRanges: []
    },
    {
      artist: 'Urabon',
      song: 'Grillo',
      file: 'grillo.mp3',
      volume: 0.125,
      url: 'https://open.spotify.com/track/79yV0Z9bWsAo8yjhZNP0uX',
      bpm: 132,
      beatSkipRanges: [
        { from: 0, to: 32 }
      ]
    },
    {
      artist: 'asoookha',
      song: 'Sailor Neptune',
      file: 'sailor.mp3',
      volume: 0.5,
      url: 'https://open.spotify.com/track/5KRuVURw5XmwTJ2PJZuoZc',
      bpm: 128,
      beatSkipRanges: []
    }
  ];

  let audioContext: AudioContext | undefined;
  let analyser: AnalyserNode | undefined;
  let source: MediaElementAudioSourceNode | undefined;
  let frequencyData: Uint8Array | undefined;
  let animationFrame = 0;
  let beatAnimationFrame = 0;
  let beatPulseStartedAt = 0;
  let lastBeat = 0;

  const barCount = 50;
  const beatPulseMultiplier = 10;
  const beatPulseDecayMs = 260;
  const activeTrack = $derived(tracks[trackIndex]);
  visualizerLevels = Array.from({ length: barCount }, () => 8);

  function beatIsSkipped(track: Track, beat: number) {
    return track.beatSkipRanges?.some((range) => beat >= range.from && beat <= range.to) ?? false;
  }

  function stopBeatPulse() {
    if (beatAnimationFrame) {
      cancelAnimationFrame(beatAnimationFrame);
      beatAnimationFrame = 0;
    }

    shaderTimeScale = 1;
  }

  function updateBeatPulse(now = performance.now()) {
    if (!audio || !isPlaying || !activeTrack.bpm) {
      stopBeatPulse();
      return;
    }

    const secondsPerBeat = 60 / activeTrack.bpm;
    const beat = Math.floor(audio.currentTime / secondsPerBeat) + 1;

    if (beat !== lastBeat) {
      lastBeat = beat;

      if (!beatIsSkipped(activeTrack, beat)) {
        beatPulseStartedAt = now;
        shaderTimeScale = beatPulseMultiplier;
      }
    }

    if (beatPulseStartedAt) {
      const progress = Math.min(1, (now - beatPulseStartedAt) / beatPulseDecayMs);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      shaderTimeScale = 1 + (beatPulseMultiplier - 1) * (1 - easedProgress);

      if (progress >= 1) {
        beatPulseStartedAt = 0;
        shaderTimeScale = 1;
      }
    }

    beatAnimationFrame = requestAnimationFrame(updateBeatPulse);
  }

  function startBeatPulse() {
    stopBeatPulse();
    lastBeat = 0;
    beatPulseStartedAt = 0;

    if (!activeTrack.bpm) return;

    beatAnimationFrame = requestAnimationFrame(updateBeatPulse);
  }

  function updateVisualizer() {
    if (!analyser || !frequencyData) return;

    // @ts-ignore
    analyser.getByteFrequencyData(frequencyData);

    const binSize = Math.floor(frequencyData.length / barCount);
    visualizerLevels = visualizerLevels.map((level, index) => {
      const start = index * binSize;
      const bins = frequencyData!.slice(start, start + binSize);
      const average = bins.reduce((sum, value) => sum + value, 0) / bins.length || 0;
      const nextLevel = Math.max(8, Math.min(100, (average / 255) * 110));

      return isPlaying ? nextLevel : Math.max(8, level * 0.82);
    });

    animationFrame = requestAnimationFrame(updateVisualizer);
  }

  async function setupAudioGraph() {
    if (!audio) return;

    audioContext ??= new AudioContext();

    if (!analyser) {
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 128;
      analyser.smoothingTimeConstant = 0.50;
      frequencyData = new Uint8Array(analyser.frequencyBinCount);
    }

    if (!source) {
      source = audioContext.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
    }

    if (audioContext.state === 'suspended') {
      await audioContext.resume();
    }

    if (!animationFrame) {
      updateVisualizer();
    }
  }

  async function playActiveTrack() {
    if (!audio) return;

    audio.volume = activeTrack.volume;

    try {
      await setupAudioGraph();
      await audio.play();
      isPlaying = true;
      startBeatPulse();
    } catch {
      isPlaying = false;
      stopBeatPulse();
    }
  }

  async function togglePlayer() {
    playerToggle = true;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      stopBeatPulse();
      return;
    }

    await playActiveTrack();
  }

  async function advanceTrack(shouldPlay = isPlaying) {
    trackIndex = (trackIndex + 1) % tracks.length;
    await tick();

    if (!audio) return;

    audio.currentTime = 0;
    if (shouldPlay) await playActiveTrack();
  }

  onDestroy(() => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }

    stopBeatPulse();
    void audioContext?.close();
  });


  let loaded = $state(false);
  onMount(() => (loaded = true));
</script>

{#if loaded}
  <div class="{playerToggle ? 'h-10' : 'h-0'} transition-all relative z-10">
    <audio
      bind:this={audio}
      src="/sounds/{activeTrack.file}"
      preload="metadata"
      onended={() => advanceTrack(true)}
      onpause={() => (isPlaying = false)}
      onplay={() => (isPlaying = true)}
    ></audio>

    <button
      onclick={togglePlayer}
      class="absolute top-0 z-20 p-2 hover:bg-black/25 rounded-2xl text-white drop-shadow drop-shadow-black/50 animate-in fade-in cursor-pointer"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      aria-pressed={isPlaying}
    >
      <Icon icon={isPlaying ? pauseIcon : playIcon} class="size-6" />
    </button>

    <div class="h-full overflow-hidden relative">
      <div class="absolute inset-0 flex items-end gap-0.5 md:px-3 opacity-45 pointer-events-none" aria-hidden="true">
        {#each visualizerLevels as height, index (index)}
          <span
            class="visualizer-bar w-1 flex-1 max-w-5 md:rounded-t-sm bg-brand"
            style:--bar-height="{height}%"
          ></span>
        {/each}
      </div>

      <div class="relative z-10 pl-10 pr-10 h-10 overflow-hidden flex items-center gap-1">
        {#key trackIndex}
          <a
            href={activeTrack.url}
            target="_blank"
            onclick={() => audio?.pause()}
            class="min-w-0 flex items-center gap-1 absolute top-0 h-10 drop-shadow-sm drop-shadow-black group"
            transition:fly={{ duration: 180, y: 12 }}
          >
            <span class="truncate text-zinc-200 group-hover:underline group-focus-visible:underline">{activeTrack.artist}</span>
            <span class="font-bold text-white truncate group-hover:underline group-focus-visible:underline">{activeTrack.song}</span>
          </a>
        {/key}
      </div>

      {#if playerToggle}
        <button
          onclick={() => advanceTrack()}
          class="absolute right-0 top-0 z-20 p-2 hover:bg-black/25 rounded-2xl text-white drop-shadow drop-shadow-black/50 cursor-pointer"
          aria-label="Skip track"
        >
          <Icon icon={skipNextIcon} class="size-6" />
        </button>
      {/if}
    </div>
  </div>
{/if}

<style>
  .visualizer-bar {
    height: var(--bar-height);
    transform-origin: bottom;
    transition: height 80ms linear;
  }
</style>
