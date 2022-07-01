import { NextPage } from 'next';
import React from 'react';

import Header from '../components/header';
import Cards from '../components/cards';

const CatalogPage: NextPage = () => {

  return (
    <div>
      <Header />
      <h1 data-testid="title">Bem vindo ao catalogo</h1>
      <Cards />
    </div>
  )
}

export default CatalogPage;
