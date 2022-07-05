import { Injectable } from '@nestjs/common';
import { OrderEntity } from 'src/entity/order';
import { IOrderDatabase } from './order.db.interface';

@Injectable()
export class OrderRepository {
  constructor(private db: IOrderDatabase) {}

  async createOrder(userId: string, body: any): Promise<OrderEntity> {
    return await this.db.createOrder(userId, body);
  }

  async getOrderListByUserId(userId: string): Promise<OrderEntity[]> {
    return await this.db.getOrderListByUserId(userId);
  }
}
