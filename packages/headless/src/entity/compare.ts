export class IProductInfo {
  name: string;
  price: number;
  oldPrice: number;
  shortDescription: string;
  fullDescription: string;
}
export class IProductMeta{
  friendlyPageName?: string;
}
export class IProductDetails {
  info: IProductInfo;
  meta: IProductMeta;
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
