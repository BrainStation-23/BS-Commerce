import { Product } from './product';

export class Compare {
  id: string;
  userId: string;
  items: CompareItems[];
}
export class CompareItems {
  productId: string;
  product?: Product;
}
