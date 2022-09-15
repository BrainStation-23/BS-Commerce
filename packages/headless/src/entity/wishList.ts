import { Product } from './product';

export class WishList {
  id?: string;
  userId: string;
  items: WishlistItem[];
}

export class WishlistItem {
  productId: string;
  quantity: number;
  product?: Product;
}
