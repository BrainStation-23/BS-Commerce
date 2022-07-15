import { Injectable } from '@nestjs/common';
import { OrderEntity } from 'src/entity/order';
import { ChangeStatusDto, OrderIncompleteStatDto, OrderStatDto } from '../dto/admin.response.dto';
import { OrderData } from '../dto/order.response.dto';
import { IOrderDatabase } from './order.db.interface';

@Injectable()
export class OrderRepository {
  constructor(private db: IOrderDatabase) {}
  async createOrder(userId: string, body: any, products: any): Promise<OrderEntity> {
    return await this.db.createOrder(userId, body, products);
  }

  async addPhotoDetails( userId: string, body: any, products: any): Promise<any>{
    return await this.db.addPhotoDetails(userId, body, products);
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
