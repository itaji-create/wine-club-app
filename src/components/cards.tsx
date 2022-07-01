import { NextPage } from 'next';
import fetchWineApi from '../services/fetchWineApi';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cards: NextPage = () => {
  const [count, setCount] = useState(1);
  const [wines, setWines] = useState([{ id: 0, name: 'Loading', image: 'https://camo.githubusercontent.com/6a95fb3a94ca8b7b6cf675004fe33dd6a69e1024c1e14320221845bbe59d5b33/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f74657374652d75706c6f61642d62333234612e61707073706f742e636f6d2f6f2f4c6f676f2d57696e652d393930783634302e6a7065673f616c743d6d6564696126746f6b656e3d64303761353136662d363838302d346338632d386465612d373233663336363837643935' }]);
  useEffect(() => {
    fetchWineApi(count).then((data) => setWines(data.items));
  }, [count]);
    
  return (
    <div>
      <p>{wines.length} produtos encontrados</p>
      <div style={ { display: 'flex', flexWrap: 'wrap' } }>
      {wines.map((e) => (   
          <div data-testid="product-card" style={ { width: '150px', textAlign: 'center' } } key={ e.id }>
          <div style={ { minHeight: '300px' } }>
            <Image
              src={ e.image } 
              alt={ e.name }
              width={150}
              height={150}
            />
            <nav>
              <Link href={ `/wine-details/${e.id}` }>
                  <a>{ e.name }</a>
              </Link>
            </nav>
            <p>R${ e.price }</p>
            <p>SÓCIO WINE R${ e.priceMember }</p>
            <p>NÃO SÓCIO R${ e.priceNonMember }</p>
          </div>
          <button type='button'>
              Adicionar
          </button>
          </div>
      ))}
      </div>
      <div>
        {count > 1 && <button type='button' onClick={ () => setCount(count - 1) }>Anterior</button>}
        {wines.length > 9 && <button type='button' onClick={ () => setCount(count + 1) }>Próximo</button>}
      </div>
    </div>
  )
}

export default Cards;