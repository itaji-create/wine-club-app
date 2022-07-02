import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '../styles/globals';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
);

export default MyApp;
