import { OrderIncompleteStat } from '@bs-commerce/models';
import { HttpStatus, Injectable } from "@nestjs/common";

import { 
    OrderEntity, 
    OrderStatusEnum, 
    OrderStatusEnumType, 
    PaymentStatusEnum, 
    ShippingStatusEnum, 
    OrderStatEntity, 
    OrderIncompleteStatEntity, 
    GetAllOrderQueryEntity, 
    AllOrdersEntity, 
    ChangeStatusEntity 
} from "src/entity/order";
import { errorResponse, successResponse } from "src/utils/response";
import { IServiceResponse } from "src/utils/response/service.response.interface";
import { OrderRepository } from "../repositories";

@Injectable()
export class OrderAdminService{
    constructor(private orderRepository: OrderRepository) {}

    async getOrderById(orderId: string):Promise<IServiceResponse<OrderEntity>>{
        const orderData = await this.orderRepository.findOrder({orderId});
        if (orderData) {
            return successResponse(OrderEntity, orderData);
          }
        return errorResponse(
        'Error in order creation.',
        null,
        HttpStatus.BAD_REQUEST,
        );
    }

    async getOrderEnums():Promise<IServiceResponse<OrderStatusEnumType>>{
        const enums = {
            orderStatusEnums: OrderStatusEnum,
            paymentStatusEnums: PaymentStatusEnum,
            shippingStatusEnum: ShippingStatusEnum
        }
        return successResponse( null , enums)
    }

    async getOrderStatistics():Promise<IServiceResponse<OrderStatEntity>>{
        const orderStat = await this.orderRepository.getOrderStatistics()
        if(orderStat){
            return successResponse(OrderStatEntity, orderStat)
        }
        return errorResponse(
            'Error in order statistics', null, HttpStatus.BAD_REQUEST
        )
    }

    async getIncompleteStatistics():Promise<IServiceResponse<OrderIncompleteStatEntity>>{
        const orderStat = await this.orderRepository.getIncompleteStatistics()
        if(orderStat){
            return successResponse(OrderIncompleteStatEntity, orderStat)
        }
        return errorResponse(
            'Error in order incomplete statistics', null, HttpStatus.BAD_REQUEST
        )
    }

    async changeStatus(body: ChangeStatusEntity): Promise<IServiceResponse<OrderEntity>>{
        const orderStat = await this.orderRepository.changeStatus(body);
        if(orderStat){
            return successResponse(OrderEntity, orderStat)
        }
        return errorResponse(
            'Error in change status', null, HttpStatus.BAD_REQUEST
        )
    }

    async getOrderList(query?: GetAllOrderQueryEntity, skip?: number, limit?: number): Promise<IServiceResponse<AllOrdersEntity>> {
        const orderList = await this.orderRepository.getOrderList(query, skip, limit);
        const response: AllOrdersEntity = {
            orders: orderList
        }
        if(orderList){
            return successResponse(AllOrdersEntity, response)
        }
        return errorResponse(
            'Error in getting order list', null, HttpStatus.BAD_REQUEST
        )
    }
}