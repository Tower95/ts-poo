import axios from "axios";
import { Category } from './../models/category.model';
import { Product } from './../models/products.model';
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHttpService<TypeClass>{
  // private data: TypeClass[] = [];

  constructor(
    protected url: string
  ) { }

  async getAll(): Promise<TypeClass[]> {
    return await axios.get<TypeClass[]>(this.url).then(response => response.data);
  }

  async update<ID, DTO>(id: ID, changes: DTO) {

    const { data } = await axios.put(`${this.url}/${id}`, changes);

    return data;

  }
}

// const service = new BaseHttpService<string>();
// service.getAll()

// const service2 = new BaseHttpService<Category>();
// service2.getAll()

(async () => {

  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);

  const products = await productService.getAll();
  console.log(products[0]);

  const updateProdct = await productService.update<Product['id'], UpdateProductDto>
    (
      '14', // id
      {    // changes
        title: 'new name',
        description: 'new description',
      },
    );

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);

  const categories = await categoryService.getAll();
  console.log(categories[1]);
}
)()
