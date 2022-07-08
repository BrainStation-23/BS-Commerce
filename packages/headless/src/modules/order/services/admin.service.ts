import { HttpStatus, Injectable } from "@nestjs/common";
import { OrderEntity, OrderStatusEnum, PaymentStatusEnum, ShippingStatusEnum } from "src/entity/order";
import { errorResponse, successResponse } from "src/utils/response";
import { OrderRepository } from "../repositories";

@Injectable()
export class OrderAdminService{
    constructor(private orderRepository: OrderRepository) {}
   
    async updateOrder(body:any):Promise<any>{
        return;
    }

    async getOrderById(orderId: string):Promise<any>{
        const orderData = await this.orderRepository.getOrderById(orderId)
        if (orderData) {
            return successResponse(OrderEntity, orderData);
          }
        return errorResponse(
        'Error in order creation.',
        null,
        HttpStatus.BAD_REQUEST,
        );
    }

    async getOrderEnums():Promise<any>{
        const enums = {
            orderStatusEnums: OrderStatusEnum,
            paymentStatusEnums: PaymentStatusEnum,
            shippingStatusEnum: ShippingStatusEnum
        }
        return successResponse( null , enums)
    }

    async getOrderStatistics():Promise<any>{
        const orderStat = await this.orderRepository.getOrderStatistics()
        if(orderStat){
            return successResponse(null, orderStat)
        }
        return errorResponse(
            'Error in order statistics', null, HttpStatus.BAD_REQUEST
        )
    }
    async getIncompleteStatistics():Promise<any>{
        const orderStat = await this.orderRepository.getIncompleteStatistics()
        if(orderStat){
            return successResponse(null, orderStat)
        }
        return errorResponse(
            'Error in order incomplete statistics', null, HttpStatus.BAD_REQUEST
        )
    }

}