import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { IProductReview, IProductReviewList, ProductReviewErrorMessage, ProductReviewErrorResponse, ProductReviewSuccessResponse } from "models";
import { ReviewPhotoDto, CommentDto } from "./review.dto";

export class ProductReviewDto implements IProductReview{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;

    @ApiProperty()
    @IsString()
    orderId: string;

    @ApiProperty()
    @IsString()
    text: string;

    @ApiProperty({ type: [ReviewPhotoDto]})
    @Type(() => ReviewPhotoDto)
    image: ReviewPhotoDto[];

    @ApiProperty()
    @IsString()
    @IsOptional()
    userId?: string;

    @ApiProperty({ type: CommentDto})
    @IsNotEmpty()
    @IsObject()
    reply: CommentDto;

    @ApiProperty()
    @IsNumber()
    rating: number;
}

export class ProductReviewListDto implements IProductReviewList{
    @ApiProperty()
    @IsNotEmpty()
    productId: string;

    @ApiProperty({ type: [ProductReviewDto]})
    @IsNotEmpty()
    @Type(() => ProductReviewDto)
    @IsArray()
    reviews: ProductReviewDto[]
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