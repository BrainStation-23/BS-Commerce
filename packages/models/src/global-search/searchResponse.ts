export interface ISearchProductInfo {
  name: string;
  shortDescription: string;
  fullDescription: string;
  sku: string;
  price: number;
  oldPrice: number;
  cost: number;
}

export interface ISearchProductMeta {
  keywords: string[];
  title: string;
  description: string;
}

export interface ISearchProductCategory {
  id: string;
  name: string;
}

export interface ISearchProductManufacturer {
  id: string;
  name: string;
}

export interface IProductImage {
  url?: string;
  title?: string;
  alt?: string;
}

export interface IProductSearchSchema {
  id: string;
  info: ISearchProductInfo;
  meta: ISearchProductMeta;
  brands: string[];
  categories: ISearchProductCategory[];
  manufacturer: ISearchProductManufacturer;
  photos: IProductImage[];
  tags: string[];
}

export interface IProductSearchResponse {
  totalItemsFound?: number;
  pageNumber?: number;
  limit?: number;
  products: IProductSearchSchema[];
}
export interface IProductSearchSuggestionResponse {
  resultsCount: number;
  values: string[];
}
