/* eslint-disable max-lines-per-function */
/* eslint-disable import/extensions */
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import Product from '../../interfaces/product';
import findProductById from '../../utils/findProductById';
import Add from '../../styles/buttons/addCartButton';
import addToShoppingCart from '../../utils/addToShoppingCart';
import DetailsPage from '../../styles/divs/productDetails/index';
import DetailsContainer from '../../styles/divs/productDetails/productDetails';
import Sommelier from '../../styles/paragraph/sommelier';

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState();
  const { details } = router.query;

  useEffect(() => {
    findProductById(Number(details)).then((data: Product) => setProduct(data));
  }, [details]);

  // function createRating() {
  //   const i = document.createElement('i');
  //   const star = document.createTextNode('ola');
  //   i.appendChild(star);
  //   const div = document.getElementById('divRating');
  //   document.body.insertBefore(i, div);
  // }
  // if (product) {
  //   createRating();
  // }

  return (
    <div>
      <Header />
      {product && (
        <DetailsPage>
            <Image
              src={ product.image }
              alt={ product.name }
              width={381}
              height={579}
            />
            <DetailsContainer>
              <div style={ { marginTop: '-20px', marginBottom: '80px' } }>
                <div>
                  <i style={ { margin: '2px', fontWeight: '700', color: '#C81A78' } }>
                    Vinhos
                  </i>
                  <i>{'>'}</i>
                  <i style={ { margin: '2px', fontWeight: '700', color: '#C81A78' } }>
                    {product.country}
                  </i>
                  <i>{'>'}</i>
                  <i style={ { margin: '2px', color: '#888888' } }>
                    {product.region}
                  </i>
                </div>
                <h2 className='title'>{ product.name }</h2>
                <div id='divRating' style={ { color: '#555555' } }>
                  <Image
                    src={ product.flag }
                    alt='Country image'
                    width={16}
                    height={16}
                  />
                  <i style={ { margin: '5px' } }>{product.country}</i>
                  <i style={ { margin: '5px' } }>{product.type}</i>
                  <i style={ { margin: '5px' } }>{product.classification}</i>
                  <i style={ { margin: '5px' } }>{product.size}</i>
                  <i style={ { margin: '5px' } }>{product.rating}</i>
                  {/* &#9733; */}
                  <i style={ { margin: '5px' } }>{`(${product.avaliations || 0})`}</i>
                </div>
              </div>
              <h1 className='partner-price'>
                R${ product.priceMember }
              </h1>
              <p className='no-member-price'>
                NÃO SÓCIO R${ product.priceNonMember }
              </p>
              <div style={ { marginTop: '80px', marginBottom: '100px' } }>
                <h4>Comentário do Sommelier</h4>
                <Sommelier>{product.sommelierComment}</Sommelier>
              </div>
              <Add onClick={ ({ target }) => addToShoppingCart(target) }>Adicionar</Add>
            </DetailsContainer>
        </DetailsPage>
      )}
    </div>
  );
};

export default ProfilePage;
