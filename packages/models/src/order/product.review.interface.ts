import { SuccessResponse, ErrorResponse, DescriptiveError } from 'src/index';
import { IReview } from './review.interface';

export type IProductReview = Omit<IReview, 'productId'>;

export interface IProductReviewList{
    productId: string;
    reviews: IProductReview[];
}

export interface ProductReviewSuccessResponse extends SuccessResponse {
    code: number;
    data: IProductReviewList;
}

export interface ProductReviewErrorResponse extends ErrorResponse {
  error: ProductReviewErrorMessage;
  code?: number;
  errors: DescriptiveError;
}

export const enum ProductReviewErrorMessage{
    INVALID_PRODUCT_ID = 'INVALID PRODUCT ID',
    CANNOT_FIND_REVIEW = 'CANNOT FIND REVIEW'
}

export type ProductReviewResponse =
  | ProductReviewSuccessResponse
  | ProductReviewErrorResponse;