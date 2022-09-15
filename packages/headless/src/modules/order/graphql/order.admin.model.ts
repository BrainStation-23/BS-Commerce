import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
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
  @Field(() => String)
  Pending: string;

  @Field(() => String)
  Processing: string;

  @Field(() => String)
  Completed: string;

  @Field(() => String)
  Cancelled: string;
}
@ObjectType({ description: 'Payment Status Types Model' })
export class PaymentStatusTypesModel implements PaymentStatusTypes {
  @Field(() => String)
  Pending: string;

  @Field(() => String)
  Paid: string;

  @Field(() => String)
  Cancelled: string;
}

@ObjectType({ description: 'Shipment Status Types Model' })
export class ShippingStatusTypesModel implements ShippingStatusTypes {
  @Field(() => String)
  NotYetShipped: string;

  @Field(() => String)
  PartiallyShipped: string;

  @Field(() => String)
  Shipped: string;

  @Field(() => String)
  Delivered: string;
}
@ObjectType({ description: 'Order Status Criterias Response' })
export class StatusTypesModel implements OrderStatusModel {
  @Field(() => OrderStatusTypesModel)
  orderStatusEnums: OrderStatusTypesModel;

  @Field(() => PaymentStatusTypesModel)
  paymentStatusEnums: PaymentStatusTypesModel;

  @Field(() => ShippingStatusTypesModel)
  shippingStatusEnum: ShippingStatusTypesModel;
}

@ObjectType({ description: 'All Status Enum Response' })
export class StatusTypesResponse {
  @Field()
  error?: string;

  @Field(() => Int, { nullable: false })
  code: number;

  @Field(() => StatusTypesModel, { nullable: false })
  data: StatusTypesModel;
}
@ObjectType({ description: 'Order Status Fields' })
export class OrderStatModel implements OrderStat {
  @Field(() => Number)
  todayTotal: number;

  @Field(() => Number)
  weekTotal: number;

  @Field(() => Number)
  monthTotal: number;

  @Field(() => Number)
  yearTotal: number;

  @Field(() => Number)
  allTimeTotal: number;
}

@ObjectType({ description: 'All Status Enum Response' })
export class OrderStatResponse {
  @Field()
  error?: string;

  @Field(() => Int, { nullable: false })
  code: number;

  @Field(() => OrderStatModel, { nullable: false })
  data: OrderStatModel;
}

@ObjectType({ description: 'Incomplete Order Status Fields' })
export class OrderIncompleteStatModel implements OrderIncompleteStat {
  @Field(() => Number)
  orderPendingTotal: number;

  @Field(() => Number)
  orderPendingCount: number;

  @Field(() => Number)
  paymentPendingTotal: number;

  @Field(() => Number)
  paymentPendingCount: number;

  @Field(() => Number)
  shippingPendingTotal: number;

  @Field(() => Number)
  shippingPendingCount: number;
}

@ObjectType({ description: 'Incomplete Order Status Response' })
export class OrderIncompleteStatResponse {
  @Field()
  error?: string;

  @Field(() => Int, { nullable: false })
  code: number;

  @Field(() => OrderIncompleteStatModel, { nullable: false })
  data: OrderIncompleteStatModel;
}

@InputType({ description: 'Query for Get Order List' })
export class GetAllOrderQueryModel implements GetAllOrderQuery {
  @Field(() => String, { nullable: true })
  shippingStatus?: string;

  @Field(() => String, { nullable: true })
  orderStatus?: string;

  @Field(() => String, { nullable: true })
  paymentStatus?: string;

  @Field(() => String, { nullable: true })
  skip?: number;

  @Field(() => String, { nullable: true })
  limit?: number;

  @Field(() => String, { nullable: true })
  startDate?: Date;

  @Field(() => String, { nullable: true })
  endDate?: Date;
}

@InputType({ description: 'Change Status Model' })
export class ChangeStatus implements ChangeStatusModel {
  @Field(() => String)
  orderId: string;

  @Field(() => String)
  statusType: string;

  @Field(() => String)
  statusValue: string;
}

@ObjectType({ description: 'All Order List' })
export class OrderList {
  @Field(() => [OrderResponse])
  orders: OrderResponse[];
}

@ObjectType({ description: 'All Order List Response' })
export class OrderListResponse {
  @Field()
  error?: string;

  @Field(() => Int, { nullable: false })
  code: number;

  @Field(() => OrderList, { nullable: false })
  data: OrderList;
}
