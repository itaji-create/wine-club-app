/* eslint-disable import/extensions */
import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useProductsProvider } from '../context/products';

import Button from '../styles/buttons/nextPreviousPage';
import Add from '../styles/buttons/addCartButton';

import addToShoppingCart from '../utils/addToShoppingCart';

import getProducts from '../services/getProducts';
import Product from '../interfaces/product';

// eslint-disable-next-line max-lines-per-function
const Cards: NextPage = () => {
  const { products, setProducts } = useProductsProvider();
  const [count, setCount] = useState(1);
  useEffect(() => {
    getProducts(`?page=${count}&limit=10`).then((data) => setProducts(data.items));
  }, [count]);

  return (
    <div>
      <p id='productsQtd'>{products.length} produtos encontrados</p>
      <div id='cardsContainer'>
      {products.map((e: Product) => (
        <div className='productCard' data-testid="product-card" key={ e.id }>
          <div id={ `${e.id}` } className='productCardContent'>
            <Image
              src={ e.image }
              alt={ e.name }
              width={230}
              height={180}
            />
            <Link href={ {
              pathname: '/wine-details/[details]',
              query: { details: e.id },
            } }><a className='title'>{ e.name }</a></Link>
            <p className='price' >R${ e.price }</p>
            <p>SÓCIO WINE<a className='member-price'>R${ e.priceMember }</a></p>
      
            <p className='no-member-price'>NÃO SÓCIO R${ e.priceNonMember }</p>
          </div>
          <Add onClick={ () => addToShoppingCart(Number(e.id)) }>Adicionar</Add>
        </div>
      ))}
      </div>
      <div>
        {count > 1 && (
          <Button type='button' onClick={ () => setCount(count - 1) }>{ '<< Anterior' }</Button>)}
        {products.length > 9 && (
          <Button type='button' onClick={ () => setCount(count + 1) }>{ 'Próximo >>' }</Button>
        )}
      </div>
    </div>
  );
};

export default Cards;
