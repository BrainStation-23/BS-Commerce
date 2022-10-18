import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  CustomerProductInfo,
  CustomerProductMeta,
  CustomerProductPhoto,
  CustomerProductCategory,
  CustomerProduct,
  CustomerProductManufacturer,
} from 'models';

export class CustomerProductInfoDto implements CustomerProductInfo {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  shortDescription?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  fullDescription?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  sku: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  oldPrice: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  publishDate?: Date;
}

export class CustomerProductMetaDto implements CustomerProductMeta {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  keywords?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  friendlyPageName: string;
}

export class CustomerProductPhotoDto implements CustomerProductPhoto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  url?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  alt?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  displayOrder?: number;
}

export class CustomerProductManufacturerDto
  implements CustomerProductManufacturer
{
  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  id: string;
}

export class CustomerProductCategoryDto implements CustomerProductCategory {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  displayOrder?: number;
}

export class CustomerProductDto implements CustomerProduct {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ type: CustomerProductInfoDto })
  @IsNotEmptyObject()
  @IsObject()
  info: CustomerProductInfoDto;

  @ApiProperty({ type: CustomerProductMetaDto })
  @IsNotEmptyObject()
  @IsObject()
  meta: CustomerProductMetaDto;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  tags?: string[];

  @ApiProperty({ type: [CustomerProductPhotoDto] })
  @IsArray()
  photos?: CustomerProductPhotoDto[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  brands?: string[];

  @ApiProperty({ type: CustomerProductManufacturerDto })
  @IsOptional()
  @IsObject()
  manufacturer: CustomerProductManufacturerDto;

  @ApiProperty({ type: [CustomerProductCategoryDto] })
  @IsNotEmptyObject()
  @IsArray()
  categories: CustomerProductCategoryDto[];
}
