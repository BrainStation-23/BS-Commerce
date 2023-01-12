import { OrderEntity, OrderStatusEnumType, OrderStatEntity, OrderIncompleteStatEntity, GetAllOrderQueryEntity, AllOrdersEntity, ChangeStatusEntity } from '../../../entity/order';
import { IServiceResponse } from '../../../utils/response/service.response.interface';
import { OrderRepository } from '../repositories';
export declare class OrderAdminService {
    private orderRepository;
    constructor(orderRepository: OrderRepository);
    getOrderById(orderId: string): Promise<IServiceResponse<OrderEntity>>;
    getOrderEnums(): Promise<IServiceResponse<OrderStatusEnumType>>;
    getOrderStatistics(): Promise<IServiceResponse<OrderStatEntity>>;
    getIncompleteStatistics(): Promise<IServiceResponse<OrderIncompleteStatEntity>>;
    changeStatus(body: ChangeStatusEntity): Promise<IServiceResponse<OrderEntity>>;
    getOrderList(query?: GetAllOrderQueryEntity, skip?: number, limit?: number): Promise<IServiceResponse<AllOrdersEntity>>;
}
