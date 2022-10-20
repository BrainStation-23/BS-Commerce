import { CreateReviewErrorMessage, CreateReviewResponse, ICreateReview } from 'models';
import { HttpStatus, Injectable } from "@nestjs/common";
import { OrderRepository } from "../repositories";

@Injectable()
export class OrderReviewService {
    constructor(private orderRepository: OrderRepository) {}

    async createReview(body: ICreateReview): Promise<CreateReviewResponse>{
        const { orderId, productId, image, rating } = body;

        if(rating < 1 || rating > 5)
            return {
                error: CreateReviewErrorMessage.RATING_RANGE_ERROR,
                errors: null,
                code: HttpStatus.BAD_REQUEST
            };

        const reviewExists = await this.orderRepository.findReview({orderId, productId});
        if(reviewExists)
            return {
                error: CreateReviewErrorMessage.ALREADY_REVIEWED_ONCE,
                errors: null,
                code: HttpStatus.BAD_REQUEST
            };

        const order = await this.orderRepository.findOrder({ orderId });
        if(!order)
            return {
                error: CreateReviewErrorMessage.INVALID_ORDER_ID,
                errors: null,
                code: HttpStatus.BAD_REQUEST
            };

        const { products } = order;
        const productExists = products.find(product => productId === product.productId);

        if(!productExists)
            return {
                error: CreateReviewErrorMessage.INVALID_PRODUCT_ID,
                errors: null,
                code: HttpStatus.BAD_REQUEST
            };

        //userId validity done from guards
        //commented by should also be handled from guards

        //if rating has then proceed to add it to product

        //check if images are not more than 5
        //if greater send error
        if(image && image.length > 5)
            return {
                error: CreateReviewErrorMessage.CANNOT_UPLOAD_MORE_THAN_5_PHOTOS,
                errors: null,
                code: HttpStatus.BAD_REQUEST
            };

        const review = await this.orderRepository.createReview(body);
        if(!review)
            return {
                error: CreateReviewErrorMessage.CANNOT_CREATE_REVIEW,
                errors: null,
                code: HttpStatus.INTERNAL_SERVER_ERROR
            };

        return { code: 200, data: review };
    }
}