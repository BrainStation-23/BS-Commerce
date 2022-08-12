import { Injectable } from '@nestjs/common';

import { 
  ChangeStatusEntity, 
  CreateOrderProduct, 
  CreateOrderRequest, 
  GetAllOrderQueryEntity, 
  OrderDetails, 
  OrderEntity, 
  OrderIncompleteStatEntity,  
  OrderProductData,  
  OrderSortQuery, 
  OrderStatEntity 
} from 'src/entity/order';

@Injectable()
export abstract class IOrderDatabase {
  abstract createOrder: (userId: string, body: OrderDetails) => Promise<OrderEntity>;
  abstract addProductDetails: (products: CreateOrderProduct[]) => Promise<OrderProductData[]>;
  abstract getOrderListByUserId: (userId: string, sortObj: OrderSortQuery) => Promise<OrderEntity[]>;
  abstract getOrderById: (orderId: string) => Promise<OrderEntity>;
  abstract getOrderStatistics:() => Promise<OrderStatEntity>
  abstract getIncompleteStatistics:() => Promise<OrderIncompleteStatEntity>
  abstract changeStatus:(body: ChangeStatusEntity) => Promise<OrderEntity>
  abstract getOrderList: (query?: GetAllOrderQueryEntity, skip?: number, limit?: number) => Promise<OrderEntity[]>
}
