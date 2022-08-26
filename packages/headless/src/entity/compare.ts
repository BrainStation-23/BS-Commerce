export class IProductInfo {
  name: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
}
export class IProductDetails {
  info: IProductInfo;
  photos: string[];
}
export class CompareItems {
  productId: string;
  productDetails?: IProductDetails;
}

export class Compare {
  id: string;
  userId: string;
  items: CompareItems[];
}
