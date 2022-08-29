import { Field, GraphQLISODateTime, InputType, Int, ObjectType } from '@nestjs/graphql';
import {
  WishlistItem,
  WishlistProduct,
  WishlistProductInfo,
  WishlistProductPhoto,
  addToWishlistRequest,
  WishlistProductMeta
} from 'models';

@ObjectType()
export class WishlistProductPhotoType implements WishlistProductPhoto {
  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  alt?: string;
}

@ObjectType()
export class WishlistProductInfoType implements WishlistProductInfo {
  @Field()
  name: string;

  @Field()
  shortDescription: string;

  @Field()
  fullDescription: string;

  @Field()
  sku: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  oldPrice: number;

  @Field(() => Int)
  cost: number;

  @Field(() => Boolean, { nullable: true })
  showOnHomePage?: boolean;

  @Field(() => Boolean, { nullable: true })
  includeInTopMenu?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowToSelectPageSize?: boolean;

  @Field(() => Boolean, { nullable: true })
  published?: boolean;

  @Field(() => Int, { nullable: true })
  displayOrder?: number;

  @Field(() => Boolean, { nullable: true })
  isFeatured?: boolean;

  @Field(() => GraphQLISODateTime, { nullable: true })
  publishDate?: Date;
}

@ObjectType()
export class WishlistProductMetaType implements WishlistProductMeta {
  @Field()
  friendlyPageName: string;
}

@ObjectType()
export class WishlistProductType implements WishlistProduct {
  @Field()
  id: string;

  @Field(() => WishlistProductInfoType)
  info: WishlistProductInfoType;

  @Field(() => WishlistProductMetaType)
  meta: WishlistProductMetaType;

  @Field(() => [WishlistProductPhotoType], { nullable: true })
  photos?: WishlistProductPhotoType[];
}

@ObjectType()
export class WishlistItemType implements WishlistItem {
  @Field()
  productId: string;

  @Field(() => WishlistProductType, { nullable: true })
  product?: WishlistProductType;

  @Field(() => Int)
  quantity: number;
}

@InputType()
export class WishlistItemInput implements addToWishlistRequest {
  @Field()
  productId: string;

  @Field(() => Int)
  quantity: number
}

@ObjectType()
export class WishList {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field(() => [WishlistItemType], { nullable: true })
  items?: WishlistItemType[];
}

@ObjectType()
export class WishListResponse {
  @Field(() => Int)
  code: number;

  @Field(() => WishList)
  data: WishList;
}

@ObjectType()
export class WishListResponseMessage {
  @Field()
  message: string;
}

@ObjectType()
export class WishListResponseWithMessage {
  @Field(() => Int)
  code: number;

  @Field(() => WishListResponseMessage)
  data: WishListResponseMessage
}