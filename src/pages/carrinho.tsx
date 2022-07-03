/* eslint-disable import/extensions */
import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Header from '../components/header';
import Product from '../interfaces/product';

const CatalogPage: NextPage = () => {
  const wines = JSON.parse(localStorage.getItem('shoppingCart') || 'ç,sf,f,çdfsd');

  return (
    <div id='catalogPage'>
      <Header />
      <div id='cardsContainer'>
        {wines && wines.map((e: Product) => (
          <div className='productCard' data-testid={`product-card-${e.id}}`} key={ e.id }>
            <div className='productCardContent'>
              <Image
                src={ e.image }
                alt={ e.name }
                width={230}
                height={180}
              />
              <Link href={ '/wine-details' }><a className='title'>{ e.name }</a></Link>
              <p className='price' >R${ e.price }</p>
              <p className='partner-price'>SÓCIO WINE R${ e.priceMember }</p>
              <p className='no-member-price'>NÃO SÓCIO R${ e.priceNonMember }</p>
              <p>Quantidade: { e.qtd }</p>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}

export default CatalogPage;
