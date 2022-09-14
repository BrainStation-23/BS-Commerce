import { HttpStatus, Injectable } from '@nestjs/common';
import {
  CreateOrderRequest,
  CreateProductOrderDetails,
  ErrorMessageReOrder,
  ReOrderResponse,
} from '@bs-commerce/models';
import { OrderSortQuery, ReOrderQuery } from './../../../entity/order';
import { OrderEntity, OrderListResponseEntity } from 'src/entity/order';
import { errorResponse, successResponse } from 'src/utils/response';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { OrderRepository } from '../repositories';

@Injectable()
export class OrderCustomerService {
  constructor(private orderRepository: OrderRepository) {}

  async createOrder(
    userId: string,
    body: CreateOrderRequest,
    products: CreateProductOrderDetails[],
  ): Promise<IServiceResponse<OrderEntity>> {
    const productListWithPhoto = await this.orderRepository.addPhotoDetails(
      products,
    );
    const newOrder = { ...body, products: productListWithPhoto };
    const newBody = this.orderRepository.addCosts(newOrder);

    const createOrder = await this.orderRepository.createOrder(userId, newBody);
    if (createOrder) {
      return successResponse(OrderEntity, createOrder);
    }
    return errorResponse(
      'Error in order creation.',
      null,
      HttpStatus.BAD_REQUEST,
    );
  }

  async reOrder(userId: string, body: ReOrderQuery): Promise<ReOrderResponse> {
    const { ignoreInvalidItems, overWriteCart, orderId } = body;

    const prevOrder = await this.orderRepository.findOrder({ orderId, userId });
    if (!prevOrder)
      return {
        error: ErrorMessageReOrder.INVALID_ID,
        errors: null,
        code: HttpStatus.BAD_REQUEST,
      };

    const prevProducts = prevOrder.products;
    const productIds = prevProducts.map((item) => item.productId);
    let order = prevProducts.map((product) => {
      return { productId: product.productId, quantity: product.quantity };
    }); //cart request format

    const availableProductIds = await this.orderRepository.getAvailableProducts(
      productIds,
    );

    if (availableProductIds.length === 0) {
      const response = {
        products: availableProductIds,
        reDirectHome: true,
        message: ErrorMessageReOrder.ALL_ITEMS_INVALID,
      };
      return { code: 200, data: response };
    } else {
      const unavailableProducts = prevProducts.filter(
        (product) =>
          !availableProductIds.find((item) => item.id === product.productId),
      );

      if (
        availableProductIds.length < productIds.length &&
        ignoreInvalidItems === false
      ) {
        return {
          code: 200,
          data: {
            products: unavailableProducts,
            message: ErrorMessageReOrder.INVALID_ITEMS,
          },
        };
      }

      order = order.filter((product) =>
        availableProductIds.find((item) => item.id === product.productId),
      );
    }

    const cart = await this.orderRepository.getCart(userId);
    if (!cart)
      return {
        error: ErrorMessageReOrder.CART_NOT_FOUND,
        errors: null,
        code: HttpStatus.NOT_FOUND,
      };
    if (cart.items.length !== 0) {
      if (overWriteCart === true) {
        const deleteCart = await this.orderRepository.clearCart(userId);
        if (!deleteCart)
          return {
            error: ErrorMessageReOrder.CANNOT_CLEAR_CART,
            errors: null,
            code: HttpStatus.INTERNAL_SERVER_ERROR,
          };
      } else
        return {
          code: 200,
          data: { message: ErrorMessageReOrder.OVERWRITE_CART },
        };
    }
    const addCart = await this.orderRepository.populateItemsInCart(
      userId,
      order,
    );
    const responseItems = prevProducts.filter((item) =>
      order.find((product) => product.productId === item.productId),
    );

    if (addCart) return { code: 200, data: { products: responseItems } };
    else
      return {
        error: ErrorMessageReOrder.CANNOT_ADD_ITEMS,
        errors: null,
        code: HttpStatus.INTERNAL_SERVER_ERROR,
      };
  }

  async getOrderListByUserId(
    userId: string,
    sortObj: OrderSortQuery,
  ): Promise<IServiceResponse<OrderListResponseEntity>> {
    const orderList = await this.orderRepository.getOrderListByUserId(
      userId,
      sortObj,
    );

    if (orderList) {
      const orderInfo = orderList.map((e) => {
        delete e.userId;
        return e;
      });
      const response: OrderListResponseEntity = {
        userId,
        orderInfo,
      };
      return successResponse(OrderListResponseEntity, response);
    }
    return errorResponse('No order found', null, HttpStatus.BAD_REQUEST);
  }

  async getOrderByOrderId(
    orderId: string,
  ): Promise<IServiceResponse<OrderEntity>> {
    const orderInfo = await this.orderRepository.findOrder({ orderId });

    if (orderInfo) {
      const response: OrderEntity = orderInfo;
      return successResponse(OrderEntity, response);
    }
    return errorResponse('No order found', null, HttpStatus.BAD_REQUEST);
  }
}
