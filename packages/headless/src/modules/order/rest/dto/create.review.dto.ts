import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsNotEmpty, IsOptional, IsArray, IsNumber, IsObject, Max, Min } from "class-validator";
import { CreateReviewErrorResponse, CreateReviewSuccessResponse, CreateReviewErrorMessage, ICreateReview } from "models";
import { Commenters } from "src/entity/review";
import { CommentDto, ReviewDto, ReviewPhotoDto } from "./review.dto";
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';

export class CreateReviewDto implements ICreateReview{
    @ApiProperty({ example: '6e9fb5dc-a3ad-4d35-81d2-16fc6e2dc54e'})
    @IsString()
    @IsNotEmpty()
    productId: string;

    @ApiProperty({ example: '003889009372785'})
    @IsString()
    orderId: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    text?: string;

    @ApiProperty({ type: [ReviewPhotoDto]})
    @IsOptional()
    @Type(() => ReviewPhotoDto)
    image?: ReviewPhotoDto[];

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    @Min(1)
    @Max(5)
    rating?: number;
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
    | CreateReviewErrorMessage.CANNOT_UPLOAD_MORE_THAN_5_PHOTOS
    | CreateReviewErrorMessage.CANNOT_REPLY
    | CreateReviewErrorMessage.ALREADY_REVIEWED_ONCE
    | CreateReviewErrorMessage.RATING_RANGE_ERROR
    | CreateReviewErrorMessage.CANNOT_ADD_RATING

  @ApiProperty()
  errors: string[];
}

export type CreateReviewResponseDto =
  | CreateReviewErrorResponseDto
  | CreateReviewSuccessResponseDto;