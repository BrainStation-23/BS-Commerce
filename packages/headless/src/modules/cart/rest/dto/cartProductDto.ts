import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  CartProduct,
  CartProductInfo,
  CartProductPhoto,
  CartProductMeta,
} from '@bs-commerce/models';

export class CartProductInfoDto implements CartProductInfo {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  shortDescription?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  fullDescription?: string;

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
  @IsOptional()
  @IsBoolean()
  showOnHomePage?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  includeInTopMenu?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  allowToSelectPageSize?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  displayOrder?: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  publishDate?: Date;
}

export class CartProductPhotoDto implements CartProductPhoto {
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

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  displayOrder?: number;
}

export class CartProductMetaDto implements CartProductMeta {
  @ApiProperty()
  @IsString()
  friendlyPageName: string;
}

export class CartProductDto implements CartProduct {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty({ type: CartProductInfoDto })
  @Type(() => CartProductInfoDto)
  @IsObject()
  info: CartProductInfoDto;

  @ApiProperty({ type: CartProductMetaDto })
  @Type(() => CartProductMetaDto)
  @IsObject()
  meta: CartProductMetaDto;

  @ApiProperty({ type: CartProductPhotoDto })
  @Type(() => CartProductPhotoDto)
  @IsObject()
  photos: CartProductPhotoDto[];
}
