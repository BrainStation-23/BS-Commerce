import { ChangeStatus, GetAllOrderQueryModel } from './order.admin.model';
import { OrderAdminService } from './../services/admin.service';
export declare class AdminOrderResolver {
    private orderAdminService;
    constructor(orderAdminService: OrderAdminService);
    getOrderEnums(): Promise<import("../../../utils/response/service.response.interface").IServiceResponse<import("../../../entity/order").OrderStatusEnumType>>;
    getOrderStatistics(): Promise<import("../../../utils/response/service.response.interface").IServiceResponse<import("../../../entity/order").OrderStatEntity>>;
    getIncompleteStatistics(): Promise<import("../../../utils/response/service.response.interface").IServiceResponse<import("../../../entity/order").OrderIncompleteStatEntity>>;
    getOrderList(query?: GetAllOrderQueryModel): Promise<import("../../../utils/response/service.response.interface").IServiceResponse<import("../../../entity/order").AllOrdersEntity>>;
    getOrderByOrderId(orderId: string): Promise<import("../../../utils/response/service.response.interface").IServiceResponse<import("../../../entity/order").OrderEntity>>;
    changeStatus(body: ChangeStatus): Promise<import("../../../utils/response/service.response.interface").IServiceResponse<import("../../../entity/order").OrderEntity>>;
}
