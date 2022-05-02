import { Icon } from '@iconify/react';
import clsx from 'clsx';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { Tooltip } from 'react-tippy';
import { useLanyard } from 'react-use-lanyard';

import SnazzahAvatar from '../components/SnazzahAvatar';
import SnazzahLogo from '../components/SnazzahLogo';
import { contribs, links, projects, skills, spons } from '../util/content';
import * as icons from '../util/icons';

const Home: NextPage = () => {
  const lanyard = useLanyard({ userId: '158049329150427136' });
  const lanyardAvailable = !lanyard.isValidating && lanyard.data && lanyard.data.success;

  return (
    <div id="home" className="min-h-screen bg-neutral-900 text-white">
      <Head>
        <meta charSet="utf-8" />
        <title>Snazzah</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta content="TypeScript developer, wild cat" property="og:description" />
        <meta content="Snazzah" property="og:title" />
        <meta content="https://snazzah.com/images/avatar.min.png" property="og:image" />
        <meta content="image/png" property="og:image:type" />
        <meta content="150" property="og:image:width" />
        <meta content="150" property="og:image:height" />
        <meta content="https://snazzah.com" property="og:url" />
        <meta content="Snazzah" property="og:site_name" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://snazzah.com" />
        <meta name="twitter:title" content="Snazzah" />
        <meta name="twitter:description" content="TypeScript developer, wild cat" />
        <meta name="twitter:image" content="https://snazzah.com/images/avatar.min.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="150" />
        <meta name="twitter:image:height" content="150" />
        <meta name="twitter:creator" content="@Snazzah" />
        <meta name="twitter:site" content="@Snazzah" />

        <meta name="description" content="TypeScript developer, wild cat" />
        <meta name="title" content="Snazzah" />

        <meta name="subject" content="TypeScript developer, wild cat" />
        <meta name="copyright" content="Snazzah" />
        <meta name="owner" content="Snazzah" />
        <meta name="revised" content="Monday, Feburary 22th, 2021, 10:00 am" />
        <meta name="rating" content="General" />

        <link rel="fluid-icon" type="image/png" href="https://snazzah.com/images/avatar.min.png" />
        <link rel="canonical" href="https://snazzah.com/index.html" />

        <link rel="apple-touch-icon" sizes="180x180" href="/images/meta/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/meta/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/meta/favicon-16x16.png" />
        <link rel="mask-icon" href="/images/meta/safari-pinned-tab.svg" color="#fc2929" />
        <meta name="msapplication-TileColor" content="#fc2929" />
        <meta name="theme-color" content="#fc2929" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <div className="sm:max-w-4xl sm:mx-auto sm:p-12 sm:space-y-10">
        <div className="bg-brand sm:rounded-xl overflow-hidden">
          <div className="flex flex-row items-center justify-center space-x-4 sm:rounded-t-xl">
            <SnazzahLogo className="fill-current my-4 h-14 lg:h-20 lg:my-8 filter drop-shadow-txt transition-transform transform hover:scale-105" />
            <div className="relative self-end select-none" title="That's me!">
              <SnazzahAvatar className="xl:h-48 xl:mt-2 lg:h-32 h-20" />
              {lanyardAvailable && lanyard.data!.data.discord_status === 'online' && (
                <div className="absolute bottom-0 right-0 mb-2 mr-2">
                  {/* @ts-ignore */}
                  <Tooltip
                    position="left"
                    arrow={true}
                    html={
                      <span>
                        {lanyard.data!.data.listening_to_spotify ? (
                          <>
                            {'Listening to '}
                            <b>{lanyard.data!.data.spotify!.song}</b>
                            {` by ${lanyard.data!.data.spotify!.artist}`}
                          </>
                        ) : (
                          'Online on Discord'
                        )}
                      </span>
                    }
                  >
                    <div
                      className={clsx(
                        lanyard.data!.data.listening_to_spotify ? 'lg:w-10 lg:h-10 w-6 h-6' : 'lg:w-6 lg:h-6 w-4 h-4',
                        'bg-green-500 whitespace-nowrap flex rounded-full items-center justify-center'
                      )}
                    >
                      {lanyard.data!.data.listening_to_spotify && <Icon icon={icons.spotify} className="fill-current text-white lg:w-6 lg:h-6" />}
                    </div>
                  </Tooltip>
                </div>
              )}
            </div>
          </div>
          <div className="p-2 text-center flex flex-col space-y-1 lg:text-xl lg:p-4 bg-black bg-opacity-25">
            <span>
              Full-stack developer, mainly proficient in{' '}
              <a className="font-medium hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.typescriptlang.org/">
                <span>TypeScript</span>
              </a>{' '}
              and{' '}
              <a className="font-medium hover:underline" target="_blank" rel="noopener noreferrer" href="https://python.org/">
                <span>Python</span>
              </a>
              .
            </span>
            <span className="text-base">
              I make websites, bots, and APIs and have been since <b>2014</b>.
            </span>
          </div>
          <div className="flex flex-row flex-wrap justify-center p-3 space-x-4 bg-black bg-opacity-50">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                title={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
              >
                <Icon className="w-8 h-8" icon={link.icon} />
              </a>
            ))}
          </div>
          <div className="flex flex-row flex-wrap justify-center p-3 space-x-6 bg-black bg-opacity-60">
            {spons.map((link, i) => (
              <a
                key={i}
                href={link.url}
                title={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-300 transition-all transform hover:scale-110 focus:scale-110 outline-none"
              >
                <Icon className="w-6 h-6" icon={link.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="bg-yellow-500 sm:rounded-xl overflow-hidden">
          <h3 className="text-2xl lg:text-3xl py-4 px-6 font-bold text-center filter drop-shadow-txt">Skills</h3>
          {skills.map(([title, icons], i) => (
            /* bg-opacity-20 bg-opacity-30 bg-opacity-40 bg-opacity-50 */
            <Fragment key={i}>
              <h4 className={`text-md py-2 px-6 bg-black bg-opacity-${i + 2}0`}>{title}</h4>
              <div className={`flex flex-row flex-wrap pb-3 px-4 bg-black bg-opacity-${i + 2}0`}>
                {icons.map((icon, i) => (
                  <a
                    key={i}
                    title={icon.name}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white ${icon.color} m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none`}
                  >
                    <Icon className="w-8 h-8" icon={icon.icon} />
                  </a>
                ))}
              </div>
            </Fragment>
          ))}
        </div>

        <div className="bg-green-500 sm:rounded-xl overflow-hidden">
          <h3 className="text-2xl lg:text-3xl py-4 px-6 font-bold text-center filter drop-shadow-txt">Projects</h3>
          {projects.map((project, i) => (
            /* bg-opacity-20 bg-opacity-25 */
            <div key={i} className={`flex flex-col p-4 bg-black bg-opacity-2${(i % 2) * 5} space-y-2`}>
              <span className="text-xl flex flex-row items-center space-x-2">
                {project.icons && project.icons.map((icon, i) => <Icon key={i} icon={icon} />)}
                <b>{project.name}</b>
              </span>
              <span>{project.description}</span>
              {project.buttons && (
                <div className="flex flex-row space-x-2">
                  {project.buttons.map((button, i) => (
                    <a
                      key={i}
                      className="rounded-full bg-green-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-green-500 focus:ring-green-300 focus:ring-2 outline-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={button.url}
                    >
                      {button.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <h4 className="text-md py-2 px-6 bg-black bg-opacity-40 italic text-center">View more projects&hellip;</h4>
          <div className="flex flex-row flex-wrap pb-3 px-4 bg-black bg-opacity-40 justify-center">
            <a
              href="https://github.com/Snazzah?tab=repositories&q=&type=source&language=&sort="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-300 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.github} />
            </a>
            <a
              href="https://www.npmjs.com/~snazzah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-300 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.npm} />
            </a>
            <a
              href="https://rubygems.org/profiles/Snazzah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-300 m-2 transition-all transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-8 h-8" icon={icons.rubygems} />
            </a>
          </div>
        </div>

        <div className="bg-blue-500 sm:rounded-xl overflow-hidden">
          <h3 className="text-2xl lg:text-3xl py-4 px-6 font-bold text-center filter drop-shadow-txt">Contributions</h3>
          {contribs.map((project, i) => (
            /* bg-opacity-20 bg-opacity-25 */
            <div key={i} className={`flex flex-col p-4 bg-black bg-opacity-2${(i % 2) * 5} space-y-2`}>
              <span className="text-xl flex flex-row items-center space-x-2">
                {project.icons && project.icons.map((icon, i) => <Icon key={i} icon={icon} />)}
                <b>{project.name}</b>
              </span>
              <span>{project.description}</span>
              {project.buttons && (
                <div className="flex flex-row space-x-2">
                  {project.buttons.map((button, i) => (
                    <a
                      key={i}
                      className="rounded-full bg-blue-900 bg-opacity-50 py-1 px-4 ring-0 transition-all hover:bg-blue-500 focus:ring-blue-300 focus:ring-2 outline-none"
                      target="_blank"
                      rel="noopener noreferrer"
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

        <div className="flex flex-col p-10 space-y-2 text-center">
          <div className="text-xl font-light leading-none tracking-tight">
            <a
              href="https://snazzah.com"
              className="mr-2 decoration-clone bg-clip-text font-bold text-transparent bg-gradient-to-b from-red-400 to-red-500"
            >
              Snazzah
            </a>
            &copy; {new Date().getFullYear()}
          </div>
          <span className="text-sm">
            Made with{' '}
            <a className="font-bold hover:underline" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>
            ,{' '}
            <a className="font-bold hover:underline" href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
              Tailwind
            </a>{' '}
            and{' '}
            <a className="font-bold hover:underline" href="https://preactjs.com" target="_blank" rel="noopener noreferrer">
              Preact
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
