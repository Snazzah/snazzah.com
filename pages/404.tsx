import { Icon } from '@iconify/react/offline';
import { default as robot } from '@iconify-icons/mdi/robot-confused';
import type { NextPage } from 'next';
import Head from 'next/head';

const headerPhrases = ['Uh...', 'Where am I?', 'Wrong turn.', 'Oh no.', 'What is this?', 'Huh?'];

const Home: NextPage = () => {
  return (
    <div id="404" className="min-h-screen bg-gray-900 text-white flex justify-center items-center sm:items-baseline">
      <Head>
        <meta charSet="utf-8" />
        <title>404 | Snazzah</title>
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
        <meta name="twitter:title" content="404 | Snazzah" />
        <meta name="twitter:description" content="TypeScript developer, wild cat" />
        <meta name="twitter:image" content="https://snazzah.com/images/avatar.min.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="150" />
        <meta name="twitter:image:height" content="150" />
        <meta name="twitter:creator" content="@Snazzah" />
        <meta name="twitter:site" content="@Snazzah" />

        <meta name="description" content="TypeScript developer, wild cat" />
        <meta name="title" content="404 | Snazzah" />

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

      <div className="sm:mx-auto px-24 sm:py-24 flex justify-center">
        <div className="flex gap-4">
          <div className="w-24 h-24" title="Even this robot is confused. I thought robots were supposed to be smart.">
            <Icon className="w-24 h-24 text-gray-500 transition-colors hover:text-gray-300" icon={robot} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl m-0">{headerPhrases[Math.floor(Math.random() * headerPhrases.length)]}</h1>
              <p className="text-sm">This page doesn&apos;t actually exist. Might wanna turn back now.</p>
            </div>
            <a
              href="/"
              className="rounded-full cursor-pointer transition-colors bg-gray-600 hover:bg-gray-500 bg-opacity-50 py-2 px-6 w-min whitespace-nowrap"
            >
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
