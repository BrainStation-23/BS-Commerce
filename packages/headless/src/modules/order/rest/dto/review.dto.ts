import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IComment, IReview, IReviewPhoto } from 'models';
import { Commenters } from 'src/entity/review';

export class ReviewPhotoDto implements IReviewPhoto{
    @ApiProperty()
    @IsNotEmpty()
    url: string;
}

export class CommentDto implements IComment{
    @ApiProperty()
    @IsNotEmpty()
    id: string;

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

export class ReviewDto implements IReview{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;

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
    comments: CommentDto[];
}