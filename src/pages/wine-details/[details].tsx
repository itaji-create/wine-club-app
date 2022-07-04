/* eslint-disable max-lines-per-function */
/* eslint-disable import/extensions */
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import Product from '../../interfaces/product';
import findProductById from '../../utils/findProductById';
import Add from '../../styles/buttons/detailsPage/detailsPageAddButton';
import addToShoppingCart from '../../utils/addToShoppingCart';
import DetailsPage from '../../styles/divs/productDetails/detailsPage';
import DetailsContainer from '../../styles/divs/productDetails/productDetails';
import Sommelier from '../../styles/paragraph/sommelier';
import Sum from '../../styles/buttons/detailsPage/sumButton';
import Subtraction from '../../styles/buttons/detailsPage/subtractionButton';

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState();
  const [qtd, setQtd] = useState(1);
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

  const handleClick = ({ target }) => {
    if (target.name === 'sum') {
      setQtd(qtd + 1);
    }
    if (target.name === 'sub' && qtd > 1) {
      setQtd(qtd - 1);
    }
  };

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
              <div id='price-container'>
                <p style={ { textDecoration: 'line-through', color: '#555555' } }>
                  R${ product.price }
                </p>
                <h1 className='member-price'>
                  R${ product.priceMember }
                </h1>
                <p className='no-member-price'>
                  NÃO SÓCIO R${ product.priceNonMember }
                </p>
                </div>
                <div style={ { marginTop: '80px', marginBottom: '100px' } }>
                  <h4>Comentário do Sommelier</h4>
                  <Sommelier>{product.sommelierComment}</Sommelier>
                <Add onClick={ () => addToShoppingCart(Number(product.id)) }>
                  <div id='qtd-cotainer'>
                    <Subtraction name='sub' onClick={ handleClick }>&#8722;</Subtraction>
                    <a>{ qtd }</a>
                    <Sum name='sum' onClick={ handleClick }>&#43;</Sum>
                  </div>
                  <h2>Adicionar</h2>
                </Add>
              </div>
            </DetailsContainer>
        </DetailsPage>
      )}
    </div>
  );
};

export default ProfilePage;
