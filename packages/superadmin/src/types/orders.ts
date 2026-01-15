// Order Types

export enum OrderStatus {
  PENDING = 'Pending',
  PROCESSING = 'Processing',
  CANCELLED = 'Cancelled',
  COMPLETED = 'Completed',
}

export enum PaymentStatus {
  PENDING = 'Pending',
  PAID = 'Paid',
  CANCELLED = 'Cancelled',
}

export enum ShippingStatus {
  NOT_YET_SHIPPED = 'NotYetShipped',
  PARTIALLY_SHIPPER = 'PartiallyShipper',
  SHIPPED = 'Shipped',
  DELIVERED = 'Delivered',
}

export interface OrderAddress {
  firstName: string;
  lastName: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postCode: string;
  phoneNumber: string;
}

export interface OrderProductPhoto {
  url: string;
  id: string;
  title: string;
  alt: string;
  displayOrder: number;
}

export interface OrderProduct {
  productId: string;
  name: string;
  price: number;
  totalPrice: number;
  quantity: number;
  quantityShipped: number;
  sku: string;
  photos: OrderProductPhoto[];
}

export interface Order {
  _id: string;
  orderId: string;
  userId: string;
  billingAddress: OrderAddress;
  shippingAddress: OrderAddress;
  shippingMethod: string;
  paymentMethod: string;
  orderStatus: OrderStatus;
  shippingStatus: ShippingStatus;
  paymentStatus: PaymentStatus;
  products: OrderProduct[];
  productCost: number;
  shippingCost: number;
  totalCost: number;
  stripeToken?: string;
  stripeCustomerId?: string;
  stripeChargeId?: string;
  paypalPaymentId?: string;
  paypalRedirectUrl?: string;
  orderedDate: string;
  __v?: number;
}

export interface OrderListResponse {
  data: {
    orders: Order[];
  };
}

export interface OrderListParams {
  limit?: number;
  shippingStatus?: ShippingStatus;
  orderStatus?: OrderStatus;
  paymentStatus?: PaymentStatus;
  startDate?: string;
  endDate?: string;
}

export interface OrderDetailsResponse {
  data: Order;
}

export type StatusType = 'orderStatus' | 'paymentStatus' | 'shippingStatus';

export interface ChangeOrderStatusPayload {
  orderId: string;
  statusType: StatusType;
  statusValue: OrderStatus | PaymentStatus | ShippingStatus;
}
