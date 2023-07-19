import { ProducasmoryService } from './services/product-memory.service';

const productService = new ProducasmoryService();

const proCreat = productService.create({
  title: 'Product 1',
  description: 'Description 1',
  price: 100,
  categoryId: '12',
  images: ['image1', 'image2'],
  creationAt: new Date().toISOString(),
  updateAt: new Date().toISOString(),

})

const products = productService.getAll();
const product = productService.findOne(proCreat.id);

productService.update(product.id, {
  title: 'Product 1 Updated',
  description: 'Description 1 Updated',
  price: 100,
  categoryId: '12',
  images: ['image1', 'image2'],
  creationAt: new Date().toISOString(),
  updateAt: new Date().toISOString(),
})

const result = productService.findOne(product.id);

console.log('---'.repeat(10));
console.log(`Product with id ${product.id}`, result);
