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
    commentedBy: Commenters;
    text: string;
    image: string[];
    createdAt: Date;
}

export enum Commenters{
    STORE_ADMIN = 'STORE_ADMIN',
    BRANCH_MANAGER = 'BRANCH_MANAGER'
}