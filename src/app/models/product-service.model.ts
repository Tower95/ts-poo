import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Product } from "./products.model";

export interface ProductService {

  getAll(): Promise<Product[]> | Product[];

  update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;

  create(data: CreateProductDto): Product | Promise<Product>;

  findOne(id: Product['id']): Product | undefined | Promise<Product>;

}
