/* eslint-disable import/extensions */
import { NextPage } from 'next';
import React from 'react';

import Header from '../components/header';
import Cards from '../components/cards';
import PriceFilter from '../components/sidebar';

const CatalogPage: NextPage = () => (
  <div id='catalogPage'>
    <Header />
    <h1 id='welcome' data-testid="title">Bem vindo ao catálogo</h1>
    <div id='contentCatalogPage'>
      <PriceFilter />
      <Cards />
    </div>
  </div>
);

export default CatalogPage;
