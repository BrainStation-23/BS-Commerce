import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsNotEmpty, IsOptional, IsArray, IsNumber, IsObject } from "class-validator";
import { CreateReviewErrorResponse, CreateReviewSuccessResponse, CreateReviewErrorMessage, ICreateComment, ICreateReview } from "models";
import { Commenters } from "src/entity/review";
import { CommentDto, ReviewDto, ReviewPhotoDto } from "./review.dto";
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';

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

export class CreateReviewDto implements ICreateReview{
    @ApiProperty({ example: '6e9fb5dc-a3ad-4d35-81d2-16fc6e2dc54e'})
    @IsString()
    @IsNotEmpty()
    productId: string;

    @ApiProperty({ example: '003889009372785'})
    @IsString()
    orderId: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    userId?: string;

    @ApiProperty({ type: CommentDto})
    @IsOptional()
    @IsObject()
    @CustomValidator(CreateCommentDto)
    comments?: CreateCommentDto;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
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

  @ApiProperty()
  errors: string[];
}

export type CreateReviewResponseDto =
  | CreateReviewErrorResponseDto
  | CreateReviewSuccessResponseDto;