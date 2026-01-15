// Tag Types

export interface Tag {
  id: string;
  name: string;
  isHomePageProductsTag?: boolean;
}

export interface TagListResponse {
  data: Tag[];
}

export interface CreateTagPayload {
  name: string;
  isHomePageProductsTag?: boolean;
}

export type UpdateTagPayload = CreateTagPayload;
