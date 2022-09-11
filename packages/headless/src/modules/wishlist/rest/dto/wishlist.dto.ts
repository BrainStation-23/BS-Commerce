import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  Wishlist,
  WishlistItem,
  WishlistProduct,
  WishlistProductInfo,
  WishlistProductPhoto,
  WishlistProductMeta,
} from '@bs-commerce/models';

export class WishlistProductInfoDto implements WishlistProductInfo {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  shortDescription: string;

  @ApiProperty()
  @IsString()
  fullDescription: string;

  @ApiProperty()
  @IsString()
  sku: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNumber()
  oldPrice: number;

  @ApiProperty()
  @IsNumber()
  cost: number;

  @ApiProperty()
  @IsBoolean()
  showOnHomePage?: boolean;

  @ApiProperty()
  @IsBoolean()
  includeInTopMenu?: boolean;

  @ApiProperty()
  @IsBoolean()
  allowToSelectPageSize?: boolean;

  @ApiProperty()
  @IsBoolean()
  published?: boolean;

  @ApiProperty()
  @IsNumber()
  displayOrder?: number;

  @ApiProperty()
  @IsBoolean()
  isFeatured?: boolean;

  @ApiProperty()
  @IsDate()
  publishDate?: Date;
}

export class WishlistProductPhotoDto implements WishlistProductPhoto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  url?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  alt?: string;
}

export class WishlistProductMetaDto implements WishlistProductMeta {
  @ApiProperty()
  @IsString()
  friendlyPageName: string;
}

export class WishlistProductDto implements WishlistProduct {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty({ type: WishlistProductInfoDto })
  @Type(() => WishlistProductInfoDto)
  @IsObject()
  info: WishlistProductInfoDto;

  @ApiProperty({ type: WishlistProductMetaDto })
  @Type(() => WishlistProductMetaDto)
  @IsObject()
  meta: WishlistProductMetaDto;

  @ApiProperty({ type: WishlistProductPhotoDto })
  @Type(() => WishlistProductPhotoDto)
  @IsObject()
  photos: WishlistProductPhotoDto[];
}

export class WishlistItemDto implements WishlistItem {
  @ApiProperty({ type: WishlistProductDto, required: false })
  @Type(() => WishlistProductDto)
  @IsOptional()
  @IsObject()
  product?: WishlistProductDto;

  @ApiProperty()
  @IsString()
  productId: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;
}

export class WishlistDto implements Wishlist {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty({ type: [WishlistItemDto] })
  @Type(() => WishlistItemDto)
  @IsOptional()
  @IsArray()
  items?: WishlistItemDto[];
}
