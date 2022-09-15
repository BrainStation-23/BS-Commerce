export interface WishlistProductInfo {
  name: string;
  shortDescription: string;
  fullDescription: string;
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

export interface WishlistProductMeta {
  friendlyPageName: string;
}

export interface WishlistProductPhoto {
  url?: string;
  title?: string;
  alt?: string;
}

export interface WishlistProduct {
  id: string;
  info: WishlistProductInfo;
  meta: WishlistProductMeta;
  photos?: WishlistProductPhoto[];
}

export interface WishlistItem {
  product?: WishlistProduct;
  productId: string;
  quantity: number;
}

export interface Wishlist {
  id: string;
  userId: string;
  items?: WishlistItem[];
}
