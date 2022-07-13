export class Photo {
  url?: string;
  id?: string;
  title?: string;
  alt?: string;
  displayOrder?: number
}

export class Category {
  id: string;
  name: string;
  isFeatured?: boolean;
  displayOrder?: number
}

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
    keywords?: string[],
    title?: string,
    description?: string,
    friendlyPageName: string
  };
  tags?: string[];
  photos?: Photo[];
  brands?: string[];
  manufacturer?: {
    id: string,
    name: string,
  };
  categories: Category[]
}

export class UpdateCategory {
  id?: string;
  name?: string;
  isFeatured?: boolean;
  displayOrder?: number
}

export class UpdateProduct {
  info?: {
    name?: string,
    shortDescription?: string,
    fullDescription?: string,
    sku?: string,
    price?: number,
    oldPrice?: number,
    cost?: number,
    showOnHomePage?: boolean,
    includeInTopMenu?: boolean,
    allowToSelectPageSize?: boolean,
    published?: boolean,
    displayOrder?: number,
    isFeatured?: boolean,
  };
  meta?: {
    keywords?: string[],
    title?: string,
    description?: string,
    friendlyPageName?: string
  };
  tags?: string[];
  photos?: Photo[];
  brands?: string[];
  manufacture?: {
    id?: string,
    name?: string,
  }
  categories?: UpdateCategory[]
}

export class SearchCondition {
  skip?: number;
  limit?: number;
  brand?: string;
  categoryId?: string;
  productName?: string;
  isFeatured?: boolean;
  slug?: string;
  orderBy?: string;
}