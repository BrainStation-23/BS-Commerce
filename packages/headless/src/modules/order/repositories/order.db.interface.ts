import { Injectable } from '@nestjs/common';
import { OrderEntity } from 'src/entity/order';
import { ChangeStatusDto, OrderIncompleteStatDto, OrderStatDto } from '../dto/admin.response.dto';

@Injectable()
export abstract class IOrderDatabase {
  abstract createOrder: (userId: string, body: any, products: any) => Promise<OrderEntity>;
  abstract addPhotoDetails: (userId: string, body: any, products: any) => Promise<any>;
  abstract getOrderListByUserId: (userId: string) => Promise<OrderEntity[]>;
  abstract getOrderById: (orderId: string) => Promise<OrderEntity>;
  abstract getOrderStatistics:() => Promise<OrderStatDto>
  abstract getIncompleteStatistics:() => Promise<OrderIncompleteStatDto>
  abstract changeStatus:(body: ChangeStatusDto) => Promise<any>
}
