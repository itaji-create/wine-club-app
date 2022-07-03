/* eslint-disable import/extensions */
/* eslint-disable max-lines-per-function */
import { NextPage } from 'next';
import { useProductsProvider } from '../../context/products';
import Product from '../../interfaces/product';
import getProducts from '../../services/getProducts';

const PriceFilter: NextPage = () => {
  const { setProducts } = useProductsProvider();

  const handleClick = ({ target: value }: never): void => {
    switch (value.value) {
      case '40':
        // eslint-disable-next-line max-len
        getProducts('').then((data) => setProducts(data.items.filter((e: Product[]) => (
          e.priceMember < Number(value.value)
        ))));
        break;
      case '60':
        getProducts('').then((data) => setProducts(data.items.filter((e: Product[]) => (
          e.priceMember < Number(value.value) && e.priceMember < 60
        ))));
        break;
      case '100':
        getProducts('').then((data) => setProducts(data.items.filter((e: Product[]) => (
          e.priceMember > Number(value.value) && e.priceMember < 200
        ))));
        break;
      case '200':
        getProducts('').then((data) => setProducts(data.items.filter((e: Product[]) => (
          e.priceMember > Number(value.value) && e.priceMember < 500
        ))));
        break;
      case '500':
        getProducts('').then((data) => setProducts(data.items.filter((e: Product[]) => (
          e.priceMember > Number(value.value)
        ))));
        break;
      default:
        console.log('Sorry, we are out.');
    }
  };
  return (
    <div id='filterContainer'>
      <h4>Refine sua busca</h4>
      <br />
      <p>Por preço</p>
      <label htmlFor='input-40'>
        <input onClick={ handleClick } className='filter-item'
          value='40' name='filter' id='input-40' type='radio'
        />
        Até R$ 40
      </label><br />
      <label htmlFor='input-60'>
        <input onClick={ handleClick } className='filter-item'
          value='60' name='filter' id='input-60' type='radio'
        />
        R$40 A R$60
      </label><br />
      <label htmlFor='input-100'>
        <input onClick={ handleClick } className='filter-item'
          value='100' name='filter' id='input-100' type='radio'
        />
        R$100 A R$200
      </label><br />
      <label htmlFor='input-200'>
        <input onClick={ handleClick } className='filter-item'
          value='200' name='filter' id='input-200' type='radio'
        />
        R$200 A R$500
      </label><br />
      <label htmlFor='input-500'>
        <input onClick={ handleClick } className='filter-item'
          value='500' name='filter' id='input-500' type='radio'
        />
        Acima de R$500
      </label><br />
    </div>
  );
};

export default PriceFilter;
