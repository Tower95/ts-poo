import { Product } from '../models/products.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: string;
}


export interface UpdateProductDto extends Partial<CreateProductDto> { }



