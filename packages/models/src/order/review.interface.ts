import { SuccessResponse, ErrorResponse, DescriptiveError } from "src/index";

export interface IReviewPhoto{
  url: string;
}
export interface IComment{
    id: string;
    commentedBy: string;
    image?: IReviewPhoto[];
    text: string;
    createdAt: Date;
}

export interface IReview{
    id: string;
    productId: string;
    orderId: string;
    userId?: string;
    comments: IComment[];
}

export interface ReviewSuccessResponse extends SuccessResponse {
    code: number;
    data: IReview;
  }

  export interface ReviewErrorResponse extends ErrorResponse {
    error: ReviewErrorMessage;
    code?: number;
    errors: DescriptiveError;
  }

  export const enum ReviewErrorMessage {
    INVALID_PRODUCT_ID = 'NO PRODUCT WITH SUCH ID',
    CANNOT_FIND_REVIEW = 'CANNOT FIND REVIEW',
    INVALID_USER_ID = "INVALID USER ID",
    INVALID_ORDER_ID = "INVALID ORDER ID"
  }

  export type ReviewResponse =
    | ReviewSuccessResponse
    | ReviewErrorResponse;