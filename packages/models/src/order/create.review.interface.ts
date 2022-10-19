import { SuccessResponse, ErrorResponse, DescriptiveError } from "src/index";
import { IComment, IReview } from "./review.interface";

export type ICreateComment = Omit<IComment,'id'>;

export interface ICreateReview{
    productId: string;
    orderId: string;
    userId?: string;
    comments: ICreateComment[];
}

export interface CreateReviewSuccessResponse extends SuccessResponse {
    code: number;
    data: IReview;
  }

  export interface CreateReviewErrorResponse extends ErrorResponse {
    error: ErrorMessageCreateReview;
    code?: number;
    errors: DescriptiveError;
  }

  export const enum ErrorMessageCreateReview {
    INVALID_PRODUCT_ID = 'NO PRODUCT WITH SUCH ID',
    INVALID_ORDER_ID = 'NO ORDER WITH SUCH ID',
    INVALID_USER_ID = 'NO USER WITH SUCH ID',
    CANNOT_CREATE_REVIEW = 'CANNOT CREATE REVIEW'
  }

  export type CreateReviewResponse =
    | CreateReviewSuccessResponse
    | CreateReviewErrorResponse;