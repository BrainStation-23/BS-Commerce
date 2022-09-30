import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import { ProductDto } from '.';
import {
  UpdateProductsForBrandRequest,
  UpdateProductsForBrandErrorMessages,
  UpdateProductsForBrandErrorResponse,
  UpdateProductsForBrandSuccessResponse,
} from 'models';

export class updateProductsForBrandRequestDto
  implements UpdateProductsForBrandRequest
{
  @ApiProperty({ required: false, type: [String] })
  @IsNotEmpty()
  @IsArray()
  productIds: string[];

  @ApiProperty({ required: false, type: String })
  @IsNotEmpty()
  @IsString()
  brandId: string;
}

export class UpdateProductsForBrandErrorResponseDto
  implements UpdateProductsForBrandErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: UpdateProductsForBrandErrorMessages.CAN_NOT_UPDATE_PRODUCTS,
  })
  @IsString()
  error: UpdateProductsForBrandErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class UpdateProductsForBrandSuccessResponseDto
  implements UpdateProductsForBrandSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty({ type: () => [ProductDto] })
  @IsObject()
  data: [ProductDto];
}
