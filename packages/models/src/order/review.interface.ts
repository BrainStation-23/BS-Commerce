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

export interface GetReviewByProductIdSuccessResponse extends SuccessResponse {
    code: number;
    data: IReview;
  }

  export interface GetReviewByProductIdErrorResponse extends ErrorResponse {
    error: ErrorMessageGetReviewByProductId;
    code?: number;
    errors: DescriptiveError;
  }

  export const enum ErrorMessageGetReviewByProductId {
    INVALID_PRODUCT_ID = 'NO PRODUCT WITH SUCH ID',
    CANNOT_FIND_PRODUCT_REVIEW = 'CANNOT FIND THE PRODUCT REVIEW'
  }

  export type GetReviewByProductIdResponse =
    | GetReviewByProductIdSuccessResponse
    | GetReviewByProductIdErrorResponse;