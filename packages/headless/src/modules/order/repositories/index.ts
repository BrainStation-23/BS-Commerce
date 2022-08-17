import { BaseOrderEntity } from './../../../entity/order';
import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';

import { 
  GetAllOrderQueryEntity, 
  OrderEntity, 
  OrderIncompleteStatEntity, 
  OrderStatEntity, 
  ChangeStatusEntity, 
  OrderSortQuery,
  CreateOrderProduct,
  OrderProductData,
  CreateOrderRequest
} from 'src/entity/order';
import { IOrderDatabase } from './order.db.interface';

@Injectable()
export class OrderRepository {
  constructor(private db: IOrderDatabase) {}

  async createOrder(userId: string, body: BaseOrderEntity): Promise<OrderEntity> {
    const orderId = await this.generateUniqueId();
  
    const newBody = {...body, orderId};
    return await this.db.createOrder(userId, newBody);
  }
  async addProductDetails(products: CreateOrderProduct[]): Promise<OrderProductData[]>{
      return await this.db.addProductDetails(products);
  }
  
  addCosts(newOrder: any): OrderEntity{
    let newProductList = [];
    let totalProductsCost = 0;
    newOrder.products.map(product => {
      product.info.cost = product.info.price * product.info.quantity;//individual product quantity * price
      totalProductsCost = totalProductsCost + product.info.cost; // total cost of all the products
      return;
    });

    return {...newOrder, productCost: totalProductsCost, totalCost: newOrder.shippingCost + totalProductsCost};
  }

  async generateUniqueId(){
    let orderId = randomInt(281474976710655).toString();//generate id
    let len = orderId.length;
    if(len<15) orderId = orderId.padStart(15, '0');//check if the id is of 15 digits
    let idExists = await this.db.getOrderById(orderId);//unique validation

    if(!idExists) return orderId;
    else return this.generateUniqueId();
  }

  async getOrderListByUserId(userId: string, sortObj: OrderSortQuery): Promise<OrderEntity[]> {
    return await this.db.getOrderListByUserId(userId, sortObj);
  }

  async getOrderById(orderId: string): Promise<OrderEntity>{
    return await this.db.getOrderById(orderId);
  }

  async getOrderStatistics(): Promise<OrderStatEntity>{
    return await this.db.getOrderStatistics();
  }
  async getIncompleteStatistics(): Promise<OrderIncompleteStatEntity>{
    return await this.db.getIncompleteStatistics();
  }
  async changeStatus(body: ChangeStatusEntity): Promise<OrderEntity>{
    return await this.db.changeStatus(body);
  }

  async getOrderList(query?: GetAllOrderQueryEntity, skip?: number, limit?: number): Promise<OrderEntity[]>{
    return await this.db.getOrderList(query, skip, limit);
  }
}
