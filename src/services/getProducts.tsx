export default async function fetchWineApi(page?: string) {
  const response = await fetch(`https://wine-back-test.herokuapp.com/products${page}`);
  const data = await response.json();
  return data;
}
