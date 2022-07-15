import { HttpStatus, Injectable } from '@nestjs/common';
import { OrderEntity } from 'src/entity/order';
import { errorResponse, successResponse } from 'src/utils/response';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { CreateOrderDto, ProductOrderDto } from '../dto/order.create.dto';
import { OrderResponseDto } from '../dto/order.response.dto';
import { OrderRepository } from '../repositories';

@Injectable()
export class OrderCustomerService {
  constructor(private orderRepository: OrderRepository) {}

  async createOrder(
    userId: string,
    body: CreateOrderDto,
    products: ProductOrderDto[]
  ): Promise<IServiceResponse<OrderEntity>> {
    const productListWithPhoto = await this.orderRepository.addPhotoDetails(userId, body, products);
    const newBody = {...body, products: productListWithPhoto}
  
    const createOrder = await this.orderRepository.createOrder(userId, newBody, products);
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
  ): Promise<IServiceResponse<OrderResponseDto>> {
    const orderList = await this.orderRepository.getOrderListByUserId(userId);

    if (orderList) {
      const orderInfo = orderList.map((e) => {
        delete e.userId;
        return e;
      });
      const response: OrderResponseDto = {
        userId,
        orderInfo,
      };
      return successResponse(OrderResponseDto, response);
    }
    return errorResponse('No order found', null, HttpStatus.BAD_REQUEST);
  }
}
