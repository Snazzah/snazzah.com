import 'tailwindcss/tailwind.css';
import 'react-tippy/dist/tippy.css';
import '../styles/index.sass';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
