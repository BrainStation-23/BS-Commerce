import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsNotEmpty, IsOptional, IsArray } from "class-validator";
import { CreateReviewErrorResponse, CreateReviewSuccessResponse, CreateReviewErrorMessage, ICreateComment, ICreateReview } from "models";
import { Commenters } from "src/entity/review";
import { CommentDto, ReviewDto, ReviewPhotoDto } from "./review.dto";

export class CreateCommentDto implements ICreateComment{
    @ApiProperty({ enum: Commenters})
    commentedBy: Commenters;

    @ApiProperty({ type: [ReviewPhotoDto]})
    @IsOptional()
    @Type(() => ReviewPhotoDto)
    image?: ReviewPhotoDto[];

    @ApiProperty()
    @IsNotEmpty()
    text: string;

    @ApiProperty()
    @IsNotEmpty()
    createdAt: Date;
}

export class CreateReview implements ICreateReview{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    productId: string;

    @ApiProperty()
    @IsString()
    orderId: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    userId?: string;

    @ApiProperty({ type: [CommentDto]})
    @Type(() => CommentDto)
    @IsNotEmpty()
    @IsArray()
    comments: CreateCommentDto[];
}

export class CreateReviewSuccessResponseDto implements CreateReviewSuccessResponse{
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: ReviewDto;
}

export class CreateReviewErrorResponseDto implements CreateReviewErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code?: number;

  @ApiProperty()
  error:
    | CreateReviewErrorMessage.INVALID_PRODUCT_ID
    | CreateReviewErrorMessage.INVALID_ORDER_ID
    | CreateReviewErrorMessage.INVALID_USER_ID
    | CreateReviewErrorMessage.CANNOT_CREATE_REVIEW

  @ApiProperty()
  errors: string[];
}

export type CreateReviewResponseDto =
  | CreateReviewErrorResponseDto
  | CreateReviewSuccessResponseDto;