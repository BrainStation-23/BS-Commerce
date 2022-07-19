import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';

import { ProductPhotoDto } from 'src/modules/product/dto/product.dto';
import { ProductOrderDto, CreateOrderDto } from './../dto/order.create.dto';
import { OrderEntity } from 'src/entity/order';
import { ChangeStatusDto, OrderIncompleteStatDto, OrderStatDto } from '../dto/admin.response.dto';
import { OrderData } from '../dto/order.response.dto';
import { IOrderDatabase } from './order.db.interface';

@Injectable()
export class OrderRepository {
  constructor(private db: IOrderDatabase) {}
  async createOrder(userId: string, body: CreateOrderDto): Promise<OrderEntity> {
    let orderId = randomInt(0,100000000000000).toString();
    const len = orderId.length;
    if(len<15) orderId = orderId.padStart(15, '0')
    const newBody = { ...body, orderId};
    return await this.db.createOrder(userId, newBody);
  }

  async addPhotoDetails(products: ProductOrderDto[]): Promise<ProductOrderDto[]>{
    return await this.db.addPhotoDetails(products);
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
}
