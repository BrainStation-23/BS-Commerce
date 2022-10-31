import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { CreateReplyErrorMessage, ICreateReply, ICreateReplyErrorResponse, ICreateReplySuccessResponse, IReviewReplyResponse } from 'models';

export class CreateReplyDto implements ICreateReply{
    @ApiProperty({ example: "8b87190e-b406-4436-b679-863793213606"})
    @IsNotEmpty()
    reviewId: string;

    @ApiProperty()
    @IsNotEmpty()
    text: string;

    @ApiProperty({ type: [String]})
    @Type(() => String)
    image: string[];

    @ApiProperty()
    @IsNotEmpty()
    createdAt: Date;
}

export class ReviewReplyResponseDto implements IReviewReplyResponse{
    @ApiProperty()
    @IsNotEmpty()
    id: string;

    @ApiProperty()
    @IsNotEmpty()
    reviewId: string;

    @ApiProperty()
    @IsNotEmpty()
    repliedBy: string;

    @ApiProperty()
    @IsNotEmpty()
    text: string;

    @ApiProperty({ type: [String]})
    @Type(() => String)
    image: string[];

    @ApiProperty()
    @IsNotEmpty()
    createdAt: Date;
}

export class CreateReplySuccessResponseDto implements ICreateReplySuccessResponse{
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: ReviewReplyResponseDto;
}

export class CreateReplyErrorResponseDto implements ICreateReplyErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code?: number;

    @ApiProperty()
    error:
        | CreateReplyErrorMessage.INVALID_REVIEW_ID
        | CreateReplyErrorMessage.CANNOT_REPLY

    @ApiProperty()
    errors: string[];
  }

  export type CreateReplyResponseDto =
    | CreateReplySuccessResponseDto
    | CreateReplyErrorResponseDto;