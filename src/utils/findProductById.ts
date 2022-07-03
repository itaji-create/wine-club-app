/* eslint-disable import/extensions */
import fetchWineApi from '../services/fetchWineApi';
import Product from '../interfaces/product';

const findProductById = async (id: string | number): Promise<Product> => {
  const wines = await fetchWineApi('');

  const wine = wines.items.find((e: Product) => Number(e.id) === Number(id));
  return wine;
};

export default findProductById;
