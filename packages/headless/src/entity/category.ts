export class Photo{
  url:string;
  alt:string;
}

export class Category {
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

export class Ancestor {
  name: string;
  slug: string;
  level: number;
}

export class CategoryMeta {
  keywords?: string[];
  description?: string;
  title?: string;
  SEFN?: string;
}

export class RequestCategory {
  name: string;
  parentSlug?:string;
  description?: string;
  showOnHomePage?: boolean;
  includeInTopMenu?: boolean;
  allowToSelectPageSize?: boolean;
  published?: boolean;
  displayOrder?: number;
  meta?: CategoryMeta;

}

export class responseCategory{
  slug: string;
  ancestors: Ancestor[];
}