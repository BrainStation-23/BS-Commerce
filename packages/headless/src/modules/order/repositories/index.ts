import { IOrderCreateData, IProductOrderData } from 'models';
import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';

import { 
  GetAllOrderQueryEntity, 
  OrderEntity, 
  OrderIncompleteStatEntity, 
  OrderStatEntity, 
  ChangeStatusEntity, 
  OrderResponseEntity 
} from 'src/entity/order';
import { IOrderDatabase } from './order.db.interface';

@Injectable()
export class OrderRepository {
  constructor(private db: IOrderDatabase) {}

  async createOrder(userId: string, body: IOrderCreateData): Promise<OrderEntity> {
    const orderId = await this.generateUniqueId();
  
    const newBody = {...body, orderId};
    return await this.db.createOrder(userId, newBody);
  }

  async addPhotoDetails(products: IProductOrderData[]): Promise<IProductOrderData[]>{
    return await this.db.addPhotoDetails(products);
  }

  addCosts(newOrder: any): OrderEntity{
    let newProductList = [];
    let totalProductsCost = 0;
    newProductList = newOrder.products.map(product => {
      let productCost = product.price * product.quantity;//individual product quantity * price
      totalProductsCost = totalProductsCost + productCost; // total cost of all the products
      return {...product, totalPrice: productCost};
    });
    
    return {...newOrder, products: newProductList, productCost: totalProductsCost, totalCost: newOrder.shippingCost + totalProductsCost};
  }

  async generateUniqueId(){
    let orderId = randomInt(281474976710655).toString();//generate id
    let len = orderId.length;
    if(len<15) orderId = orderId.padStart(15, '0');//check if the id is of 15 digits
    let idExists = await this.db.getOrderById(orderId);//unique validation

    if(!idExists) return orderId;
    else return this.generateUniqueId();
  }

  async getOrderListByUserId(userId: string): Promise<OrderEntity[]> {
    return await this.db.getOrderListByUserId(userId);
  }

  async getOrderById(orderId: string): Promise<OrderResponseEntity>{
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
