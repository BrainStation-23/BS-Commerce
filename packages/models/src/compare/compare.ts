import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import {
  AddProductToCompareErrorEnum,
  DeleteCompareErrorEnum,
  GetCompareErrorEnum,
} from './compareErrorEnum';

export interface AddCompareItem {
  productId: string;
}

export interface IProductInfo {
  name: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
  oldPrice: number;
}
export interface IProductMeta {
  friendlyPageName?: string;
}
export interface IProductDetails {
  info: IProductInfo;
  meta: IProductMeta;
  photos: string[];
}
export interface ICompareItems {
  productId: string;
  productDetails?: IProductDetails;
}

export interface CompareData {
  id: string;
  userId: string;
  items: ICompareItems[];
}

export interface CompareSuccessResponse extends SuccessResponse {
  code: number;
  data: CompareData;
}

export interface CompareErrorResponse extends ErrorResponse {
  code?: number;
  error:
    | AddProductToCompareErrorEnum
    | DeleteCompareErrorEnum
    | GetCompareErrorEnum;
  errors: DescriptiveError;
}

export type CompareResponse = CompareSuccessResponse | CompareErrorResponse;
