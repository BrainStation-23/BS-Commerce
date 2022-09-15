import { DescriptiveError } from './../common/errorResponse';
import { SuccessResponse } from './../common/successResponse';
import { IOrderProduct } from './order.product.response.interface';
export const enum ErrorMessageReOrder {
  CANNOT_CREATE_CART = 'CANNOT CREATE CART',
  INVALID_ID = 'INVALID ID',
  OVERWRITE_CART = 'YOUR ITEMS IN THE CART WILL BE REPLACED. DO YOU WANT TO CONTINUE?',
  INVALID_ITEMS = 'SOME PRODUCTS ARE NOT AVAILABLE. DO YOU WISH TO CONTINUE?',
  CANNOT_CLEAR_CART = 'CANNOT CLEAR THE EXISTING ITEMS IN YOUR CART',
  ALL_ITEMS_INVALID = 'THESE ITEMS ARE NOT AVAILABLE RIGHT NOW',
  CANNOT_ADD_ITEMS = 'CANNOT ADD ITEMS TO THE CART',
  CART_NOT_FOUND = 'NO CART WITH USER ID',
}
export interface ReOrderData {
  id?: string;
  userId?: string;
  products?: IOrderProduct[] | null;
  reDirectHome?: boolean;
  message?: string;
}
export interface ReOrderSuccessResponse extends SuccessResponse {
  code: number;
  data: ReOrderData;
}

export interface ReOrderErrorResponse {
  code: number;
  error: string;
  errors?: DescriptiveError | null;
}

export type ReOrderResponse = ReOrderErrorResponse | ReOrderSuccessResponse;
