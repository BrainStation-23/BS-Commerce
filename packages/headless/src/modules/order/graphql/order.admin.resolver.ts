import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { 
    ChangeStatus, 
    GetAllOrderQueryModel, 
    OrderIncompleteStatResponse, 
    OrderListResponse,  
    OrderStatResponse,  
    StatusTypesResponse
} from './order.admin.model';

import { User as UserInfo } from 'src/decorators/auth.decorator';
import { RolesGuard } from 'src/guards/auth.guard';
import { OrderAdminService } from './../services/admin.service';
import { SingleOrderResponse } from './order.customer.model';

@UseGuards(new RolesGuard(['admin']))
@Resolver()
export class AdminOrderResolver {
    constructor(private orderAdminService: OrderAdminService){}

    @Query(returns => StatusTypesResponse)
    async getOrderEnums(){
        return await this.orderAdminService.getOrderEnums();
    }

    @Query(returns => OrderStatResponse)
    async getOrderStatistics(){
        return await this.orderAdminService.getOrderStatistics();
    }

    @Query(returns => OrderIncompleteStatResponse)
    async getIncompleteStatistics(){
        return await this.orderAdminService.getIncompleteStatistics();
    }

    @Query(returns => OrderListResponse)
    async getOrderList(@Args('query') query?: GetAllOrderQueryModel) {
        return await this.orderAdminService.getOrderList(query, query.skip, query.limit);
    }

    @Query(returns => SingleOrderResponse)
    async getOrderByOrderId(@Args('orderId') orderId: string){
        return await this.orderAdminService.getOrderById(orderId);
    }

    @Mutation(returns => SingleOrderResponse)
    async changeStatus(@Args('body') body: ChangeStatus){
        return await this.orderAdminService.changeStatus(body);
    }
}