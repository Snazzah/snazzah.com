<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import { fade, fly } from "svelte/transition";
  import type { Readable } from 'svelte/store';
	import { MediaQuery } from 'svelte/reactivity';
  import Icon from '@iconify/svelte';
  import SilkWavesShader from './SilkWavesShader.svelte';
  import xIcon from '@iconify-icons/bi/twitter-x';
  import discordIcon from '@iconify-icons/bi/discord';
  import githubIcon from '@iconify-icons/mdi/github';
  import spotifyIcon from '@iconify-icons/mdi/spotify';
  import kofiIcon from '@iconify-icons/simple-icons/kofi';
  import emailIcon from '@iconify-icons/mdi/email';
  import blogIcon from '@iconify-icons/mdi/rss';
  import artIcon from '@iconify-icons/mdi/palette';
  import refreshIcon from '@iconify-icons/mdi/refresh';
	import { useLanyard } from 'svelte-lanyard';
  import { Tooltip } from "bits-ui";
  import { Marquee } from "@selemondev/svelte-marquee";
  import "@selemondev/svelte-marquee/dist/style.css";

	const isMobile = new MediaQuery('max-width: 768px');

  type LanyardData = ReturnType<typeof useLanyard> extends Readable<infer T> ? T : never;
  let lanyard = $state<LanyardData | null>(null);
  let musicTooltipOpen = $state(false);
  let shaderTimeSpeed = $state(1);

  type Props = {
    children?: Snippet;
  }

  const { children }: Props = $props();

  const socials = [
    {
      id: 'x',
      label: 'Twitter/X',
      href: 'https://x.com/Snazzah',
      handle: '@Snazzah',
      tagline: "I don't tend to tweet that much.",
      icon: xIcon
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/Snazzah',
      handle: '/Snazzah',
      tagline: "A lot of things I make go here.",
      icon: githubIcon
    },
    {
      id: 'discord',
      label: 'Discord',
      href: 'https://discord.com/users/158049329150427136',
      handle: '@snazzah',
      tagline: "Known for things on here.",
      icon: discordIcon
    },
    {
      id: 'blog',
      label: 'Blog',
      href: 'https://snazzah.blog',
      handle: 'snazzah.blog',
      tagline: "¯\\_(ツ)_/¯",
      icon: blogIcon
    },
    {
      id: 'email',
      label: 'E-mail',
      href: 'mailto:me@snazzah.com',
      handle: 'me@snazzah.com',
      tagline: "For personal inquiries, no marketing!",
      icon: emailIcon
    },
    {
      id: 'donate',
      label: 'Donate',
      href: 'https://ko-fi.com/Snazzah',
      handle: '/Snazzah',
      tagline: "If you want to.",
      icon: kofiIcon
    }
  ];

  const marqueeCopies = [0, 1, 2];
  let activeSocial = $state<string | null>(null);

  const avatars = [
    {
      id: 'frog',
      credit: '@Frog_spectacles on Twitter'
    },
    {
      id: 'chips',
      credit: '@ChipsGoWOAH on Twitter'
    }
  ];
  let avatarIndex = $state(0);

  let loaded = $state(false);
  onMount(() => {
    loaded = true;

    return useLanyard('158049329150427136').subscribe((data) => {
      lanyard = data ?? null;
    });
  });
</script>

