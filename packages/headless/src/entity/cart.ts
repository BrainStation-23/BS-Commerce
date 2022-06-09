export class Cart {
  id?: string;
  userId: string;
  items: Item[];
}

export class Item {
  product?: CartProduct;
  productId: string;
  quantity: number;
}

export class UpdateItem{
  productId?: string;
  quantity?: number;
}

class CartProduct{
  id: string;
  info: Info;
  photos: Photo[];
}
class Info {
  name: string;
  shortDescription?: string;
  fullDescription?: string;
  sku: string;
  price: number;
  oldPrice: number;
  cost: number;
  showOnHomePage?: boolean;
  includeInTopMenu?: boolean;
  allowToSelectPageSize?: boolean;
  published?: boolean;
  displayOrder?: number;
  isFeatured?: boolean;
  publishDate?: Date;
}
class Photo {
  url?: string;
  title?: string;
  alt?: string;
  displayOrder?: number;
}
