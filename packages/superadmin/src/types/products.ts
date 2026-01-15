// Product Types

export interface ProductInfo {
  name: string;
  shortDescription: string;
  fullDescription: string;
  sku: string;
  price: number;
  oldPrice: number;
  cost: number;
  showOnHomePage: boolean;
  includeInTopMenu: boolean;
  allowToSelectPageSize: boolean;
  published: boolean;
  displayOrder: number;
  isFeatured: boolean;
  publishDate: string;
}

export interface ProductMeta {
  keywords: string[];
  title: string;
  description: string;
  friendlyPageName: string;
}

export interface ProductPhoto {
  url: string;
  id: string;
  title: string;
  alt: string;
  displayOrder: number;
}

export interface ProductCategory {
  id: string;
  name: string;
}

export interface ProductManufacturer {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  info: ProductInfo;
  meta: ProductMeta;
  tags: string[];
  photos: ProductPhoto[];
  brands: string[];
  manufacturer: ProductManufacturer;
  categories: ProductCategory[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductListResponse {
  data: Product[];
}

export interface ProductListParams {
  search?: string;
  sku?: string;
  limit?: number;
}

// Category Types
export interface CategoryPhoto {
  url: string;
  alt: string;
}

export interface CategoryAncestor {
  name: string;
  slug: string;
  level: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  photo: CategoryPhoto;
  published: boolean;
  displayOrder: number;
  ancestors: CategoryAncestor[];
  subCategories?: Category[];
}

export interface CategoryListResponse {
  data: {
    categories: Category[];
  };
}

// Manufacturer Types
export interface Manufacturer {
  id: string;
  name: string;
  description: string;
  picture: string;
  isPublished: boolean;
  displayOrder: number;
  seo: {
    metaKeyword: string;
    metaDescription: string;
    metaTitle: string;
    SEFN: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ManufacturerListResponse {
  data: {
    manufacturers: Manufacturer[];
    total: number;
    message: string;
  };
}


// Product Create/Update Types
export interface CreateProductPayload {
  info: {
    name: string;
    shortDescription: string;
    fullDescription: string;
    sku: string;
    price: number;
    oldPrice: number;
    cost: number;
    showOnHomePage: boolean;
    includeInTopMenu: boolean;
    allowToSelectPageSize: boolean;
    published: boolean;
    displayOrder: number;
    isFeatured: boolean;
  };
  meta: {
    keywords: string[];
    title: string;
    description: string;
  };
  tags: string[];
  photos: Array<{
    url: string;
    id: string;
    title: string;
    alt: string;
    displayOrder: number;
  }>;
  brands: string[];
  manufacturer: {
    id: string;
    name: string;
  };
  categories: Array<{
    name: string;
    id: string;
  }>;
}

export type UpdateProductPayload = CreateProductPayload;