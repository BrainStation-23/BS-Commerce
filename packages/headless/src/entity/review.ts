export class Review{
    id: string;
    productId: string;
    orderId: string;
    userId?: string;
    comments: Comment[];
}

export class ReviewPhoto{
    url: string;
}

export class Comment{
    id: string;
    commentedBy: Commenters;
    image?: ReviewPhoto[];
    text: string;
    createdAt: Date;
}

export enum Commenters{
    CUSTOMER = 'CUSTOMER',
    STORE_ADMIN = 'STORE_ADMIN',
    BRANCH_MANAGER = 'BRANCH_MANAGER'
}