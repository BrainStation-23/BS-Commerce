import { Injectable } from '@nestjs/common';
import {
  CreateOrderRequest,
  CreateProductOrderDetails,
} from '@bs-commerce/models';

import {
  CartItem,
  Cart,
  CartResponse,
  ChangeStatusEntity,
  GetAllOrderQueryEntity,
  OrderEntity,
  OrderIncompleteStatEntity,
  OrderSortQuery,
  OrderStatEntity,
  ProductOrder,
} from 'src/entity/order';
import { CreateReviewResponse, ICreateReply, IReviewReplyResponse, IUpdateReplyRequest } from 'models';
import { Review } from 'src/entity/review';

@Injectable()
export abstract class IOrderDatabase {
  abstract createOrder: (
    userId: string,
    body: CreateOrderRequest,
  ) => Promise<OrderEntity>;
  abstract addPhotoDetails: (
    products: CreateProductOrderDetails[],
  ) => Promise<ProductOrder[]>;
  abstract getOrderListByUserId: (
    userId: string,
    sortObj: OrderSortQuery,
  ) => Promise<OrderEntity[]>;
  abstract findOrder: (query: Record<string, any>) => Promise<OrderEntity>;
  abstract getOrderStatistics: () => Promise<OrderStatEntity>;
  abstract getIncompleteStatistics: () => Promise<OrderIncompleteStatEntity>;
  abstract changeStatus: (body: ChangeStatusEntity) => Promise<OrderEntity>;
  abstract getOrderList: (
    query?: GetAllOrderQueryEntity,
    skip?: number,
    limit?: number,
  ) => Promise<OrderEntity[]>;
  abstract getAvailableProducts: (productIds: string[]) => Promise<any>;
  abstract getCart: (userId: string) => Promise<Cart | null>;
  abstract populateItemsInCart: (
    userId: string,
    items: CartItem[],
  ) => Promise<CartResponse | null>;
  abstract clearCart: (userId: string) => Promise<CartResponse | null>;
  abstract createReview: (review: any) => Promise<Review | null>;
  abstract findReview: (query: Record<string,any>, skip: number, limit: number)=> Promise<Review[] | null>;
  abstract addProductRating: (productId: string, rating: number)=> Promise<boolean>;
  abstract createReply: (reply: ICreateReply) => Promise<IReviewReplyResponse | null>;
  abstract updateReply: (replyId: string, request: IUpdateReplyRequest) => Promise<IReviewReplyResponse | null>
  abstract findReply: (replyId: string) => Promise<IReviewReplyResponse | null>;
}
