import {
  ObjectType,
  Field,
  Int,
  InputType,
  PartialType,
  OmitType,
  IntersectionType,
} from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import {
  GetAllOrderQuery,
  IReOrderQuery,
  OrderSortingQuery,
  ReOrderData,
  CreateOrderRequest,
  CreateProductOrderDetails,
  IOrderAddress,
  IOrderProduct,
  IOrderProductPhoto,
  OrderByUserId,
  OrderByUserIdResponse,
  OrderResponseData,
} from '@bs-commerce/models';

//Queries

//Single Order Response
@ObjectType({ description: 'Order Product Photo Model' })
export class OrderProductPhotoModel implements IOrderProductPhoto {
  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  alt?: string;

  @Field({ nullable: true })
  displayOrder?: number;
}

@ObjectType({ description: 'Order Product Model' })
export class OrderProductModel implements IOrderProduct {
  @Field({ nullable: false })
  productId: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  price: number;

  @Field({ nullable: false })
  quantity: number;

  @Field({ nullable: false })
  sku: string;

  @Field((type) => [OrderProductPhotoModel], { nullable: true })
  photos?: OrderProductPhotoModel[];

  @Field({ nullable: false })
  totalPrice: number;
}

@ObjectType('AddressObjectType')
export class OrderAddressModel implements IOrderAddress {
  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: false })
  lastName: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  addressLine1: string;

  @Field({ nullable: false })
  addressLine2: string;

  @Field({ nullable: false })
  city: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  postCode?: string;

  @Field({ nullable: false })
  phoneNumber: string;
}

@ObjectType({ description: 'Order model' })
export class OrderResponse implements OrderResponseData {
  @Field({ nullable: false })
  orderId: string;

  @Field({ nullable: false })
  userId: string;

  @Field((type) => OrderAddressModel, { nullable: false })
  billingAddress: OrderAddressModel;

  @Field((type) => OrderAddressModel, { nullable: false })
  shippingAddress: OrderAddressModel;

  @Field({ nullable: false })
  shippingMethod: string;

  @Field({ nullable: false })
  paymentMethod: string;

  @Field({ nullable: false })
  orderedDate: Date;

  @Field({ nullable: false })
  orderStatus: string;

  @Field({ nullable: false })
  shippingStatus: string;

  @Field({ nullable: false })
  paymentStatus: string;

  @Field((type) => OrderProductModel, { nullable: false })
  products: OrderProductModel[];

  @Field({ nullable: false })
  productCost: number;

  @Field({ nullable: false })
  shippingCost: number;

  @Field({ nullable: false })
  totalCost: number;

  @Field({ nullable: true })
  stripeToken?: string;

  @Field({ nullable: true })
  stripeCustomerId?: string;

  @Field({ nullable: true })
  stripeChargeId?: string;

  @Field({ nullable: true })
  paypalPaymentId?: string;

  @Field({ nullable: true })
  paypalRedirectUrl?: string;
}
//OrderList Response of a single User
@ObjectType({ description: 'Order List of a single User' })
export class OrderResponseSingleUser extends OmitType(OrderResponse, [
  'userId',
] as const) {}

@ObjectType({ description: 'OrderList of a single user' })
export class OrderListByUserId implements OrderByUserIdResponse {
  @Field({ nullable: false })
  userId: string;

  @Field((type) => OrderResponseSingleUser, { nullable: false })
  orderInfo: OrderResponseSingleUser[];
}

//ReOrder
@ObjectType({ description: 'ReOrder Data' })
export class ReOrderDataModel implements ReOrderData {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  userId?: string;

  @Field((type) => [OrderProductModel], { nullable: true })
  products?: OrderProductModel[];

  @Field({ nullable: true })
  reDirectHome?: boolean;

  @Field({ nullable: true })
  message?: string;
}

//Response
@ObjectType({ description: 'Single order Response' })
export class SingleOrderResponse {
  @Field()
  error?: string;

  @Field((type) => Int, { nullable: false })
  code: number;

  @Field((type) => OrderResponse, { nullable: false })
  data: OrderResponse;
}

@ObjectType({ description: 'Single order Response' })
export class SingleUserOrderList {
  @Field()
  error?: string;

  @Field((type) => Int, { nullable: false })
  code: number;

  @Field((type) => OrderListByUserId, { nullable: false })
  data: OrderListByUserId;
}

@ObjectType({ description: 'ReOrder Response' })
export class ReOrderResponse {
  @Field()
  error?: string;

  @Field((type) => Int, { nullable: false })
  code: number;

  @Field((type) => ReOrderDataModel, { nullable: false })
  data: ReOrderDataModel;
}

//Input types

//Create Order
@InputType({ description: 'Order Product Model' })
export class OrderAddressInput implements IOrderAddress {
  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: false })
  lastName: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  addressLine1: string;

  @Field({ nullable: false })
  addressLine2: string;

  @Field({ nullable: false })
  city: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  postCode?: string;

  @Field({ nullable: false })
  phoneNumber: string;
}

@InputType({ description: 'Create Order Product Request' })
export class CreateOrderProduct implements CreateProductOrderDetails {
  @Field({ nullable: false })
  productId: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  price: number;

  @Field({ nullable: false })
  quantity: number;

  @Field({ nullable: false })
  sku: string;
}

@InputType({ description: 'Create order request' })
export class CreateOrderModel implements CreateOrderRequest {
  @Field((type) => OrderAddressInput, { nullable: false })
  billingAddress: OrderAddressInput;

  @Field((type) => OrderAddressInput, { nullable: false })
  shippingAddress: OrderAddressInput;

  @Field({ nullable: false })
  shippingMethod: string;

  @Field({ nullable: false })
  paymentMethod: string;

  @Field({ nullable: false })
  productCost: number;

  @Field({ nullable: false })
  shippingCost: number;

  @Field({ nullable: true })
  stripeToken?: string;

  @Field({ nullable: true })
  stripeCustomerId?: string;

  @Field({ nullable: true })
  stripeChargeId?: string;

  @Field({ nullable: true })
  paypalPaymentId?: string;

  @Field({ nullable: true })
  paypalRedirectUrl?: string;

  @Field((type) => [CreateOrderProduct], { nullable: false })
  products: CreateOrderProduct[];
}

//Get All Order Query
@InputType({ description: 'Query for Get All Order Query' })
export class GetAllOrderQueryModel implements GetAllOrderQuery {
  @Field({ nullable: true })
  shippingStatus?: string;

  @Field({ nullable: true })
  orderStatus?: string;

  @Field({ nullable: true })
  paymentStatus?: string;

  @Field({ nullable: true })
  skip?: number;

  @Field({ nullable: true })
  limit?: number;

  @Field({ nullable: true })
  startDate?: Date;

  @Field({ nullable: true })
  endDate?: Date;
}

enum SortField {
  orderedDate = 'orderedDate',
}
@InputType({ description: 'Sort Query for Order' })
export class OrderSortingQueryModel implements OrderSortingQuery {
  @Field({ nullable: true })
  sortField?: SortField;

  @Field({ nullable: true })
  sortType?: string;
}

//ReOrder Request
@InputType({ description: 'ReOrder Request' })
export class ReOrderRequestModel implements IReOrderQuery {
  @Field({ nullable: false })
  orderId: string;

  @Field({ nullable: true })
  overWriteCart?: boolean;

  @Field({ nullable: true })
  ignoreInvalidItems?: boolean;
}
