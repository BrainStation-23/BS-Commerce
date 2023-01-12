import { Response } from 'express';
import { IServiceResponse } from '../../../utils/response/service.response.interface';
import { ChangeStatusDto, OrderIncompleteStatDto, OrderStatDto, OrderStatusEnumDto } from './dto/admin.response.dto';
import { OrderAdminService } from '../services/admin.service';
import { GetAllOrderQueryDto } from './dto/allOrderList.dto';
import { OrderDto } from './dto/order.dto';
export declare class OrderAdminController {
    private orderAdminService;
    constructor(orderAdminService: OrderAdminService);
    getOrderEnums(res: Response): Promise<IServiceResponse<OrderStatusEnumDto>>;
    getOrderStatistics(res: Response): Promise<IServiceResponse<OrderStatDto>>;
    getIncompleteStatistics(res: Response): Promise<IServiceResponse<OrderIncompleteStatDto>>;
    getOrderList(query: GetAllOrderQueryDto, res: Response): Promise<{
        errors: import("../../../utils/response/service.response.interface").DescriptiveError;
        error: string;
    } | {
        data: import("../../../entity/order").AllOrdersEntity;
    }>;
    getOrderById(orderId: string, res: Response): Promise<IServiceResponse<OrderDto>>;
    changeStatus(body: ChangeStatusDto, res: Response): Promise<IServiceResponse<OrderDto>>;
}
