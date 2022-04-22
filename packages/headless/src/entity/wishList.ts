export class WishList {
  id: string;
  userId: string;
  items: [Item];
}
export class Item {
  productId: string;
  quantity: number;
}
