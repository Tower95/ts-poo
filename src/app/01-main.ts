import axios from "axios";
import { Product } from "./models/products.model";
(async () => {

  async function getProductsAsync() {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }

  console.log('---'.repeat(10));
  const products = await getProductsAsync();
  products.map(item => { console.log(`${item.id} - ${item.title} \n\t:${item.description} \n${'==='.repeat(47)} \n`) })

})();
