import 'src/styles/globals.css';
import {Abel, Neucha} from '@next/font/google';
import type {AppProps} from 'next/app';

const abel = Abel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-abel',
});
const neucha = Neucha({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-neucha',
  weight: ['400'],
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={`${abel.variable} ${neucha.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
