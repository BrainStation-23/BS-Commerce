export class Review{
    id: string;
    productId: string;
    orderId: string;
    userId?: string;
    comments: Comment[];
}

export class Comment{
    id: string;
    commentedBy: Commenters;
    image?: string[];
    text: string;
    createdAt: Date;
}

export enum Commenters{
    CUSTOMER = 'CUSTOMER',
    STORE_ADMIN = 'STORE_ADMIN',
    BRANCH_MANAGER = 'BRANCH_MANAGER'
}