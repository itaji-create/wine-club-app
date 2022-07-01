async function fetchWineApi() {
  const response = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=10');
  const data = await response.json();
  return data;
}
  
export default fetchWineApi;
