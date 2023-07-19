import { ProductHttpService } from './services/product-http.service';


(async () => {

  const productService = new ProductHttpService();

  const products = await productService.getAll()

  console.log('---'.repeat(10));
  console.log(`Products`, products)

  let product = await productService.findOne(products[0].id)

  console.log('---'.repeat(10));
  console.log(`Product with id ${product.id}`, product)

  const productId = products[0].id
  await productService.update(productId, {
    price: 200,
    title: 'Product 1 updated',
    description: 'Its a mi  mario !',
  })

  console.log('---'.repeat(10));
  product = await productService.findOne(productId)
  console.log(`Product with id updated ${product}`)

  const proCreat = await productService.create({
    title: 'Product 1',
    description: 'Description 1',
    price: 100,
    categoryId: '12',
    images: ['image1', 'image2'],
    creationAt: new Date().toISOString(),
    updateAt: new Date().toISOString(),
  })

  console.log('---'.repeat(10));
  console.log(`Product created`, proCreat)


})();

