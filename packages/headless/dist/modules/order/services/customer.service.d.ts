import { CreateOrderRequest, CreateProductOrderDetails, ReOrderResponse } from '@bs-commerce/models';
import { OrderSortQuery, ReOrderQuery } from './../../../entity/order';
import { OrderEntity, OrderListResponseEntity } from '../../../entity/order';
import { IServiceResponse } from '../../../utils/response/service.response.interface';
import { OrderRepository } from '../repositories';
export declare class OrderCustomerService {
    private orderRepository;
    constructor(orderRepository: OrderRepository);
    createOrder(userId: string, body: CreateOrderRequest, products: CreateProductOrderDetails[]): Promise<IServiceResponse<OrderEntity>>;
    reOrder(userId: string, body: ReOrderQuery): Promise<ReOrderResponse>;
    getOrderListByUserId(userId: string, sortObj: OrderSortQuery): Promise<IServiceResponse<OrderListResponseEntity>>;
    getOrderByOrderId(orderId: string): Promise<IServiceResponse<OrderEntity>>;
}
