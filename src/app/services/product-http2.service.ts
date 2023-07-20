import { BaseHttpService } from "./base-http.service";
import { Product } from "../models/products.model";

export class ProductHttpService extends BaseHttpService<Product>{
  otraRuta() {
    this.url = 'https://api.escuelajs.co/api/v1/products';
  }
}
