import { ProductReviewResponseDto } from './../rest/dto/product.review.dto';
import {
  CreateReplyErrorMessage,
  CreateReviewErrorMessage,
  CreateReviewResponse,
  ICreateReply,
  ICreateReplyResponse,
  ICreateReview,
  IProductReviewList,
  IUpdateReplyRequest,
  ProductReviewErrorMessage,
  ProductReviewResponse,
} from 'models';
import { HttpStatus, Injectable } from '@nestjs/common';
import { OrderRepository } from '../repositories';
import { ProductReviewListEntity } from 'src/entity/review';

@Injectable()
export class OrderReviewService {
  constructor(private orderRepository: OrderRepository) {}

  async createReview(request: ICreateReview): Promise<CreateReviewResponse> {
    const { orderId, productId, image, rating } = request;

    const reviewExists = await this.orderRepository.findReview({
      orderId,
      productId,
    });

    if (reviewExists.length !== 0)
      return {
        error: CreateReviewErrorMessage.ALREADY_REVIEWED_ONCE,
        errors: null,
        code: HttpStatus.BAD_REQUEST,
      };

    const order = await this.orderRepository.findOrder({ orderId });
    if (!order)
      return {
        error: CreateReviewErrorMessage.INVALID_ORDER_ID,
        errors: null,
        code: HttpStatus.BAD_REQUEST,
      };

    const { products } = order;
    const productExists = products.find(
      (product) => productId === product.productId,
    );

    if (!productExists)
      return {
        error: CreateReviewErrorMessage.INVALID_PRODUCT_ID,
        errors: null,
        code: HttpStatus.BAD_REQUEST,
      };

    //userId validity done from guards
    //commented by should also be handled from guards

    //if rating has then proceed to add it to product
    if (rating) {
      const productRating = await this.orderRepository.addProductRating(
        productId,
        rating,
      );
      if (!productRating)
        return {
          error: CreateReviewErrorMessage.CANNOT_ADD_RATING,
          errors: null,
          code: HttpStatus.BAD_REQUEST,
        };
    }
    //check if images are not more than 5
    //if greater send error
    if (image && image.length > 5)
      return {
        error: CreateReviewErrorMessage.CANNOT_UPLOAD_MORE_THAN_5_PHOTOS,
        errors: null,
        code: HttpStatus.BAD_REQUEST,
      };

    const review = await this.orderRepository.createReview(request);
    if (!review)
      return {
        error: CreateReviewErrorMessage.CANNOT_CREATE_REVIEW,
        errors: null,
        code: HttpStatus.INTERNAL_SERVER_ERROR,
      };

    return { code: 200, data: review };
  }

  async getProductReview(
    productId: string,
    skip: number = 0,
    limit: number = 0,
  ): Promise<ProductReviewResponse> {
    const reviews = await this.orderRepository.findReview(
      { productId },
      skip,
      limit,
    );

    if (!reviews)
      return {
        error: ProductReviewErrorMessage.CANNOT_FIND_REVIEW,
        errors: null,
        code: HttpStatus.INTERNAL_SERVER_ERROR,
      };

    const response = {
      productId,
      reviews,
    };

    return { code: 200, data: response };
  }

  async createReply(request: ICreateReply): Promise<ICreateReplyResponse> {
    const { reviewId } = request;
    const review = await this.orderRepository.findReview({ id: reviewId });
    if (review.length === 0)
      return {
        error: CreateReplyErrorMessage.INVALID_REVIEW_ID,
        errors: null,
        code: HttpStatus.INTERNAL_SERVER_ERROR,
      };

    //add the user id from the guards
    const reply = await this.orderRepository.createReply({
      ...request,
      repliedBy: 'storeAdmin',
    });

    if (!reply)
      return {
        error: CreateReplyErrorMessage.CANNOT_REPLY,
        errors: null,
        code: HttpStatus.BAD_REQUEST,
      };

    return { code: 200, data: reply };
  }

  async updateReply(
    replyId: string,
    request: IUpdateReplyRequest,
  ): Promise<ICreateReplyResponse> {
    const reply = await this.orderRepository.findReply(replyId);

    if (!reply)
      return {
        error: CreateReplyErrorMessage.INVALID_REPLY_ID,
        errors: null,
        code: HttpStatus.BAD_REQUEST,
      };
    //replied by will be added later from the guards
    for (const key in request) {
      if (reply[key] && key !== 'id') {
        reply[key] = request[key];
      }
    }

    const updatedReply = await this.orderRepository.updateReply(replyId, reply);
    if(!updatedReply)
        return {
            error: CreateReplyErrorMessage.CANNOT_REPLY,
            errors: null,
            code: HttpStatus.INTERNAL_SERVER_ERROR
        };

    return { code: 200, data: updatedReply };
  }
}
