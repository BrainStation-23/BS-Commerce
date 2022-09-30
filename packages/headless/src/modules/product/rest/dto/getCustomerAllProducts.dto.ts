import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsIn,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  GetCustomerAllProductsQuery,
  GetCustomerAllProductsErrorMessages,
  GetCustomerAllProductsErrorResponse,
  GetCustomerAllProductsSuccessResponse,
  GetCustomerAllProductsResponseType,
} from 'models';
import { Type } from 'class-transformer';
import { CustomerProductDto } from './customerProduct.dto';

export class GetCustomerAllProductsQueryDto
  implements GetCustomerAllProductsQuery
{
  @ApiProperty({ required: false, type: Number })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  skip?: number;

  @ApiProperty({ required: false, type: Number })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  brand?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  manufacturer?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  categoryId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  productName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isFeatured?: boolean;

  @ApiProperty({
    required: false,
    description: 'Category Slug',
    default: 'realme',
  })
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiProperty({
    required: false,
    description: 'Price Low to High -> asc or High to Low -> desc',
    default: 'asc',
  })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  @IsString()
  orderBy?: string;

  @ApiProperty({ required: false, default: 0, type: Number })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minPrice?: number;

  @ApiProperty({ required: false, default: 10000, type: Number })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  maxPrice?: number;
}

export class GetCustomerAllProductsErrorResponseDto
  implements GetCustomerAllProductsErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: GetCustomerAllProductsErrorMessages.CAN_NOT_GET_ALL_PRODUCTS,
  })
  @IsString()
  error: GetCustomerAllProductsErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class GetCustomerAllProductsResponse
  implements GetCustomerAllProductsResponseType
{
  @ApiProperty({ type: () => [CustomerProductDto] })
  products: CustomerProductDto[];

  @ApiProperty({ type: () => [String] })
  manufacturers: string[];

  @ApiProperty({ type: () => [String] })
  brands: string[];

  @ApiProperty({ type: Number })
  totalProducts: number;
}

export class GetCustomerAllProductsSuccessResponseDto
  implements GetCustomerAllProductsSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty({ type: () => GetCustomerAllProductsResponse })
  @IsObject()
  data: GetCustomerAllProductsResponse;
}
