import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import { Icon } from '@iconify/react';
import { default as robot } from '@iconify-icons/mdi/robot-confused';

const headerPhrases = ['Uh...', 'Where am I?', 'Wrong turn.', 'Oh no.', 'What is this?', 'Huh?'];

const NotFound: FunctionalComponent = () => {
  return (
    <div id="404" class="min-h-screen bg-gray-900 text-white flex justify-center items-center sm:items-baseline">
      <div class="sm:mx-auto px-24 sm:py-24 flex justify-center">
        <div class="flex gap-4">
          <div class="w-24 h-24" title="Even this robot is confused. I thought robots were supposed to be smart.">
            <Icon className="w-24 h-24 text-gray-500 transition-colors hover:text-gray-300" icon={robot} />
          </div>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <h1 class="text-4xl m-0">{headerPhrases[Math.floor(Math.random() * headerPhrases.length)]}</h1>
              <p class="text-sm">This page doesn't actually exist. Might wanna turn back now.</p>
            </div>
            <Link
              href="/"
              class="rounded-full cursor-pointer transition-colors bg-gray-600 hover:bg-gray-500 bg-opacity-50 py-2 px-6 w-min whitespace-nowrap"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
