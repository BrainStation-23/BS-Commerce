import { Injectable } from '@nestjs/common';
import { IOrderDatabase } from 'src/modules/order/repositories/order.db.interface';
import { OrderModel } from './order.model';

@Injectable()
export class OrderDatabase extends IOrderDatabase {
  async createOrder(userId: string, body: any): Promise<any> {
    return await OrderModel.create({ userId, body });
  }
}
