/* eslint-disable import/extensions */
import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import Button from './buttons/nextPreviousPage';
import Add from './buttons/addCartButton';

import addToShoppingCart from '../utils/addToShoppingCart';

import fetchWineApi from '../services/fetchWineApi';

const Cards: NextPage = () => {
  const [count, setCount] = useState(1);
  const [wines, setWines] = useState([{
    id: 0,
    name: 'Loading',
    price: '',
    priceMember: '',
    priceNonMember: '',
    // eslint-disable-next-line max-len
    image: 'https://camo.githubusercontent.com/6a95fb3a94ca8b7b6cf675004fe33dd6a69e1024c1e14320221845bbe59d5b33/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f74657374652d75706c6f61642d62333234612e61707073706f742e636f6d2f6f2f4c6f676f2d57696e652d393930783634302e6a7065673f616c743d6d6564696126746f6b656e3d64303761353136662d363838302d346338632d386465612d373233663336363837643935',
  }]);
  useEffect(() => {
    fetchWineApi(count).then((data) => setWines(data.items));
  }, [count]);

  return (
    <div>
      <p id='productsQtd'>{wines.length} produtos encontrados</p>
      <div id='cardsContainer'>
      {wines.map((e) => (
        <div className='productCard' data-testid="product-card" key={ e.id }>
          <div className='productCardContent'>
            <Image
              src={ e.image }
              alt={ e.name }
              width={200}
              height={180}
            />
            <Link href={ `/wine-details/${e.id}` }><a className='title'>{ e.name }</a></Link>
            <p className='price' >R${ e.price }</p>
            <p className='partner-price'>SÓCIO WINE R${ e.priceMember }</p>
            <p className='no-member-price'>NÃO SÓCIO R${ e.priceNonMember }</p>
          </div>
          <Add onClick={ ({ target }) => addToShoppingCart(target) }>Adicionar</Add>
        </div>
      ))}
      </div>
      <div>
        {count > 1 && (
          <Button type='button' onClick={ () => setCount(count - 1) }>{ '<< Anterior' }</Button>)}
        {wines.length > 9 && (
          <Button type='button' onClick={ () => setCount(count + 1) }>{ 'Próximo >>' }</Button>
        )}
      </div>
    </div>
  );
};

export default Cards;
