import { Fragment, FunctionalComponent, h } from 'preact';
import { Icon, IconifyIcon } from '@iconify/react';
import * as icons from '../icons';
import SnazzahLogo from '../components/svg/snazzah-logo';

type IconSectionContent = [
  string,
  {
    name: string;
    url: string;
    color: string;
    icon: IconifyIcon;
  }[]
][];

type SectionContent = {
  icons?: IconifyIcon[];
  name: string;
  description: string;
  buttons?: {
    url: string;
    name: string;
  }[];
}[];

type SimpleLinkContent = {
  name: string;
  url: string;
  icon: IconifyIcon;
}[];

const links: SimpleLinkContent = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/Snazzah',
    icon: icons.twitter
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Snazzah',
    icon: icons.github
  },
  {
    name: 'Steam',
    url: 'https://steamcommunity.com/id/Snazzah',
    icon: icons.steam
  },
  {
    name: 'Twitch',
    url: 'https://twitch.tv/SnazzahGuy',
    icon: icons.twitch
  },
  {
    name: 'Discord',
    url: 'https://snaz.in/discord',
    icon: icons.discord
  },
  {
    name: 'E-mail',
    url: 'mailto:me@snazzah.com',
    icon: icons.email
  }
];

const spons: SimpleLinkContent = [
  {
    name: 'PayPal',
    url: 'https://paypal.me/Snazzah',
    icon: icons.paypal
  },
  {
    name: 'Patreon',
    url: 'https://patreon.com/Snazzah',
    icon: icons.patreon
  },
  {
    name: 'Cash.app',
    url: 'https://cash.app/$Snazzah',
    icon: icons.cashApp
  },
  {
    name: 'GitHub Sponsors',
    url: 'https://github.com/sponsors/Snazzah',
    icon: icons.githubSponsors
  }
];

const skills: IconSectionContent = [
  [
    'Language & Syntax',
    [
      {
        name: 'HTML',
        url: 'https://www.w3schools.com/html/',
        color: 'hover:text-orange-500',
        icon: icons.html
      },
      {
        name: 'CSS',
        url: 'https://www.w3schools.com/css/',
        color: 'hover:text-blue-400',
        icon: icons.css
      },
      {
        name: 'JavaScript',
        url: 'https://www.javascript.com/',
        color: 'hover:text-yellow-300',
        icon: icons.js
      },
      {
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        color: 'hover:text-blue-500',
        icon: icons.ts
      },
      {
        name: 'Node.js',
        url: 'https://www.nodejs.org/',
        color: 'hover:text-green-500',
        icon: icons.nodejs
      },
      {
        name: 'Python',
        url: 'https://www.python.org/',
        color: 'hover:text-yellow-300',
        icon: icons.python
      },
      {
        name: 'Ruby',
        url: 'https://www.ruby-lang.org/en/',
        color: 'hover:text-red-500',
        icon: icons.ruby
      },
      {
        name: 'Sass',
        url: 'https://sass-lang.com/',
        color: 'hover:text-pink-400',
        icon: icons.sass
      },
      {
        name: 'Stylus',
        url: 'https://stylus-lang.com/',
        color: 'hover:text-tgray-400',
        icon: icons.stylus
      }
    ]
  ],
  [
    'Frameworks',
    [
      {
        name: 'Vue',
        url: 'https://vuejs.org/',
        color: 'hover:text-green-500',
        icon: icons.vue
      },
      {
        name: 'React',
        url: 'https://reactjs.org/',
        color: 'hover:text-blue-400',
        icon: icons.react
      },
      {
        name: 'TailwindCSS',
        url: 'https://tailwindcss.com/',
        color: 'hover:text-teal-500',
        icon: icons.tailwind
      },
      {
        name: 'Fastify',
        url: 'https://fastify.io/',
        color: 'hover:text-tgray-200',
        icon: icons.fastify
      },
      {
        name: 'Express',
        url: 'https://expressjs.com/',
        color: 'hover:text-tgray-200',
        icon: icons.express
      }
    ]
  ],
  [
    'Tools',
    [
      {
        name: 'Visual Studio Code',
        url: 'https://code.visualstudio.com/',
        color: 'hover:text-blue-500',
        icon: icons.vscode
      },
      {
        name: 'Sublime Text',
        url: 'https://www.sublimetext.com/',
        color: 'hover:text-yellow-500',
        icon: icons.sublime
      },
      {
        name: 'Git',
        url: 'https://git-scm.com/',
        color: 'hover:text-red-500',
        icon: icons.git
      },
      {
        name: 'PostgreSQL',
        url: 'https://www.postgresql.org/',
        color: 'hover:text-blue-500',
        icon: icons.psql
      },
      {
        name: 'Redis',
        url: 'https://redis.io/',
        color: 'hover:text-red-500',
        icon: icons.redis
      },
      {
        name: 'nginx',
        url: 'https://nginx.org/en/',
        color: 'hover:text-green-400',
        icon: icons.nginx
      }
    ]
  ]
];

