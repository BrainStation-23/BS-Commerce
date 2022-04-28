export class Product {
  id?: string;
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
    id?: string,
    title?: string,
    alt?: string,
    displayOrder?: number
  }];
  brands?: [string];
  categories: [{
    categoryId: string,
    isFeatured?: boolean,
    displayOrder?: number
  }]
}