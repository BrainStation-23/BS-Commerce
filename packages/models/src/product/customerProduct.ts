export interface CustomerProductInfo {
  name: string;
  shortDescription?: string;
  fullDescription?: string;
  sku: string;
  price: number;
  oldPrice: number;
  cost: number;
  publishDate?: Date;
}

export interface CustomerProductMeta {
  keywords?: string[];
  title?: string;
  description?: string;
  friendlyPageName?: string;
}

export interface CustomerProductPhoto {
  url?: string;
  id?: string;
  title?: string;
  alt?: string;
  displayOrder?: number;
}

export interface CustomerProductManufacturer {
  id?: string;
  name?: string;
}

export interface CustomerProductCategory {
  id: string;
  name: string;
  displayOrder?: number;
}

export interface ProductRating{
  1?: number;
  2?: number;
  3?: number;
  4?: number;
  5?: number;
}
export interface CustomerProduct {
  id?: string;
  info: CustomerProductInfo;
  meta: CustomerProductMeta;
  tags?: string[];
  photos?: CustomerProductPhoto[];
  brands?: string[];
  manufacturer?: CustomerProductManufacturer;
  categories: CustomerProductCategory[];
  rating?: ProductRating;
  avgRating?: number;
}
