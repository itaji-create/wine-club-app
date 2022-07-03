/* eslint-disable import/extensions */
/* eslint-disable max-lines-per-function */
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useProductsProvider } from '../../context/products';
import Product from '../../interfaces/product';
import getProducts from '../../services/getProducts';
import SearchInput from '../../styles/inputs/search';

const FilterByName: NextPage = () => {
  const { setProducts } = useProductsProvider();
  const [name, setName] = useState('');

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  useEffect(() => {
    getProducts('').then((data) => setProducts(
      data.items.filter((e: Product) => e.name.includes(name)),
    ));
  }, [name]);

  return (
    <div>
      <SearchInput placeholder='Procurando algo específico?'
        value={ name } onChange={ handleChange }
      />
    </div>
  );
};

export default FilterByName;
