import 'src/styles/globals.css';
import {Abel} from '@next/font/google';
import localFont from '@next/font/local';
import type {AppProps} from 'next/app';

const abel = Abel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-abel',
});
const tuffy = localFont({
  src: [
    {
      path: '../../public/fonts/Tuffy.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Tuffy-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Tuffy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Tuffy-Bold-Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-tuffy',
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={`${abel.variable} ${tuffy.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