const projects: SectionContent = [
  {
    icons: [icons.python],
    name: 'SnazzahAPI',
    description: 'API endpoints for various services.',
    buttons: [
      {
        name: 'Website',
        url: 'https://api.snaz.in/docs'
      }
    ]
  },
  {
    icons: [icons.python],
    name: 'HotImage',
    description: 'Easy-to-use application that turns folders into image API.',
    buttons: [
      {
        name: 'GitHub',
        url: 'https://github.com/Snazzah/HotImage'
      },
      {
        name: 'Website',
        url: 'https://hi.snaz.in/'
      }
    ]
  },
  {
    icons: [icons.discord, icons.nodejs],
    name: 'PhotoBox',
    description: 'A Discord bot that uses image processing to make pictures from templates.',
    buttons: [
      {
        name: 'Bot Invite',
        url: 'https://invite.snaz.in/photobox'
      },
      {
        name: 'Website',
        url: 'https://photobox.pw'
      }
    ]
  },
  {
    icons: [icons.js, icons.chrome],
    name: 'Media Session Master',
    description: 'A Discord bot that uses image processing to make pictures from templates.',
    buttons: [
      {
        name: 'GitHub',
        url: 'https://github.com/Snazzah/MediaSessionMaster'
      },
      {
        name: 'View in Chrome Web Store',
        url: 'https://chrome.google.com/webstore/detail/media-session-master/ifnpfinojkapkmeidcimnaigcclnahjb'
      }
    ]
  }
];

