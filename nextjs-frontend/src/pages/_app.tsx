import 'src/styles/globals.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_SUBGRAPH_URL,
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={`${abel.variable} ${neucha.variable}`}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </main>
  );
}
