import { IconifyIcon } from '@iconify/react';

import * as icons from './icons';

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

export const links: SimpleLinkContent = [
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

export const spons: SimpleLinkContent = [
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

export const skills: IconSectionContent = [
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
        color: 'hover:text-neutral-400',
        icon: icons.stylus
      }
    ]
  ],
  [
    'Frameworks',
    [
      {
        name: 'React',
        url: 'https://reactjs.org/',
        color: 'hover:text-blue-400',
        icon: icons.react
      },
      {
        name: 'Vue',
        url: 'https://vuejs.org/',
        color: 'hover:text-green-400',
        icon: icons.vue
      },
      {
        name: 'TailwindCSS',
        url: 'https://tailwindcss.com/',
        color: 'hover:text-teal-500',
        icon: icons.tailwind
      },
      {
        name: 'Next.js',
        url: 'https://nextjs.org/',
        color: 'hover:text-neutral-200',
        icon: icons.nextjs
      },
      {
        name: 'Nuxt.js',
        url: 'https://nuxtjs.org/',
        color: 'hover:text-green-400',
        icon: icons.nuxtjs
      },
      {
        name: 'Fastify',
        url: 'https://fastify.io/',
        color: 'hover:text-neutral-200',
        icon: icons.fastify
      },
      {
        name: 'Express',
        url: 'https://expressjs.com/',
        color: 'hover:text-neutral-200',
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
        color: 'hover:text-green-500',
        icon: icons.nginx
      },
      {
        name: 'Prisma',
        url: 'https://prisma.io/',
        color: 'hover:text-sky-900',
        icon: icons.prisma
      },
      {
        name: 'Figma',
        url: 'https://figma.com/',
        color: 'hover:text-blue-500',
        icon: icons.figma
      }
    ]
  ],
  [
    'Services & APIs',
    [
      {
        name: 'GitHub',
        url: 'https://github.com/',
        color: 'hover:text-neutral-200',
        icon: icons.github
      },
      {
        name: 'Cloudflare',
        url: 'https://cloudflare.com/',
        color: 'hover:text-amber-500',
        icon: icons.cloudflare
      },
      {
        name: 'Discord',
        url: 'https://discord.com/',
        color: 'hover:text-blue-500',
        icon: icons.discord
      }
    ]
  ]
];

export const projects: SectionContent = [
  {
    icons: [icons.discord, icons.nodejs],
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
    description: "Utilize Chrome's MediaSession API within multiple sites.",
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

export const contribs: SectionContent = [
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
