import { OrderByUserId, OrderByUserIdResponse } from '@bs-commerce/models';
import { OrderAddressDto } from './order.create.dto';
import { OrderProductDto } from './OrderProduct.dto';
export declare class OrderDetails implements OrderByUserId {
    billingAddress: OrderAddressDto;
    shippingAddress: OrderAddressDto;
    shippingMethod: string;
    paymentMethod: string;
    productCost: number;
    products: OrderProductDto[];
    shippingCost: number;
    totalCost: number;
    stripeToken?: string;
    stripeCustomerId?: string;
    stripeChargeId?: string;
    paypalPaymentId?: string;
    paypalRedirectUrl?: string;
    orderStatus: string;
    shippingStatus: string;
    paymentStatus: string;
    orderId: string;
    orderedDate: Date;
}
export declare class OrderListByUserIdResponseDto implements OrderByUserIdResponse {
    userId: string;
    orderInfo: OrderDetails[];
}
