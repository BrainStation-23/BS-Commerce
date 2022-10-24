import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { IProductReviewList, ProductReviewErrorMessage, ProductReviewErrorResponse, ProductReviewSuccessResponse } from "models";
import { ReviewPhotoDto, CommentDto, ReviewDto } from "./review.dto";

export class ProductReviewListDto implements IProductReviewList{
    @ApiProperty()
    @IsNotEmpty()
    productId: string;

    @ApiProperty({ type: [ReviewDto]})
    @IsNotEmpty()
    @Type(() => ReviewDto)
    @IsArray()
    reviews: ReviewDto[]
}

export class ProductReviewSuccessResponseDto implements ProductReviewSuccessResponse{
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: ProductReviewListDto;
}

export class ProductReviewErrorResponseDto implements ProductReviewErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code?: number;

  @ApiProperty()
  error:
    | ProductReviewErrorMessage.CANNOT_FIND_REVIEW
    | ProductReviewErrorMessage.INVALID_PRODUCT_ID

  @ApiProperty()
  errors: string[];
}

export type ProductReviewResponseDto =
  | ProductReviewErrorResponseDto
  | ProductReviewSuccessResponseDto;