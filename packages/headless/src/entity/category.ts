export class Category {
  id: string;
  name: string;
  slug: string;
  parent: string;
  description: string;
  imageId: string;
  showOnHomePage: boolean;
  includeInTopMenu: boolean;
  allowToSelectPageSize: boolean;
  published: boolean;
  displayOrder: number;
  ancestors: [Ancestor];
  meta: Meta;
}

export class Ancestor {
  name: string;
  slug: string;
}

export class Meta {
  keywords: [string];
  description: string;
  title: string;
  SEFN: string;
}
