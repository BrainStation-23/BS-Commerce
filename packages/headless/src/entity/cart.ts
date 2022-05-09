import { Product } from './product';

export class Cart {
  id: string;
  userId: string;
  items: Item[];
}

export class Item {
  product?: Product;
  productId: string;
  quantity: number;
}
