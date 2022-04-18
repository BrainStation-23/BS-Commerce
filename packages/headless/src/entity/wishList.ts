export class WishList {
  id: string;
  user: string;
  items: [Item];
  createdOn: Date;
  updatedOn: Date;
}
export class Item {
  product: string;
  quantity: number;
}
