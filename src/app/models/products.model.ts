import { Category } from './category.model';

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updateAt: string;
}

