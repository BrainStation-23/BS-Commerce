import { Field, InputType, ObjectType } from "@nestjs/graphql";
import {
  addToCartRequest,
  CartProduct,
  CartProductInfo,
  CartProductPhoto,
  deleteCartItemRequest,
  deleteCartRequest,
  deleteCartSuccessResponse,
  DeleteMessage,
  Message,
  ResponseItem,
  updateCartItemRequest,
} from "models";

@ObjectType()
export class CartProductInfoSchema implements CartProductInfo {
  @Field()
  name: string;

  @Field({ nullable: true })
  shortDescription?: string;

  @Field({ nullable: true })
  fullDescription?: string;

  @Field()
  sku: string;

  @Field()
  price: number;

  @Field()
  oldPrice: number;

  @Field()
  cost: number;

  @Field({ nullable: true })
  showOnHomePage?: boolean;

  @Field({ nullable: true })
  includeInTopMenu?: boolean;

  @Field({ nullable: true })
  allowToSelectPageSize?: boolean;

  @Field({ nullable: true })
  published?: boolean;

  @Field({ nullable: true })
  displayOrder?: number;

  @Field({ nullable: true })
  isFeatured?: boolean;

  @Field({ nullable: true })
  publishDate?: Date;

}

@ObjectType()
export class CartProductPhotoSchema implements CartProductPhoto {
  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  alt?: string;

  @Field({ nullable: true })
  displayOrder?: number;
}

@ObjectType()
export class CartProductSchema implements CartProduct {
  @Field({ nullable: true })
  id?: string;

  @Field(type => CartProductInfoSchema)
  info: CartProductInfoSchema;

  @Field(type => [CartProductPhotoSchema], { nullable: true })
  photos?: CartProductPhotoSchema[];
}

@ObjectType()
export class CartItem implements ResponseItem {
  @Field(type => CartProductSchema, { nullable: true })
  product?: CartProductSchema;

  @Field()
  productId: string;

  @Field()
  quantity: number;
}

@InputType()
export class ItemInput implements addToCartRequest {
  @Field()
  productId: string;

  @Field()
  quantity: number;
}

@InputType()
export class deleteCartRequestSchema implements deleteCartRequest {
  @Field()
  cartId: string;
}

@InputType()
export class updateCartItemRequestSchema implements updateCartItemRequest {
  @Field({ nullable: true })
  productId?: string;

  @Field({ nullable: true })
  quantity?: number;
}

@InputType()
export class deleteCartItemRequestSchema implements deleteCartItemRequest {
  @Field()
  productId: string;
}


@ObjectType()
export class Cart {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  userId?: string;

  @Field(type => [CartItem], { nullable: true })
  items?: CartItem[];
}

@ObjectType()
export class CartResponse {
  @Field()
  code: number;

  @Field(type => Cart, { nullable: true })
  data?: Cart
}

@ObjectType()
export class DeleteMessageSchema implements DeleteMessage {
  @Field()
  message: Message;
}

@ObjectType()
export class DeleteCartResponse implements deleteCartSuccessResponse {
  @Field()
  code: number;

  @Field(type => DeleteMessageSchema, { nullable: true })
  data: DeleteMessageSchema;
}