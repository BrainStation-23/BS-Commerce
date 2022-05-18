export class Product {
  id: string;
  info: {
    name: string,
    shortDescription?: string,
    fullDescription?: string,
    sku: string,
    price: number,
    oldPrice: number,
    cost: number,
    showOnHomePage?: boolean,
    includeInTopMenu?: boolean,
    allowToSelectPageSize?: boolean,
    published?: boolean,
    displayOrder?: number,
    isFeatured?: boolean,
    publishDate?: Date
  };
  meta: {
    keywords?: [string],
    title?: string,
    description?: string,
    friendlyPageName: string
  };
  tags?: [string];
  photos: [{
    url?: string,
    title?: string,
    alt?: string,
    displayOrder?: number
  }];
  brands?: [string];
  categories: [{
    id: string,
    isFeatured?: boolean,
    displayOrder?: number
  }]
}

export class SearchCondition {
  skip?: number;
  limit?: number;
  brandId?: string;
  categoryId?: string;
  productName?: string;
  isFeatured?: boolean;
  slug?: string;
  orderBy?: string;
}