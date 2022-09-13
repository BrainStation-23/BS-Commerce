import { CartProduct } from './product';

export interface ResponseItem {
  product?: CartProduct;
  productId: string;
  quantity: number;
}
