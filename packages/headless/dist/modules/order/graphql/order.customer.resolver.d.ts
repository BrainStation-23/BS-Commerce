import { User } from '@bs-commerce/models';
import { OrderCustomerService } from '../services/customer.service';
import { CreateOrderModel, OrderSortingQueryModel, ReOrderRequestModel } from './order.customer.model';
export declare class CustomerOrderResolver {
    private customerOrderService;
    constructor(customerOrderService: OrderCustomerService);
    getOrderByOrderId(orderId: string): Promise<import("../../../utils/response/service.response.interface").IServiceResponse<import("../../../entity/order").OrderEntity>>;
    getOrderListByUserId(user: User, sortObj: OrderSortingQueryModel): Promise<import("../../../utils/response/service.response.interface").IServiceResponse<import("../../../entity/order").OrderListResponseEntity>>;
    createOrder(user: User, order: CreateOrderModel): Promise<import("../../../utils/response/service.response.interface").IServiceResponse<import("../../../entity/order").OrderEntity>>;
    reOrder(user: User, reOrder: ReOrderRequestModel): Promise<import("@bs-commerce/models").ReOrderResponse>;
}
