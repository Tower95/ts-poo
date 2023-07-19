import { Category } from '../models/category.model';

import { faker } from '@faker-js/faker';

import { Product } from '../models/products.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProducasmoryService implements ProductService {
  private products: Product[] = [];

  create(data: CreateProductDto): Product {


    const category: Category = {
      id: data.categoryId,
      name: faker.commerce.department(),
      image: faker.image.imageUrl(),
      createdAt: faker.date.recent(),
      updateAt: faker.date.recent(),
    }

    const newProduct: Product = {
      ...data,
      id: faker.datatype.uuid(),
      category
    }
    return this.add(newProduct);
  }

  add(product: Product): Product {

    this.products.push(product);
    return product;
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {

    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];

    this.products[index] = {
      ...prevData,
      ...changes
    }

    return this.products[index];
  }

  findOne(id: Product['id']): Product {

    const index = this.products.findIndex(item => item.id === id);
    return this.products[index];

  }

  getAll(): Product[] {

    return this.products

  }

}





