import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import {
  GetAllOrderQuery,
  OrderIncompleteStat,
  OrderStat,
  OrderStatusTypes,
  PaymentStatusTypes,
  ShippingStatusTypes,
  OrderStatusModel,
  ChangeStatusModel,
} from '@bs-commerce/models';

import { OrderResponse } from './order.customer.model';

@ObjectType({ description: 'Order Status Types Model' })
export class OrderStatusTypesModel implements OrderStatusTypes {
  @Field((type) => String)
  Pending: string;

  @Field((type) => String)
  Processing: string;

  @Field((type) => String)
  Completed: string;

  @Field((type) => String)
  Cancelled: string;
}
@ObjectType({ description: 'Payment Status Types Model' })
export class PaymentStatusTypesModel implements PaymentStatusTypes {
  @Field((type) => String)
  Pending: string;

  @Field((type) => String)
  Paid: string;

  @Field((type) => String)
  Cancelled: string;
}

@ObjectType({ description: 'Shipment Status Types Model' })
export class ShippingStatusTypesModel implements ShippingStatusTypes {
  @Field((type) => String)
  NotYetShipped: string;

  @Field((type) => String)
  PartiallyShipped: string;

  @Field((type) => String)
  Shipped: string;

  @Field((type) => String)
  Delivered: string;
}
@ObjectType({ description: 'Order Status Criterias Response' })
export class StatusTypesModel implements OrderStatusModel {
  @Field((type) => OrderStatusTypesModel)
  orderStatusEnums: OrderStatusTypesModel;

  @Field((type) => PaymentStatusTypesModel)
  paymentStatusEnums: PaymentStatusTypesModel;

  @Field((type) => ShippingStatusTypesModel)
  shippingStatusEnum: ShippingStatusTypesModel;
}

@ObjectType({ description: 'All Status Enum Response' })
export class StatusTypesResponse {
  @Field()
  error?: string;

  @Field((type) => Int, { nullable: false })
  code: number;

  @Field((type) => StatusTypesModel, { nullable: false })
  data: StatusTypesModel;
}
@ObjectType({ description: 'Order Status Fields' })
export class OrderStatModel implements OrderStat {
  @Field((type) => Number)
  todayTotal: number;

  @Field((type) => Number)
  weekTotal: number;

  @Field((type) => Number)
  monthTotal: number;

  @Field((type) => Number)
  yearTotal: number;

  @Field((type) => Number)
  allTimeTotal: number;
}

@ObjectType({ description: 'All Status Enum Response' })
export class OrderStatResponse {
  @Field()
  error?: string;

  @Field((type) => Int, { nullable: false })
  code: number;

  @Field((type) => OrderStatModel, { nullable: false })
  data: OrderStatModel;
}

@ObjectType({ description: 'Incomplete Order Status Fields' })
export class OrderIncompleteStatModel implements OrderIncompleteStat {
  @Field((type) => Number)
  orderPendingTotal: number;

  @Field((type) => Number)
  orderPendingCount: number;

  @Field((type) => Number)
  paymentPendingTotal: number;

  @Field((type) => Number)
  paymentPendingCount: number;

  @Field((type) => Number)
  shippingPendingTotal: number;

  @Field((type) => Number)
  shippingPendingCount: number;
}

@ObjectType({ description: 'Incomplete Order Status Response' })
export class OrderIncompleteStatResponse {
  @Field()
  error?: string;

  @Field((type) => Int, { nullable: false })
  code: number;

  @Field((type) => OrderIncompleteStatModel, { nullable: false })
  data: OrderIncompleteStatModel;
}

@InputType({ description: 'Query for Get Order List' })
export class GetAllOrderQueryModel implements GetAllOrderQuery {
  @Field((type) => String, { nullable: true })
  shippingStatus?: string;

  @Field((type) => String, { nullable: true })
  orderStatus?: string;

  @Field((type) => String, { nullable: true })
  paymentStatus?: string;

  @Field((type) => String, { nullable: true })
  skip?: number;

  @Field((type) => String, { nullable: true })
  limit?: number;

  @Field((type) => String, { nullable: true })
  startDate?: Date;

  @Field((type) => String, { nullable: true })
  endDate?: Date;
}

@InputType({ description: 'Change Status Model' })
export class ChangeStatus implements ChangeStatusModel {
  @Field((type) => String)
  orderId: string;

  @Field((type) => String)
  statusType: string;

  @Field((type) => String)
  statusValue: string;
}

@ObjectType({ description: 'All Order List' })
export class OrderList {
  @Field((type) => [OrderResponse])
  orders: OrderResponse[];
}

@ObjectType({ description: 'All Order List Response' })
export class OrderListResponse {
  @Field()
  error?: string;

  @Field((type) => Int, { nullable: false })
  code: number;

  @Field((type) => OrderList, { nullable: false })
  data: OrderList;
}
