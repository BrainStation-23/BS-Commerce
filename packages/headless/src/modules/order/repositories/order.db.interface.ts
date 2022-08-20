import { Injectable } from '@nestjs/common';
import { CreateOrderRequest, CreateProductOrderDetails } from 'models';

import { 
  CartItem,
  ChangeStatusEntity, 
  GetAllOrderQueryEntity, 
  OrderEntity, 
  OrderIncompleteStatEntity,  
  OrderSortQuery, 
  OrderStatEntity, 
  ProductOrder,
  ReOrderQuery
} from 'src/entity/order';

@Injectable()
export abstract class IOrderDatabase {
  abstract createOrder: (userId: string, body: CreateOrderRequest) => Promise<OrderEntity>;
  abstract addPhotoDetails: (products: CreateProductOrderDetails[]) => Promise<ProductOrder[]>;
  abstract getOrderListByUserId: (userId: string, sortObj: OrderSortQuery) => Promise<OrderEntity[]>;
  abstract getOrderById: (orderId: string) => Promise<OrderEntity>;
  abstract getOrderStatistics:() => Promise<OrderStatEntity>;
  abstract getIncompleteStatistics:() => Promise<OrderIncompleteStatEntity>;
  abstract changeStatus:(body: ChangeStatusEntity) => Promise<OrderEntity>;
  abstract getOrderList: (query?: GetAllOrderQueryEntity, skip?: number, limit?: number) => Promise<OrderEntity[]>;
  abstract getAvailableProducts: (products: ProductOrder[]) => Promise<ProductOrder[]>;
  abstract getCart: (userId: string) => Promise<any>;
  abstract addToCart: (userId: string, items: CartItem[])=> Promise<any>;
  abstract deleteCartItems: (userId: string) => Promise<any>;
}
