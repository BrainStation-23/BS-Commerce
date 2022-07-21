import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import { CustomerProductDto } from './customerProduct.dto';
import {
  GetCustomerAllHomePageProductsErrorMessages,
  GetCustomerAllHomePageProductsErrorResponse,
  GetCustomerAllHomePageProductsSuccessResponse,
} from 'models';

export class GetCustomerAllHomePageProductsErrorResponseDto
  implements GetCustomerAllHomePageProductsErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: GetCustomerAllHomePageProductsErrorMessages.NO_PRODUCTS_FOUND,
  })
  @IsString()
  error: GetCustomerAllHomePageProductsErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class GetCustomerAllHomePageProductsSuccessResponseDto
  implements GetCustomerAllHomePageProductsSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty({ type: () => [CustomerProductDto] })
  @IsObject()
  data: [CustomerProductDto];
}
