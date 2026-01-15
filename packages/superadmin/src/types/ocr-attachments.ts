export type DocumentType = string;

export interface OCRResponse {
  data: any;
  details?: {
    data: any;
  };
  key?: string;
}
