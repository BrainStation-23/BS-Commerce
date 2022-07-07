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
  meta: Meta;
}

export class Ancestor {
  name: string;
  slug: string;
  level: number;
}

export class Meta {
  keywords?: [string];
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
  meta?: Meta;

}

export class responseCategory{
  slug: string;
  ancestors: Ancestor[];
}