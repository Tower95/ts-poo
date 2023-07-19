import axios from "axios";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/products.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";

export class ProductHttpService implements ProductService {

  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {

    const payload = await axios.get<Product[]>(this.url)

    if (payload.status !== 200) throw new Error('Error getting products')

    const products = payload.data as Product[];
    return products;
  }

  async update(id: Product['id'], changes: UpdateProductDto) {

    const { data } = await axios.put(`${this.url}/${id}`, changes);

    return data;

  }

  async create(data: CreateProductDto) {

    const { data: product } = await axios.post<Product>(this.url, data);

    return product;

  }

  async findOne(id: Product['id']) {

    const { data } = await axios.get(`${this.url}/${id}`);

    return data as Product;
  }


}
