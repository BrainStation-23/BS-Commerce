import { Injectable } from '@nestjs/common';
import { OrderEntity } from 'src/entity/order';

@Injectable()
export abstract class IOrderDatabase {
  abstract createOrder: (userId: string, body: any) => Promise<OrderEntity>;
  abstract getOrderListByUserId: (userId: string) => Promise<OrderEntity[]>;
  abstract getOrderById: (orderId: string) => Promise<OrderEntity>;
  abstract getOrderStatistics:() => Promise<any>
  abstract getIncompleteStatistics:() => Promise<any>
}
