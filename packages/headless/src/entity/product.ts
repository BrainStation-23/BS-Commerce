export class ProductPhoto {
  url?: string;
  id?: string;
  title?: string;
  alt?: string;
  displayOrder?: number;
}

export class ProductCategory {
  id: string;
  name: string;
}

export class RatingInfo{
  count: number;
  average: number;
}
export class ProductRating{
  one?: RatingInfo;
  two?: RatingInfo;
  three?: RatingInfo;
  four?: RatingInfo;
  five?: RatingInfo;
  average?: number;
}

export class Product {
  id?: string;
  info: {
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
  };
  meta?: {
    keywords?: string[];
    title?: string;
    description?: string;
    friendlyPageName?: string;
  };
  tags?: string[];
  photos?: ProductPhoto[];
  brands?: string[];
  manufacturer?: {
    id: string;
    name: string;
  };
  categories: ProductCategory[];
  rating?: ProductRating
}

export class UpdateCategory {
  id?: string;
  name?: string;
  isFeatured?: boolean;
  displayOrder?: number;
}

export class UpdateProduct {
  info?: {
    name?: string;
    shortDescription?: string;
    fullDescription?: string;
    sku?: string;
    price?: number;
    oldPrice?: number;
    cost?: number;
    showOnHomePage?: boolean;
    includeInTopMenu?: boolean;
    allowToSelectPageSize?: boolean;
    published?: boolean;
    displayOrder?: number;
    isFeatured?: boolean;
  };
  meta?: {
    keywords?: string[];
    title?: string;
    description?: string;
    friendlyPageName?: string;
  };
  tags?: string[];
  photos?: ProductPhoto[];
  brands?: string[];
  manufacture?: {
    id?: string;
    name?: string;
  };
  categories?: UpdateCategory[];
}

export class SearchCondition {
  skip?: number;
  limit?: number;
  brand?: string;
  manufacturer?: string;
  categoryId?: string;
  productName?: string;
  isFeatured?: boolean;
  slug?: string;
  orderBy?: string;
  minPrice?: number;
  maxPrice?: number;
}
