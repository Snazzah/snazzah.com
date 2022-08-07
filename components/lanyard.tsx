import { Icon, IconifyIcon, InlineIcon } from '@iconify/react/offline';
import clsx from 'clsx';
import { Tooltip } from 'react-tippy';
import { Activity, useLanyard } from 'react-use-lanyard';

import * as icons from '../util/icons';

type CodeExt = [IconifyIcon, string] | [IconifyIcon, string, true];
type CodeExtMap = { [id: string]: CodeExt };

const VSCODE_ID = 'bcb81b6439d30df7';
const VSCODE_EXT_MAP: CodeExtMap = {
  '565945769320775680': [icons.react, 'TSX'],
  '808842276184784916': [icons.ts, 'TypeScript'],
  '565944799761268737': [icons.json, 'JSON'],
  '565945770877124698': [icons.json, 'YAML'],
  '565944476879683585': [icons.eslint, 'ESLint', true],
  '808841241142755358': [icons.js, 'JavaScript'],
  '565944477232136202': [icons.git, 'Git']
};

function getExt(activity?: Activity, map?: CodeExtMap) {
  if (!activity || !activity.assets || !map) return null;
  const ext = map[activity.assets.large_image];
  if (ext)
    return (
      <>
        Editing a{ext[2] ? 'n' : ''}{' '}
        <b>
          <InlineIcon className="inline-block" icon={ext[0]} /> {ext[1]}
        </b>{' '}
        file
      </>
    );
  if (activity.assets.large_text.startsWith('Editing')) return activity.assets.large_text;
  return null;
}

export default function LanyardContainer({ userId }: { userId: string }) {
  const lanyard = useLanyard({ userId });
  const lanyardAvailable = lanyard.data && lanyard.data.success && lanyard.data!.data.discord_status === 'online';
  const listeningToSpotify = lanyardAvailable && lanyard.data!.data.listening_to_spotify;
  const spotify = listeningToSpotify ? lanyard.data!.data.spotify! : null;

  const vscodeActivity = lanyardAvailable && lanyard.data!.data.activities.find((act) => act.id === VSCODE_ID);
  const vscodeExt = vscodeActivity ? getExt(vscodeActivity, VSCODE_EXT_MAP) : null;

  return (
    <div className="absolute bottom-0 right-0 mb-2 mr-2 flex items-end gap-1">
      {/* VSCode */}
      {/* @ts-ignore */}
      <Tooltip
        disabled={!lanyardAvailable}
        position="left"
        arrow={true}
        tabIndex={vscodeActivity ? 0 : -1}
        className="outline-none group"
        html={
          <span>
            Active on <b>Visual Studio Code</b>
            {vscodeExt ? <>, {vscodeExt}</> : ''}
          </span>
        }
      >
        <div title="Using Visual Studio Code" tabIndex={-1}>
          <div
            className={clsx(
              'lg:w-8 lg:h-8 w-4 h-4',
              'bg-sky-500 whitespace-nowrap flex rounded-full items-center justify-center transition-all shadow-md shadow-black/50'
            )}
          >
            <Icon
              icon={icons.vscode}
              className={clsx('lg:w-4 lg:h-4 w-2 h-2 text-white transition-all', vscodeActivity ? 'opacity-100' : 'opacity-0')}
            />
          </div>
        </div>
      </Tooltip>

      {/* Spotify */}
      {/* @ts-ignore */}
      <Tooltip
        disabled={!lanyardAvailable}
        position="left"
        arrow={true}
        tabIndex={listeningToSpotify ? 0 : -1}
        className="outline-none group"
        html={
          <span>
            {listeningToSpotify ? (
              <>
                Listening to <b>{spotify!.song}</b> by {spotify!.artist}
              </>
            ) : (
              'Online on Discord'
            )}
          </span>
        }
      >
        <a
          href={listeningToSpotify ? `https://open.spotify.com/track/${spotify!.track_id}` : undefined}
          target="_blank"
          title={listeningToSpotify ? 'Listening on Spotify' : 'Online on Discord'}
          rel="noopener noreferrer"
          tabIndex={-1}
        >
          <div
            className={clsx(
              {
                'opacity-0': !lanyardAvailable,
                'opacity-100': lanyardAvailable,
                'lg:w-10 lg:h-10 w-6 h-6': listeningToSpotify,
                'lg:w-8 lg:h-8 w-4 h-4': !listeningToSpotify,
                'hover:ring hover:ring-green-100/75 group-focus:ring group-focus:ring-green-100/50': listeningToSpotify
              },
              'bg-green-500 whitespace-nowrap flex rounded-full items-center justify-center transition-all shadow-md shadow-black/50'
            )}
          >
            <Icon
              icon={icons.spotify}
              className={clsx('lg:w-6 lg:h-6 text-white transition-all', listeningToSpotify ? 'opacity-100' : 'opacity-0')}
            />
          </div>
        </a>
      </Tooltip>
    </div>
  );
}
