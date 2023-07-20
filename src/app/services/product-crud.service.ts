import { UpdateProductDto } from './../dtos/product.dto';
import { Product } from "../models/products.model";
import { BaseHttpService } from "./base-http.service";
import { ProductHttpService } from './product-http2.service';

export class ProductCRUDService {

  protected url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    return await this.http.update(id, dto);
  }

}
