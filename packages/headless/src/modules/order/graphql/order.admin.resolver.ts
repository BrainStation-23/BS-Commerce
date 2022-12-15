import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import {
  ChangeStatus,
  GetAllOrderQueryModel,
  OrderIncompleteStatResponse,
  OrderListResponse,
  OrderStatResponse,
  StatusTypesResponse,
} from './order.admin.model';
import { RolesGuard } from '../../../guards/auth.guard';
import { OrderAdminService } from './../services/admin.service';
import { SingleOrderResponse } from './order.customer.model';

@UseGuards(new RolesGuard(['admin']))
@Resolver()
export class AdminOrderResolver {
  constructor(private orderAdminService: OrderAdminService) {}

  @Query(() => StatusTypesResponse)
  async getOrderEnums() {
    return await this.orderAdminService.getOrderEnums();
  }

  @Query(() => OrderStatResponse)
  async getOrderStatistics() {
    return await this.orderAdminService.getOrderStatistics();
  }

  @Query(() => OrderIncompleteStatResponse)
  async getIncompleteStatistics() {
    return await this.orderAdminService.getIncompleteStatistics();
  }

  @Query(() => OrderListResponse)
  async getOrderList(@Args('query') query?: GetAllOrderQueryModel) {
    return await this.orderAdminService.getOrderList(
      query,
      query.skip,
      query.limit,
    );
  }

  @Query(() => SingleOrderResponse)
  async getOrderByOrderId(@Args('orderId') orderId: string) {
    return await this.orderAdminService.getOrderById(orderId);
  }

  @Mutation(() => SingleOrderResponse)
  async changeStatus(@Args('body') body: ChangeStatus) {
    return await this.orderAdminService.changeStatus(body);
  }
}
