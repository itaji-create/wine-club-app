/* eslint-disable import/extensions */
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Header from '../components/header';
import Product from '../interfaces/product';
import Delete from '../styles/buttons/shoppingCart/deleteCardBtn';

const CatalogPage: NextPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(products);
    setProducts(data);
  }, []);

  function handleClick(id: number) {
    const result = products.findIndex((product: Product) => Number(product.id) === id);
    products.splice(result, 1);
    localStorage.setItem('shoppingCart', JSON.stringify(products));
    document.getElementById(`product-card-${id}`)?.remove();
  }

  return (
    <div id='catalogPage'>
      <Header />
      <div id='cardsContainer'>
        {products && products.map((e: Product) => (
          <div className='product-card' id={`product-card-${e.id}`} key={ e.id }>
            <Delete onClick={ () => handleClick(Number(e.id)) }>x</Delete>
            <div className='product-card-content'>
              <Image
                src={ e.image }
                alt={ e.name }
                width={230}
                height={180}
              />
              <Link href={ `/wine-details/${e.id}` }><a className='title'>{ e.name }</a></Link>
              <p className='price' >R${ e.price }</p>
              <p className='member-price'>SÓCIO WINE R${ e.priceMember }</p>
              <p className='no-member-price'>NÃO SÓCIO R${ e.priceNonMember }</p>
              <p>Quantidade: { e.qtd }</p>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default CatalogPage;
