import { SuccessResponse, ErrorResponse, DescriptiveError } from "src/index";
import { IComment, IReview, IReviewPhoto } from "./review.interface";

export interface ICreateReview{
    productId: string;
    orderId: string;
    text?: string;
    image?: IReviewPhoto[];
    rating?: number;
}

export interface CreateReviewSuccessResponse extends SuccessResponse {
    code: number;
    data: IReview;
}

export interface CreateReviewErrorResponse extends ErrorResponse {
  error: CreateReviewErrorMessage;
  code?: number;
  errors: DescriptiveError;
}

export const enum CreateReviewErrorMessage {
  INVALID_PRODUCT_ID = 'NO PRODUCT WITH SUCH ID',
  INVALID_ORDER_ID = 'NO ORDER WITH SUCH ID',
  INVALID_USER_ID = 'NO USER WITH SUCH ID',
  CANNOT_CREATE_REVIEW = 'CANNOT CREATE REVIEW',
  RATING_RANGE_ERROR = 'RATING MUST BE BETWEEN 1 TO 5',
  CANNOT_UPLOAD_MORE_THAN_5_PHOTOS = 'CANNOT UPLOAD MORE THAN 5 PHOTOS',
  CANNOT_REPLY = "CANNOT REPLY TO THIS COMMENT",
  ALREADY_REVIEWED_ONCE = "ALREADY REVIEWED ONCE"
}

export type CreateReviewResponse =
  | CreateReviewSuccessResponse
  | CreateReviewErrorResponse;