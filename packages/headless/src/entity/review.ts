import { Exclude } from "class-transformer";

export class Review{
    id: string;
    productId: string;
    orderId: string;
    text: string;
    image: ReviewPhoto[];
    userId?: string;
    reply: Comment;
    rating: number;
}

export class ReviewPhoto{
    url: string;
}

export class Comment{
    id: string;
    repliedBy: string;
    text: string;
    image: string[];
    createdAt: Date;
}

export class ProductReviewListEntity{
    productId: string;
    reviews: Review[];
}