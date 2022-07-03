/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/globals';
import { ProductsProvider } from '../context/products';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Saira&display=swap"
      rel="stylesheet" />
    </Head>
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
    <GlobalStyles />
  </>
);

export default MyApp;
