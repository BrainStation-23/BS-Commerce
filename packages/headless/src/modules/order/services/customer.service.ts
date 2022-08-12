import { HttpStatus, Injectable } from '@nestjs/common';
import { OrderEntity, OrderListResponseEntity, CreateOrderRequest, OrderSortQuery, CreateOrderProduct } from 'src/entity/order';
import { errorResponse, successResponse } from 'src/utils/response';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { OrderRepository } from '../repositories';

@Injectable()
export class OrderCustomerService {
  constructor(private orderRepository: OrderRepository) {}

  async createOrder(
    userId: string,
    body: CreateOrderRequest,
    products: CreateOrderProduct[]
  ): Promise<IServiceResponse<OrderEntity>> {
    const productList = await this.orderRepository.addProductDetails(products);
    const newOrder = {...body, products: productList};
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

  async getOrderListByUserId(
    userId: string,
    sortObj: OrderSortQuery
  ): Promise<IServiceResponse<OrderListResponseEntity>> {
    const orderList = await this.orderRepository.getOrderListByUserId(userId,sortObj);

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

  async getOrderByOrderId( orderId: string ): Promise<IServiceResponse<OrderEntity>> {
    const orderInfo = await this.orderRepository.getOrderById(orderId);

    if (orderInfo) {
      const response: OrderEntity = orderInfo ;
      return successResponse(OrderEntity, response);
    }
   return errorResponse('No order found', null, HttpStatus.BAD_REQUEST);
  }
}
