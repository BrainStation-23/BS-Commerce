import { ApiProperty } from '@nestjs/swagger';
import { IComment, IReview } from 'models';
import { Commenters } from 'src/entity/review';

export class CommentDto implements IComment{
    @ApiProperty()
    id: string;

    @ApiProperty({ enum: Commenters})
    commentedBy: Commenters;
    image?: string[];
    text: string;
    createdAt: Date;
}

export class ReviewDto implements IReview{

}