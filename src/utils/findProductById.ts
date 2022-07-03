/* eslint-disable import/extensions */
import getProducts from '../services/getProducts';
import Product from '../interfaces/product';

const findProductById = async (id: string | number): Promise<Product> => {
  const wines = await getProducts('');

  const wine = wines.items.find((e: Product) => Number(e.id) === Number(id));
  return wine;
};

export default findProductById;
