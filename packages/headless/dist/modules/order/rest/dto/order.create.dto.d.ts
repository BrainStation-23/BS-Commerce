import { CreateOrderRequest, CreateProductOrderDetails, IOrderAddress } from '@bs-commerce/models';
export declare class OrderAddressDto implements IOrderAddress {
    firstName: string;
    lastName: string;
    email: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    country?: string;
    postCode?: string;
    phoneNumber: string;
}
export declare class CreateOrderProductDto implements CreateProductOrderDetails {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    sku: string;
}
export declare class CreateOrderDto implements CreateOrderRequest {
    shippingCost: number;
    billingAddress: OrderAddressDto;
    shippingAddress: OrderAddressDto;
    shippingMethod: string;
    paymentMethod: string;
    productCost: number;
    products: CreateOrderProductDto[];
    stripeToken?: string;
    stripeCustomerId?: string;
    stripeChargeId?: string;
    paypalPaymentId?: string;
    paypalRedirectUrl?: string;
}
