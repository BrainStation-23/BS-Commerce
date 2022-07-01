import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/order.create.dto';
import { OrderRepository } from '../repositories';

@Injectable()
export class OrderCustomerService {
  constructor(private orderRepository: OrderRepository) {}

  async createOrder(userId: string, body: CreateOrderDto): Promise<any> {
    return await this.orderRepository.createOrder(userId, body);
  }
}
