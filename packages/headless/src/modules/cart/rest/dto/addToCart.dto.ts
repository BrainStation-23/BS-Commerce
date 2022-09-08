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
  ResponseItem,
  addToCartErrorResponse,
  addToCartRequest,
  addToCartSuccessResponse,
  addToCartErrorMessage,
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
export class AddToCartSuccessResponseDto implements addToCartSuccessResponse {
  @ApiProperty()
  @IsNumber()
  code: number;

  @ApiProperty()
  @IsObject()
  data: CartDto;
}
export class AddToCartRequestDto implements addToCartRequest {
  @ApiProperty()
  @IsString()
  productId: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;
}
export class AddToCartErrorResponseDto implements addToCartErrorResponse {
  @ApiProperty({
    default: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  code: number;

  @ApiProperty({
    example: addToCartErrorMessage.CAN_NOT_CREATE_CART,
    examples: [
      addToCartErrorMessage.CAN_NOT_CREATE_CART,
      addToCartErrorMessage.CAN_NOT_ADD_ITEM_TO_THE_CART,
      addToCartErrorMessage.CAN_NOT_INCREMENT_CART_ITEM,
    ],
  })
  error: addToCartErrorMessage;

  @ApiProperty()
  errors: string[];
}
