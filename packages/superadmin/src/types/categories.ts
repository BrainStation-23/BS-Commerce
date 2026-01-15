// Category Types

export interface CategoryPhoto {
  url: string | null;
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
  description?: string;
  showOnHomePage?: boolean;
  includeInTopMenu?: boolean;
  allowToSelectPageSize?: boolean;
  meta?: {
    keywords: string[];
    description: string;
    title: string;
    SEFN: string;
  };
}

export interface CategoryListResponse {
  data: {
    categories: Category[];
  };
}

export interface CreateCategoryPayload {
  name: string;
  parentSlug?: string;
  photo: {
    url: string;
    alt: string;
  };
  description: string;
  showOnHomePage: boolean;
  includeInTopMenu: boolean;
  allowToSelectPageSize: boolean;
  published: boolean;
  displayOrder: number;
  meta: {
    keywords: string[];
    description: string;
    title: string;
    SEFN: string;
  };
}

export type UpdateCategoryPayload = CreateCategoryPayload;
