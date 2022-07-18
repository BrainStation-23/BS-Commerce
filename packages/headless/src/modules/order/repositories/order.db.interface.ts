import { Injectable } from '@nestjs/common';
import { OrderEntity } from 'src/entity/order';
import { ChangeStatusDto, OrderIncompleteStatDto, OrderStatDto } from '../dto/admin.response.dto';
import { ProductOrderDto } from '../dto/order.create.dto';
import { OrderData } from '../dto/order.response.dto';

@Injectable()
export abstract class IOrderDatabase {
  abstract createOrder: (userId: string, body: any) => Promise<OrderEntity>;
  abstract addPhotoDetails: (products: ProductOrderDto[]) => Promise<ProductOrderDto[]>;
  abstract getOrderListByUserId: (userId: string) => Promise<OrderEntity[]>;
  abstract getOrderById: (orderId: string) => Promise<OrderData>;
  abstract getOrderStatistics:() => Promise<OrderStatDto>
  abstract getIncompleteStatistics:() => Promise<OrderIncompleteStatDto>
  abstract changeStatus:(body: ChangeStatusDto) => Promise<any>
}
