import { Injectable } from '@nestjs/common';
import { CreateOrderRequest, IProductOrderData, CreateProductOrderDetails } from 'models';

import { 
  ChangeStatusEntity, 
  GetAllOrderQueryEntity, 
  OrderEntity, 
  OrderIncompleteStatEntity,  
  OrderSortQuery, 
  OrderStatEntity 
} from 'src/entity/order';

@Injectable()
export abstract class IOrderDatabase {
  abstract createOrder: (userId: string, body: CreateOrderRequest) => Promise<OrderEntity>;
  abstract addPhotoDetails: (products: CreateProductOrderDetails[]) => Promise<IProductOrderData[]>;
  abstract getOrderListByUserId: (userId: string, sortObj: OrderSortQuery) => Promise<OrderEntity[]>;
  abstract getOrderById: (orderId: string) => Promise<OrderEntity>;
  abstract getOrderStatistics:() => Promise<OrderStatEntity>
  abstract getIncompleteStatistics:() => Promise<OrderIncompleteStatEntity>
  abstract changeStatus:(body: ChangeStatusEntity) => Promise<OrderEntity>
  abstract getOrderList: (query?: GetAllOrderQueryEntity, skip?: number, limit?: number) => Promise<OrderEntity[]>
}
