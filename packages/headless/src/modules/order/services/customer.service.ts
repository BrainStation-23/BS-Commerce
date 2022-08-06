import { HttpStatus, Injectable } from '@nestjs/common';
import { IOrderCreateData, IProductOrderData } from 'models';

import { OrderEntity, OrderListResponseEntity, OrderResponseEntity } from 'src/entity/order';
import { errorResponse, successResponse } from 'src/utils/response';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { OrderRepository } from '../repositories';

@Injectable()
export class OrderCustomerService {
  constructor(private orderRepository: OrderRepository) {}

  async createOrder(
    userId: string,
    body: IOrderCreateData,
    products: IProductOrderData[]
  ): Promise<IServiceResponse<OrderEntity>> {
    const productListWithPhoto = await this.orderRepository.addPhotoDetails(products);
    const newOrder = {...body, products: productListWithPhoto};
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
  ): Promise<IServiceResponse<OrderListResponseEntity>> {
    const orderList = await this.orderRepository.getOrderListByUserId(userId);

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

  async getOrderByOrderId( orderId: string ): Promise<IServiceResponse<OrderResponseEntity>> {
    const orderInfo = await this.orderRepository.getOrderById(orderId);

    if (orderInfo) {
      const response: OrderResponseEntity = orderInfo ;
      return successResponse(OrderEntity, response);
    }
   return errorResponse('No order found', null, HttpStatus.BAD_REQUEST);
  }
}
