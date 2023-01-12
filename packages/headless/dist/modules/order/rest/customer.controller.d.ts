import { Response } from 'express';
import { User } from '../../../entity/user';
import { IServiceResponse } from '../../../utils/response/service.response.interface';
import { CreateOrderDto } from './dto/order.create.dto';
import { OrderCustomerService } from '../services/customer.service';
import { OrderSortQueryDto } from './dto/sortQuery.dto';
import { OrderListByUserIdResponseDto } from './dto/getOrderByUserId.dto';
import { OrderDto } from './dto/order.dto';
import { ReOrderDto } from './dto/reOrder.dto';
export declare class OrderCustomerController {
    private orderCustomerService;
    constructor(orderCustomerService: OrderCustomerService);
    createOrder(user: User, body: CreateOrderDto, res: Response): Promise<IServiceResponse<OrderDto>>;
    reOrder(user: User, body: ReOrderDto, res: Response): Promise<any>;
    getOrderListByUserId(user: User, sortObj: OrderSortQueryDto, res: Response): Promise<IServiceResponse<OrderListByUserIdResponseDto>>;
    getOrderByOrderId(orderId: string, res: Response): Promise<IServiceResponse<OrderDto>>;
}
