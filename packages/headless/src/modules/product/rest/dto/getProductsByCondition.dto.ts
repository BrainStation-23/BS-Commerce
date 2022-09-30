import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsIn,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  GetProductsByConditionQuery,
  GetProductsByConditionErrorMessages,
  GetProductsByConditionErrorResponse,
  GetProductsByConditionSuccessResponse,
  ConditionalProduct,
} from 'models';
import { Type } from 'class-transformer';
import { ProductInfoDto, ProductPhotoDto } from './product.dto';

export class GetProductsByConditionQueryDto
  implements GetProductsByConditionQuery
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

  @ApiProperty({ required: false })
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
}

export class GetProductsByConditionErrorResponseDto
  implements GetProductsByConditionErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: GetProductsByConditionErrorMessages.CAN_NOT_GET_PRODUCTS,
  })
  @IsString()
  error: GetProductsByConditionErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class ConditionalProductProductDto implements ConditionalProduct {
  @ApiProperty({ type: ProductInfoDto })
  @IsNotEmptyObject()
  @IsObject()
  info: ProductInfoDto;

  @ApiProperty({ type: [ProductPhotoDto] })
  @IsArray()
  photos?: ProductPhotoDto[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  brands?: string[];
}

export class GetProductsObject {
  @ApiProperty({ type: () => [ConditionalProductProductDto] })
  @IsObject()
  products: ConditionalProductProductDto[];

  @ApiProperty()
  @IsNumber()
  count: number;
}

export class GetProductsByConditionSuccessResponseDto
  implements GetProductsByConditionSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty()
  @IsObject()
  data: GetProductsObject;
}
