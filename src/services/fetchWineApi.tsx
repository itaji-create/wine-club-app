async function fetchWineApi(page: number = 1) {
  const response = await fetch(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=10`);
  const data = await response.json();
  return data;
}
  
export default fetchWineApi;
