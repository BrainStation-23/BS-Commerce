export interface Ancestor {
  name?: string;
  slug?: string;
  level?: number;
}

export interface SubCategory {
  slug?: string;
  name: string;
  ancestors: Ancestor[];
  subCategories?: SubCategory[];
}

export interface CategoryInterface {
  ancestors?: Ancestor[];
  slug: string;
  name: string;
  subCategories?: SubCategory[];
}