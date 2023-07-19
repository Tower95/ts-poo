import axios from "axios";

(async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('string');
      }, time);
    });
    return promise
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('---'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);


  console.log('---'.repeat(10));
  const products = await getProductsAsync();
  console.log(products)
})();
