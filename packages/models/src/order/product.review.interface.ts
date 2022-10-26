import { SuccessResponse, ErrorResponse, DescriptiveError } from 'src/index';
import { IReview } from './review.interface';

export interface GetProductReviewQuery{
  skip?: number;
  limit?: number;
}
export interface IProductReviewList{
    productId: string;
    reviews: IReview[];
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