<Tooltip.Provider>
  <main class="w-full max-w-4xl mx-auto text-zinc-300">
    <div class="bg-black overflow-hidden md:rounded-2xl shadow-xl shadow-black/50 md:m-6">
        <!-- Hero -->
      <section class="bg-brand h-40 md:h-80 flex relative px-6 overflow-hidden bg-[url('/images/tile.png')]">
        <SilkWavesShader
          timeScale={5}
          class="mix-blend-difference opacity-75"
        />
        <div class="absolute inset-0 bg-black/10 pointer-events-none z-1"></div>
        <div class="flex-1 flex items-center justify-center relative z-10">
          <h1 class="text-white font-display font-bold text-4xl md:text-7xl drop-shadow-md drop-shadow-black">Snazzah</h1>
        </div>

        <div class="relative">
          <div class="size-40 md:size-80 z-10 relative">
            {#key avatarIndex}
              <img
                src="/images/avatars/{avatars[avatarIndex].id}.png"
                alt="Snazzah"
                class="absolute left-0 size-full"
                transition:fly={{ x: 200 }}
              />
            {/key}
          </div>
          <div class="hidden md:flex absolute bottom-0 right-2 text-white gap-2 z-10" class:pr-6={!loaded}>
            {#key avatarIndex}
              <span class="bg-black px-2 rounded-t-xl text-xs">
                <Icon icon={artIcon} class="inline text-base" />
                <span>{avatars[avatarIndex].credit}</span>
              </span>
            {/key}
            {#if loaded}
              <button class="bg-black/25 rounded-full hover:bg-black focus-visible:bg-black transition-colors size-4 cursor-pointer" onclick={() => (avatarIndex = avatarIndex >= avatars.length - 1 ? 0 : avatarIndex + 1)}>
                <Icon icon={refreshIcon} />
              </button>
            {/if}
          </div>
        </div>

        {#if lanyard?.spotify}
          <div transition:fly={{ duration: 300, x: 24 }} class="translate-x-6 z-10">
            <Tooltip.Root delayDuration={0} disableHoverableContent bind:open={musicTooltipOpen}>
              <Tooltip.Trigger>
                {#snippet child({ props })}
                  <a
                    href="https://open.spotify.com/track/{lanyard!.spotify!.track_id}"
                    target="_blank"
                    class="bg-black w-40 md:w-80 h-6 -rotate-90 origin-right absolute right-3 -top-3 text-green-500 z-20"
                    {...props}
                  >
                    {#if musicTooltipOpen}
                      <div
                        class="absolute w-full h-[1500%] bg-linear-to-b from-transparent to-black/75 bottom-full pointer-events-none"
                        transition:fade={{ duration: 150 }}
                      ></div>
                    {/if}
                    <Marquee pauseOnHover={true} class="gap-8" innerClassName="gap-8">
                      {#each marqueeCopies as copy (copy)}
                        <div class="flex gap-2 items-center">
                          <Icon icon={spotifyIcon} class="size-5" />
                          <span>{lanyard!.spotify!.artist.replaceAll('; ', ', ')}</span>
                          <span class="font-bold">{lanyard!.spotify!.song}</span>
                        </div>
                      {/each}
                    </Marquee>
                  </a>
                {/snippet}
              </Tooltip.Trigger>
              <Tooltip.Content
                side="left"
                sideOffset={8}
                class="animate-in fade-in slide-in-from-right-5 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-right-5 z-50"
              >
                <div
                  class="drop-shadow-lg drop-shadow-black flex flex-col justify-center items-center p-2 rounded-lg text-zinc-50 w-80"
                >
                  <img src={lanyard.spotify!.album_art_url} alt={lanyard.spotify!.album} class="size-48 rounded-md bg-black/10 mb-2" />
                  <span class="text-white font-medium text-2xl truncate max-w-80">{lanyard.spotify!.song}</span>
                  <span class="truncate max-w-50">{lanyard.spotify!.artist.replaceAll('; ', ', ')}</span>
                </div>
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
        {/if}
      </section>

      <!-- Tagline -->
      <div class="bg-zinc-900 text-zinc-400 text-center font-medium md:text-lg overflow-hidden relative">
        <div class="p-1.5 md:p-2 transition-opacity" class:opacity-0={!!activeSocial && !isMobile.current}>I like coding things and developing software.</div>
        {#each socials as s (s.id)}
          {#if activeSocial === s.id && !isMobile.current}
            <div class="p-1.5 md:p-2 top-0 absolute w-full flex gap-1 items-center justify-center" transition:fly={{ duration: 150, y: 25 }}>
              {#if s.handle}
                <div class="flex gap-0.5 items-center justify-center pr-2 border-r border-r-zinc-700 mr-1 text-zinc-300">
                  <Icon icon={s.icon} class="mr-1" />
                  <span>{s.handle}</span>
                </div>
              {/if}
              <span>{s.tagline}</span>
            </div>
          {/if}
        {/each}
      </div>

      <!-- Socials -->
      <section class="bg-zinc-900/50 text-xl p-3 flex gap-3 flex-wrap items-center justify-around font-semibold">
        {#each socials as s (s.id)}
          <a
            href={s.href}
            target="_blank"
            class="bg-white/5 hover:bg-white/10 focus-visible:bg-white/10 hover:text-zinc-100 focus-visible:text-zinc-100 transition-colors px-4 py-1 flex gap-2 rounded-full items-center text-sm md:text-base"
            onmouseenter={() => (activeSocial = s.id)}
            onfocus={() => (activeSocial = s.id)}
            onmouseleave={() => (activeSocial === s.id ? (activeSocial = null) : undefined)}
            onblur={() => (activeSocial === s.id ? (activeSocial = null) : undefined)}
          >
            <Icon icon={s.icon} />
            <span>{s.label}</span>
          </a>
        {/each}
      </section>

      <!-- The rest -->
      {@render children?.()}
    </div>
  </main>
</Tooltip.Provider>
