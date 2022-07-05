import { Injectable } from '@nestjs/common';
import { IOrderDatabase } from './order.db.interface';

@Injectable()
export class OrderRepository {
  constructor(private db: IOrderDatabase) {}

  async createOrder(userId: string, body: any): Promise<any> {
    return await this.db.createOrder(userId, body);
  }
}
