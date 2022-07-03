// import path from 'path';

// import fs from 'fs';

export default async function fetchWineApi(page?: string) {
  const response = await fetch(`https://wine-back-test.herokuapp.com/products${page}`);
  const data = await response.json();
  return data;
}

// const PRODUCTS_CACHE_PATH = path.resolve('.members');

// async function getProducts(page?: string) {
//   let cachedData;

//   try {
//     cachedData = JSON.parse(
//       fs.readFileSync(path.join(__dirname, PRODUCTS_CACHE_PATH), 'utf8'),
//     );
//   } catch (error) {
//     console.log('Products cache not initialized');
//   }

//   if (!cachedData) {
//     const data = fetchWineApi(page);

//     try {
//       fs.writeFileSync(
//         path.join(__dirname, PRODUCTS_CACHE_PATH),
//         JSON.stringify(data),
//         'utf8',
//       );
//       console.log('Wrote to products cache');
//     } catch (error) {
//       console.log('ERROR WRITING MEMBERS CACHE TO FILE');
//       console.log(error);
//     }
//     cachedData = data;
//   }

//   return cachedData;
// }
