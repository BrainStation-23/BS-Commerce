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
    customer = 'customer',
    store_admin = 'store_admin',
    admin = 'admin',
    branch_manager = 'branch_manager'
}