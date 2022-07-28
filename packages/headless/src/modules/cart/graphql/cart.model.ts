import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { addToCartRequest, CartProduct, CartProductInfo, CartProductPhoto, deleteCartItemRequest, deleteCartRequest, ResponseItem, updateCartItemRequest } from "models";

@ObjectType()
export class CartProductInfoSchema implements CartProductInfo{
  @Field()
  name: string;

  @Field()
  shortDescription?: string;

  @Field()
  fullDescription?: string;

  @Field()
  sku: string;

  @Field()
  price: number;

  @Field()
  oldPrice: number;

  @Field()
  cost: number;

  @Field()
  showOnHomePage?: boolean;

  @Field()
  includeInTopMenu?: boolean;

  @Field()
  allowToSelectPageSize?: boolean;

  @Field()
  published?: boolean;

  @Field()
  displayOrder?: number;

  @Field()
  isFeatured?: boolean;

  @Field()
  publishDate?: Date;
  
}

@ObjectType()
export class CartProductPhotoSchema implements CartProductPhoto{
  @Field()
  url?: string;

  @Field()
  title?: string;

  @Field()
  alt?: string;

  @Field()
  displayOrder?: number;
}

@ObjectType()
export class CartProductSchema implements CartProduct{
  @Field()
  id?: string;

  @Field(type => CartProductInfoSchema)
  info: CartProductInfoSchema;

  @Field(type => [CartProductPhotoSchema])
  photos?: CartProductPhotoSchema[];
}

@ObjectType()
export class CartItem implements  ResponseItem{
  @Field(type => CartProductSchema)
  product?: CartProductSchema;

  @Field()
  productId: string;

  @Field()
  quantity: number;
}

@InputType()
export class ItemInput implements addToCartRequest{
  @Field()
  productId: string;

  @Field()
  quantity: number;
}

@InputType()
export class deleteCartRequestSchema implements deleteCartRequest{
  @Field()
  cartId: string;
} 

@InputType()
export class updateCartItemRequestSchema implements updateCartItemRequest {
  @Field()
  productId?: string;

  @Field()
  quantity?: number;
}

@InputType()
export class deleteCartItemRequestSchema implements deleteCartItemRequest{
  @Field()
  productId: string;
}


@ObjectType()
export class Cart {
  @Field()
  id?: string;

  @Field()
  userId?: string;

  @Field(type => [CartItem])
  items?: CartItem[];
}

@ObjectType()
export class CartResponse {
  @Field()
  error?: string;

  @Field()
  code: number;

  @Field(type => Cart)
  data?: Cart
}