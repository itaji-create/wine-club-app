import Product from '../interfaces/product';

const addToShoppingCart = (e) => {
  const title = e.parentNode.firstChild.firstChild.nextSibling.innerText;
  const price = e.parentNode.firstChild.firstChild.nextSibling.nextSibling.innerText;
  const partner = e.parentNode.firstChild.firstChild.nextSibling.nextSibling.nextSibling.innerText;
  const noMember = e.parentNode.firstChild
    .firstChild.nextSibling.nextSibling.nextSibling.nextSibling.innerText;
  //   const data = JSON.stringify(target.parentNode.firstChild);
  //   localStorage.setItem('cart', data);
  const product = {
    title,
    price,
    partner,
    noMember,
    qtd: 1,
  };
  const products = JSON.parse(localStorage.getItem('shoppingCart'));
  if (products) {
    const exist = products.find((p: Product) => p.title === title);
    if (!exist) {
      products.push(product);
      localStorage.setItem('shoppingCart', JSON.stringify(products));
    } else {
      exist.qtd += 1;
      console.log(exist);
      localStorage.setItem('shoppingCart', JSON.stringify(products));
    }
  } else {
    console.log([product]);
    localStorage.setItem('shoppingCart', JSON.stringify([product]));
  }
};

export default addToShoppingCart;
