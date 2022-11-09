// enum type
export class OrderStatusEnumsType {
  Pending: string;
  Processing: string;
  Completed: string;
  Cancelled: string;
}

export class PaymentStatusEnumsType {
  Pending: string;
  Paid: string;
  Cancelled: string;
}

export class ShippingStatusEnumsType {
  NotYetShipped: string;
  PartiallyShipped: string;
  Shipped: string;
  Delivered: string;
}

export class OrderStatusEnumType {
  orderStatusEnums: OrderStatusEnumsType;
  paymentStatusEnums: PaymentStatusEnumsType;
  shippingStatusEnum: ShippingStatusEnumsType;
}

export enum StatusTypeDto {
  orderStatusEnums = 'orderStatusEnums',
  paymentStatusEnums = 'paymentStatusEnums',
  shippingStatusEnums = 'shippingStatusEnums',
}

//enum details
export enum OrderStatusEnum {
  Pending = 'Pending',
  Processing = 'Processing',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
}

export enum ShippingStatusEnum {
  NotYetShipped = 'NotYetShipped',
  PartiallyShipped = 'PartiallyShipped',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
}

export enum PaymentStatusEnum {
  Pending = 'Pending',
  Paid = 'Paid',
  Cancelled = 'Cancelled',
}

//Order Status Entitties
export class OrderStatEntity {
  todayTotal: number;
  weekTotal: number;
  monthTotal: number;
  yearTotal: number;
  allTimeTotal: number;
}

export class OrderIncompleteStatEntity {
  orderPendingTotal: number;
  orderPendingCount: number;
  paymentPendingTotal: number;
  paymentPendingCount: number;
  shippingPendingTotal: number;
  shippingPendingCount: number;
}

//Order Entities
export class OrderAddress {
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
export class OrderProductPhoto {
  url: string;
  id?: string;
  title?: string;
  alt?: string;
  displayOrder?: number;
}

export class ProductOrder {
  productId: string;
  name: string;
  photos?: OrderProductPhoto[];
  price: number;
  quantity: number;
  totalPrice: number;
  sku: string;
}
export class BaseOrderEntity {
  billingAddress: OrderAddress;
  shippingAddress: OrderAddress;
  shippingMethod: string;
  paymentMethod: string;
  productCost: number;
  shippingCost: number;
  stripeToken?: string;
  stripeCustomerId?: string;
  stripeChargeId?: string;
  paypalPaymentId?: string;
  paypalRedirectUrl?: string;
  orderedDate: Date;
  orderStatus: OrderStatusEnum;
  shippingStatus: ShippingStatusEnum;
  paymentStatus: PaymentStatusEnum;
  totalCost: number;
  products: ProductOrder[];
  branchId: string;
}
export class OrderEntity extends BaseOrderEntity {
  orderId: string;
  userId: string;
}

export class OrderByUserId extends BaseOrderEntity {
  orderId: string;
}

export class GetAllOrderQueryEntity {
  shippingStatus?: string;
  orderStatus?: string;
  paymentStatus?: string;
  skip?: number;
  limit?: number;
  startDate?: Date;
  endDate?: Date;
  branchId?: string;
}

//Response Entities
export class AllOrdersEntity {
  orders: OrderEntity[];
}
export class ChangeStatusEntity {
  orderId: string;
  statusType: string;
  statusValue: string;
}

export enum SortTypesDto {
  asc = 'asc',
  desc = 'desc',
}

export enum SortField {
  orderedDate = 'orderedDate',
}
export class OrderSortQuery {
  sortField?: SortField;
  sortType?: string;
}
export class OrderListResponseEntity {
  userId: string;
  orderInfo: OrderByUserId[];
}

export class ReOrderQuery {
  orderId: string;
  overWriteCart?: boolean;
  ignoreInvalidItems?: boolean;
}
export class CartItem {
  productId: string;
  quantity: number;
}

export class Cart {
  items: CartItem[];
}
export class CartResponse {
  id?: string;
  userId: string;
  items: CartItem[];
}
