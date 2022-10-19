import { CreateReviewErrorMessage, CreateReviewResponse, ICreateReview } from 'models';
import { HttpStatus, Injectable } from "@nestjs/common";
import { OrderRepository } from "../repositories";

@Injectable()
export class OrderReviewService {
    constructor(private orderRepository: OrderRepository) {}

    async createReview(body: ICreateReview): Promise<CreateReviewResponse>{
        const { orderId, productId, comments } = body;
        //first check if orderId is valid
        const orderExists = await this.orderRepository.findOrder({orderId});
        //if not valid send error
        if(!orderExists)
            return {
                error: CreateReviewErrorMessage.INVALID_ORDER_ID,
                errors: null,
                code: HttpStatus.BAD_REQUEST
            };

        // check if product Id is valid
        const product = await this.orderRepository.getProduct({ id: productId });
        //if not valid send error
        if(!product)
            return {
                error: CreateReviewErrorMessage.INVALID_PRODUCT_ID,
                errors: null,
                code: HttpStatus.BAD_REQUEST
            };
        
        //userId validity needs discussion
        //commented by should also be handled internally

        //if rating has then proceed to add it to product
        //proceed to comment

        //check if images are not more than 5
        //if greater send error
        if(comments.image && comments.image.length > 5)
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