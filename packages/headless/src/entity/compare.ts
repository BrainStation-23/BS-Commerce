export class Compare {
  id: string;
  userId: string;
  items: CompareItems[];
}
export class CompareItems {
  productId: string;
  productDetails?: any;
}
