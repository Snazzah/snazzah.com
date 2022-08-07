import { Icon } from '@iconify/react/offline';
import clsx from 'clsx';
import { Tooltip } from 'react-tippy';
import { useLanyard } from 'react-use-lanyard';

import * as icons from '../util/icons';

export default function LanyardContainer({ userId }: { userId: string }) {
  const lanyard = useLanyard({ userId });
  const lanyardAvailable = lanyard.data && lanyard.data.success && lanyard.data!.data.discord_status === 'online';
  const listeningToSpotify = lanyardAvailable && lanyard.data!.data.listening_to_spotify;
  const spotify = listeningToSpotify ? lanyard.data!.data.spotify! : null;

  return (
    <div className="absolute bottom-0 right-0 mb-2 mr-2 flex gap-2">
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
