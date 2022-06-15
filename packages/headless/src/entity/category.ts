export class Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageId: string;
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
  description: string;
  title: string;
  SEFN: string;
}

export class RequestCategory {
  name: string;
  parentSlug: string;

}