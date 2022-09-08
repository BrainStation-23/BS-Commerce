import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  Cart,
  getCartErrorMessage,
  getCartErrorResponse,
  getCartSuccessResponse,
  ResponseItem,
} from '@bs-commerce/models';
import { CartProductDto } from './cartProductDto';

class ResponseItemDto implements ResponseItem {
  @ApiProperty({ type: CartProductDto })
  @Type(() => CartProductDto)
  @IsOptional()
  @IsObject()
  product?: CartProductDto;

  @ApiProperty()
  @IsString()
  productId: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;
}

class CartDto implements Cart {
  @ApiProperty()
  @IsString()
  id?: string;

  @ApiProperty()
  @IsString()
  userId?: string;

  @ApiProperty({ type: [ResponseItemDto] })
  @Type(() => ResponseItemDto)
  @IsOptional()
  @IsArray()
  items?: ResponseItemDto[];
}

export class getCartSuccessResponseDto implements getCartSuccessResponse {
  @ApiProperty()
  @IsNumber()
  code: number;

  @ApiProperty()
  @IsObject()
  data: CartDto;
}
export class getCartErrorResponseDto implements getCartErrorResponse {
  @ApiProperty({
    default: HttpStatus.BAD_REQUEST,
  })
  code: number;

  @ApiProperty({
    example: getCartErrorMessage.NO_CART_FOUND,
    examples: [getCartErrorMessage.NO_CART_FOUND],
  })
  error: getCartErrorMessage;

  @ApiProperty()
  errors: string[];
}
