export class Cart {
  id: string;
  userId: string;
  items: [Item];
}

export class Item {
  productId: string;
  quantity: number;
}
