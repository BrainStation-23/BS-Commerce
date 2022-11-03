import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";

export interface ICreateReply {
  reviewId: string;
  repliedBy?: string;
  text?: string;
  image?: string[];
  createdAt: Date;
}

export interface IReviewReplyResponse{
  id: string;
  reviewId: string;
  repliedBy: string;
  text: string;
  image: string[];
  createdAt: Date;
}

export interface ICreateReplySuccessResponse extends SuccessResponse {
  code: number;
  data: IReviewReplyResponse;
}
export interface ICreateReplyErrorResponse extends ErrorResponse {
  error: CreateReplyErrorMessage;
  code?: number;
  errors: DescriptiveError;
}

export const enum CreateReplyErrorMessage{
   INVALID_REVIEW_ID = 'NO REVIEW WITH SUCH ID',
   CANNOT_REPLY = 'CANNOT REPLY',
   INVALID_REPLY_ID = 'INVALID REPLY ID'
}

export type ICreateReplyResponse =
  | ICreateReplyErrorResponse
  | ICreateReplySuccessResponse;
