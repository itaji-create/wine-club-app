import Product from '../interfaces/product';
import findProductById from './findProductById';

const addToShoppingCart = async ({ parentNode }: any) => {
  const { id } = parentNode.childNodes[0];

  const wine = await findProductById(id);

  const product = {
    id,
    name: wine.name,
    price: wine.price,
    image: wine.image,
    priceMember: wine.priceMember,
    priceNonMember: wine.priceNonMember,
    qtd: 1,
  };

  const products = JSON.parse(localStorage.getItem('shoppingCart'));
  if (products) {
    const exist = products.find((p: Product) => p.name === wine.name);
    if (!exist) {
      products.push(product);
      localStorage.setItem('shoppingCart', JSON.stringify(products));
    } else {
      exist.qtd += 1;
      localStorage.setItem('shoppingCart', JSON.stringify(products));
    }
  } else {
    localStorage.setItem('shoppingCart', JSON.stringify([product]));
  }
};

export default addToShoppingCart;
