import { GetAllOrderQueryDto } from 'src/modules/order/dto/allOrderList.dto';
import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';

import { ProductPhotoDto } from 'src/modules/product/rest/dto/product.dto';
import { ProductOrderDto, CreateOrderDto } from './../dto/order.create.dto';
import { OrderEntity } from 'src/entity/order';
import { ChangeStatusDto, OrderIncompleteStatDto, OrderStatDto } from '../dto/admin.response.dto';
import { OrderData } from '../dto/order.response.dto';
import { IOrderDatabase } from './order.db.interface';

@Injectable()
export class OrderRepository {
  constructor(private db: IOrderDatabase) {}
  async createOrder(userId: string, body: CreateOrderDto): Promise<OrderEntity> {
    const orderId = await this.generateUniqueId();
  
    const newBody = {...body, orderId};
    return await this.db.createOrder(userId, newBody);
  }

  async addPhotoDetails(products: ProductOrderDto[]): Promise<ProductOrderDto[]>{
    return await this.db.addPhotoDetails(products);
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

  async getOrderById(orderId: string): Promise<OrderData>{
    return await this.db.getOrderById(orderId);
  }

  async getOrderStatistics(): Promise<OrderStatDto>{
    return await this.db.getOrderStatistics();
  }
  async getIncompleteStatistics(): Promise<OrderIncompleteStatDto>{
    return await this.db.getIncompleteStatistics();
  }
  async changeStatus(body: ChangeStatusDto): Promise<any>{
    return await this.db.changeStatus(body);
  }

  async getOrderList(query?: GetAllOrderQueryDto, skip?: number, limit?: number): Promise<OrderEntity[]>{
    return await this.db.getOrderList(query, skip, limit);
  }
}
