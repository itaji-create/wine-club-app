/* eslint-disable import/extensions */
import { NextPage } from 'next';
import React from 'react';

import Header from '../components/header';
import Cards from '../components/cards';
import PriceFilter from '../components/sidebar';

const CatalogPage: NextPage = () => (
  <div>
    <Header />
    <h1 data-testid="title">Bem vindo ao catalogo</h1>
    <div style={ { display: 'flex' } }>
      <Cards />
      <PriceFilter />
    </div>
  </div>
);

export default CatalogPage;
