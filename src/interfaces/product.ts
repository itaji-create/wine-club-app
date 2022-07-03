export default interface Product {
  id: number,
  name: string,
  image: string,
  price: string,
  priceMember: string,
  priceNonMember: string,
  qtd?: number,
}
