export interface Photo {
  url: string;
  alt: string;
}
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  photo: Photo;
  showOnHomePage: boolean;
  includeInTopMenu: boolean;
  allowToSelectPageSize: boolean;
  published: boolean;
  displayOrder: number;
  rootPath: string;
  ancestors: Ancestor[];
  meta: CategoryMeta;
}

export interface Ancestor {
  name: string;
  slug: string;
  level: number;
}

export interface CategoryMeta {
  keywords?: string[];
  description?: string;
  title?: string;
  SEFN?: string;
}
