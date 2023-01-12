import { GetAllOrderQuery } from '@bs-commerce/models';
import { OrderDto } from './order.dto';
export declare class GetAllOrderQueryDto implements GetAllOrderQuery {
    shippingStatus?: string;
    orderStatus?: string;
    paymentStatus?: string;
    startDate?: Date;
    endDate?: Date;
    skip?: number;
    limit?: number;
}
export declare class AllOrderResponseDto {
    orders: OrderDto[];
}
