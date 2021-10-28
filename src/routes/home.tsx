import { FunctionalComponent, h } from 'preact';
import { Icon } from '@iconify/react';
import * as icons from '../icons';
import SnazzahLogo from '../components/svg/snazzah-logo';

const Home: FunctionalComponent = () => {
  return (
    <div id="home" class="min-h-screen bg-tgray-900 text-white">
      <div class="sm:max-w-4xl sm:mx-auto sm:p-12 sm:space-y-10">
        <div class="bg-brand sm:rounded-xl overflow-hidden">
          <div class="flex flex-row items-center justify-center space-x-4 sm:rounded-t-xl">
            <SnazzahLogo />
            <img
              src="/i/snazzah-icon.svg"
              draggable={false}
              class="xl:h-48 xl:mt-2 lg:h-32 h-20 self-end select-none"
            />
          </div>
          <div class="p-2 text-center font-light flex flex-col space-y-1 lg:text-xl lg:p-4 bg-black bg-opacity-25">
            <span>
              Full-stack developer, mainly proficient in{' '}
              <a
                class="font-normal hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.typescriptlang.org/"
              >
                <span>TypeScript</span>
              </a>{' '}
              and{' '}
              <a
                class="font-normal hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://python.org/"
              >
                <span>Python</span>
              </a>
              .
            </span>
            <span class="text-base">
              I make websites, bots, and APIs and have been since <b>2014</b>.
            </span>
          </div>
          <div class="flex flex-row flex-wrap justify-center p-3 space-x-4 bg-black bg-opacity-50">
            <a
              href="https://twitter.com/Snazzah"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.twitter} />
            </a>
            <a
              href="https://github.com/Snazzah"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.github} />
            </a>
            <a
              href="https://steamcommunity.com/id/Snazzah"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.steam} />
            </a>
            <a
              href="https://twitch.tv/SnazzahGuy"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.twitch} />
            </a>
            <a
              href="https://snaz.in/discord"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.discord} />
            </a>
            <a
              href="mailto:me@snazzah.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.email} />
            </a>
          </div>
          <div class="flex flex-row flex-wrap justify-center p-3 space-x-6 bg-black bg-opacity-60">
            <a
              href="https://paypal.me/Snazzah"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-6 h-6" icon={icons.paypal} />
            </a>
            <a
              href="https://cash.app/$Snazzah"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-6 h-6" icon={icons.cashApp} />
            </a>
            <a
              href="https://patreon.com/Snazzah"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-6 h-6" icon={icons.patreon} />
            </a>
            <a
              href="https://github.com/sponsors/Snazzah"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-6 h-6" icon={icons.githubSponsors} />
            </a>
          </div>
        </div>

        <div class="bg-yellow-500 sm:rounded-xl overflow-hidden">
          <h3 class="text-2xl lg:text-3xl py-4 px-6 font-bold text-center filter drop-shadow-txt">Skills</h3>
          <h4 class="text-md py-2 px-6 bg-black bg-opacity-20">Language &amp; Syntax</h4>
          <div class="flex flex-row flex-wrap pb-3 px-4 bg-black bg-opacity-20">
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-orange-500 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.html} />
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-blue-400 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.css} />
            </a>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-yellow-300 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.js} />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-blue-500 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.ts} />
            </a>
            <a
              href="https://www.nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-green-500 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.nodejs} />
            </a>
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-yellow-300 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.python} />
            </a>
            <a
              href="https://www.ruby-lang.org/en/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-red-500 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.ruby} />
            </a>
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-pink-400 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.sass} />
            </a>
            <a
              href="https://stylus-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-400 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.stylus} />
            </a>
          </div>
          <h4 class="text-md py-2 px-6 bg-black bg-opacity-30">Frameworks</h4>
          <div class="flex flex-row flex-wrap pb-3 px-4 bg-black bg-opacity-30">
            <a
              href="https://vuejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-green-500 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.vue} />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-teal-500 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.tailwind} />
            </a>
            <a
              href="https://fastify.io/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-200 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.fastify} />
            </a>
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-200 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.express} />
            </a>
          </div>
          <h4 class="text-md py-2 px-6 bg-black bg-opacity-40">Tools</h4>
          <div class="flex flex-row flex-wrap pb-3 px-4 bg-black bg-opacity-40">
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-blue-500 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.vscode} />
            </a>
            <a
              href="https://www.sublimetext.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-yellow-500 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.sublime} />
            </a>
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-red-500 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.git} />
            </a>
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-blue-500 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.psql} />
            </a>
            <a
              href="https://redis.io/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-red-500 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.redis} />
            </a>
            <a
              href="https://nginx.org/en/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-green-400 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.nginx} />
            </a>
          </div>
        </div>

        <div class="bg-green-500 sm:rounded-xl overflow-hidden">
          <h3 class="text-2xl lg:text-3xl py-4 px-6 font-bold text-center filter drop-shadow-txt">Projects</h3>
          <div class="flex flex-col p-4 bg-black bg-opacity-20 space-y-2">
            <span class="text-xl flex flex-row items-center space-x-2">
              <Icon icon={icons.python} />
              <Icon icon={icons.nodejs} />
              <b>SnazzahAPI</b>
            </span>
            <span>API endpoints for various services.</span>
            <div class="flex flex-row space-x-2">
              <a
                class="rounded-full bg-green-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-green-500 focus:ring-green-300 focus:ring-2 outline-none"
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.snaz.in/docs"
              >
                Website
              </a>
            </div>
          </div>
          <div class="flex flex-col p-4 bg-black bg-opacity-25 space-y-2">
            <span class="text-xl flex flex-row items-center space-x-2">
              <Icon icon={icons.python} />
              <b>HotImage</b>
            </span>
            <span>Easy-to-use application that turns folders into image API.</span>
            <div class="flex flex-row space-x-2">
              <a
                class="rounded-full bg-green-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-green-500 focus:ring-green-300 focus:ring-2 outline-none"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Snazzah/HotImage"
              >
                GitHub
              </a>
              <a
                class="rounded-full bg-green-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-green-500 focus:ring-green-300 focus:ring-2 outline-none"
                target="_blank"
                rel="noopener noreferrer"
                href="https://hi.snaz.in"
              >
                Website
              </a>
            </div>
          </div>
          <div class="flex flex-col p-4 bg-black bg-opacity-20 space-y-2">
            <span class="text-xl flex flex-row items-center space-x-2">
              <Icon icon={icons.nodejs} />
              <Icon icon={icons.discord} />
              <b>PhotoBox</b>
            </span>
            <span>A Discord bot that uses image processing to make pictures from templates.</span>
            <div class="flex flex-row space-x-2">
              <a
                class="rounded-full bg-green-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-green-500 focus:ring-green-300 focus:ring-2 outline-none"
                target="_blank"
                rel="noopener noreferrer"
                href="https://invite.snaz.in/photobox"
              >
                Bot Invite
              </a>
              <a
                class="rounded-full bg-green-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-green-500 focus:ring-green-300 focus:ring-2 outline-none"
                target="_blank"
                rel="noopener noreferrer"
                href="https://photobox.pw"
              >
                Website
              </a>
            </div>
          </div>
          <div class="flex flex-col p-4 bg-black bg-opacity-25 space-y-2">
            <span class="text-xl flex flex-row items-center space-x-2">
              <Icon icon={icons.js} />
              <Icon icon={icons.chrome} />
              <b>Media Session Master</b>
            </span>
            <span>
              A Chrome extension that utilizes Chrome's MediaSession API in sites that don't fully support it.
            </span>
            <div class="flex flex-row space-x-2">
              <a
                class="rounded-full bg-green-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-green-500 focus:ring-green-300 focus:ring-2 outline-none"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Snazzah/MediaSessionMaster"
              >
                GitHub
              </a>
              <a
                class="rounded-full bg-green-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-green-500 focus:ring-green-300 focus:ring-2 outline-none"
                target="_blank"
                rel="noopener noreferrer"
                href="https://chrome.google.com/webstore/detail/media-session-master/ifnpfinojkapkmeidcimnaigcclnahjb"
              >
                Chrome Webstore
              </a>
            </div>
          </div>
          <h4 class="text-md py-2 px-6 bg-black bg-opacity-40 italic text-center">View more projects&hellip;</h4>
          <div class="flex flex-row flex-wrap pb-3 px-4 bg-black bg-opacity-40 justify-center">
            <a
              href="https://github.com/Snazzah?tab=repositories&q=&type=source&language=&sort="
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.github} />
            </a>
            <a
              href="https://www.npmjs.com/~snazzah"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.npm} />
            </a>
            <a
              href="https://rubygems.org/profiles/Snazzah"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-tgray-300 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.rubygems} />
            </a>
          </div>
        </div>

        <div class="bg-blue-500 sm:rounded-xl overflow-hidden">
          <h3 class="text-2xl lg:text-3xl py-4 px-6 font-bold text-center filter drop-shadow-txt">Contributions</h3>
          <div class="flex flex-col p-4 bg-black bg-opacity-20 space-y-2">
            <span class="text-xl flex flex-row items-center space-x-2">
              <Icon icon={icons.nodejs} />
              <Icon icon={icons.discord} />
              <b>Discord Dungeons</b>
            </span>
            <span>Developer team of DiscordRPG: A text-based RPG bot on Discord.</span>
            <div class="flex flex-row space-x-2">
              <a
                class="rounded-full bg-blue-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-blue-500 focus:ring-blue-300 focus:ring-2 outline-none"
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.snaz.in/docs"
              >
                Website
              </a>
            </div>
          </div>
          <div class="flex flex-col p-4 bg-black bg-opacity-25 space-y-2">
            <span class="text-xl flex flex-row items-center space-x-2">
              <Icon icon={icons.sass} />
              <b>Modesta</b>
            </span>
            <span>A clean CSS framework made to be dark, responsive and easy to build with.</span>
            <div class="flex flex-row space-x-2">
              <a
                class="rounded-full bg-blue-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-blue-500 focus:ring-blue-300 focus:ring-2 outline-none"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AlexFlipnote/Modesta"
              >
                GitHub
              </a>
              <a
                class="rounded-full bg-blue-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-blue-500 focus:ring-blue-300 focus:ring-2 outline-none"
                target="_blank"
                rel="noopener noreferrer"
                href="https://modesta.alexflipnote.dev"
              >
                Website
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col p-10 space-y-2 text-center">
          <div class="text-xl font-light leading-none tracking-tight">
            <a
              href="https://snazzah.com"
              class="mr-2 decoration-clone bg-clip-text font-bold text-transparent bg-gradient-to-b from-red-400 to-red-500"
            >
              Snazzah
            </a>
            &copy; 2021
          </div>
          <span class="text-sm">
            Made with{' '}
            <a
              class="font-bold hover:underline"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind
            </a>{' '}
            and{' '}
            <a class="font-bold hover:underline" href="https://preactjs.com" target="_blank" rel="noopener noreferrer">
              Preact
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