const contribs: SectionContent = [
  {
    icons: [icons.nodejs, icons.discord],
    name: 'Taco',
    description: 'A Discord bot that manages Trello boards.',
    buttons: [
      {
        name: 'Website',
        url: 'https://tacobot.app/'
      }
    ]
  },
  {
    icons: [icons.sass],
    name: 'Modesta',
    description: 'A clean CSS framework made to be dark, responsive and easy to build with.',
    buttons: [
      {
        name: 'GitHub',
        url: 'https://github.com/AlexFlipnote/Modesta'
      },
      {
        name: 'Website',
        url: 'https://modesta.alexflipnote.dev'
      }
    ]
  },
  {
    icons: [icons.nodejs, icons.discord],
    name: 'Discord Dungeons',
    description: 'Developer team of DiscordRPG: A text-based RPG bot on Discord.',
    buttons: [
      {
        name: 'Website',
        url: 'https://discorddungeons.me/'
      }
    ]
  }
];

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
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                title={link.name}
                target="_blank"
                rel="noopener"
                class="text-white hover:text-tgray-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
              >
                <Icon className="w-8 h-8" icon={link.icon} />
              </a>
            ))}
          </div>
          <div class="flex flex-row flex-wrap justify-center p-3 space-x-6 bg-black bg-opacity-60">
            {spons.map((link, i) => (
              <a
                key={i}
                href={link.url}
                title={link.name}
                target="_blank"
                rel="noopener"
                class="text-white hover:text-tgray-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
              >
                <Icon className="w-6 h-6" icon={link.icon} />
              </a>
            ))}
          </div>
        </div>

        <div class="bg-yellow-500 sm:rounded-xl overflow-hidden">
          <h3 class="text-2xl lg:text-3xl py-4 px-6 font-bold text-center filter drop-shadow-txt">Skills</h3>
          {skills.map(([title, icons], i) => (
            /* bg-opacity-20 bg-opacity-30 bg-opacity-40 */
            <Fragment key={i}>
              <h4 class={`text-md py-2 px-6 bg-black bg-opacity-${i + 2}0`}>{title}</h4>
              <div class={`flex flex-row flex-wrap pb-3 px-4 bg-black bg-opacity-${i + 2}0`}>
                {icons.map((icon, i) => (
                  <a
                    key={i}
                    title={icon.name}
                    href={icon.url}
                    target="_blank"
                    rel="noopener"
                    class={`text-white ${icon.color} m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none`}
                  >
                    <Icon className="w-8 h-8" icon={icon.icon} />
                  </a>
                ))}
              </div>
            </Fragment>
          ))}
        </div>

        <div class="bg-green-500 sm:rounded-xl overflow-hidden">
          <h3 class="text-2xl lg:text-3xl py-4 px-6 font-bold text-center filter drop-shadow-txt">Projects</h3>
          {projects.map((project, i) => (
            /* bg-opacity-20 bg-opacity-25 */
            <div key={i} class={`flex flex-col p-4 bg-black bg-opacity-2${(i % 2) * 5} space-y-2`}>
              <span class="text-xl flex flex-row items-center space-x-2">
                {project.icons && project.icons.map((icon, i) => <Icon key={i} icon={icon} />)}
                <b>{project.name}</b>
              </span>
              <span>{project.description}</span>
              {project.buttons && (
                <div class="flex flex-row space-x-2">
                  {project.buttons.map((button, i) => (
                    <a
                      key={i}
                      class="rounded-full bg-green-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-green-500 focus:ring-green-300 focus:ring-2 outline-none"
                      target="_blank"
                      rel="noopener"
                      href={button.url}
                    >
                      {button.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <h4 class="text-md py-2 px-6 bg-black bg-opacity-40 italic text-center">View more projects&hellip;</h4>
          <div class="flex flex-row flex-wrap pb-3 px-4 bg-black bg-opacity-40 justify-center">
            <a
              href="https://github.com/Snazzah?tab=repositories&q=&type=source&language=&sort="
              target="_blank"
              rel="noopener"
              class="text-white hover:text-tgray-300 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.github} />
            </a>
            <a
              href="https://www.npmjs.com/~snazzah"
              target="_blank"
              rel="noopener"
              class="text-white hover:text-tgray-300 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.npm} />
            </a>
            <a
              href="https://rubygems.org/profiles/Snazzah"
              target="_blank"
              rel="noopener"
              class="text-white hover:text-tgray-300 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.rubygems} />
            </a>
          </div>
        </div>

        <div class="bg-blue-500 sm:rounded-xl overflow-hidden">
          <h3 class="text-2xl lg:text-3xl py-4 px-6 font-bold text-center filter drop-shadow-txt">Contributions</h3>
          {contribs.map((project, i) => (
            /* bg-opacity-20 bg-opacity-25 */
            <div key={i} class={`flex flex-col p-4 bg-black bg-opacity-2${(i % 2) * 5} space-y-2`}>
              <span class="text-xl flex flex-row items-center space-x-2">
                {project.icons && project.icons.map((icon, i) => <Icon key={i} icon={icon} />)}
                <b>{project.name}</b>
              </span>
              <span>{project.description}</span>
              {project.buttons && (
                <div class="flex flex-row space-x-2">
                  {project.buttons.map((button, i) => (
                    <a
                      key={i}
                      class="rounded-full bg-blue-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-blue-500 focus:ring-blue-300 focus:ring-2 outline-none"
                      target="_blank"
                      rel="noopener"
                      href={button.url}
                    >
                      {button.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div class="flex flex-col p-10 space-y-2 text-center">
          <div class="text-xl font-light leading-none tracking-tight">
            <a
              href="https://snazzah.com"
              class="mr-2 decoration-clone bg-clip-text font-bold text-transparent bg-gradient-to-b from-red-400 to-red-500"
            >
              Snazzah
            </a>
            &copy; {new Date().getFullYear()}
          </div>
          <span class="text-sm">
            Made with{' '}
            <a class="font-bold hover:underline" href="https://tailwindcss.com" target="_blank" rel="noopener">
              Tailwind
            </a>{' '}
            and{' '}
            <a class="font-bold hover:underline" href="https://preactjs.com" target="_blank" rel="noopener">
              Preact
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
