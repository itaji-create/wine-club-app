import { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([{
    id: 0,
    name: 'Loading',
    price: '',
    priceMember: '',
    priceNonMember: '',
    // eslint-disable-next-line max-len
    image: 'https://camo.githubusercontent.com/6a95fb3a94ca8b7b6cf675004fe33dd6a69e1024c1e14320221845bbe59d5b33/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f74657374652d75706c6f61642d62333234612e61707073706f742e636f6d2f6f2f4c6f676f2d57696e652d393930783634302e6a7065673f616c743d6d6564696126746f6b656e3d64303761353136662d363838302d346338632d386465612d373233663336363837643935',
  }]);

  const contextValue = {
    products,
    setProducts,
  };

  return (
    <Context.Provider value={ contextValue }>{children}</Context.Provider>
  );
}

export function useProductsProvider() {
  return useContext(Context);
}
