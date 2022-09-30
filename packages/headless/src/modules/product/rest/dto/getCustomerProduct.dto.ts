import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import {
  GetCustomerProductParams,
  GetCustomerProductErrorMessages,
  GetCustomerProductErrorResponse,
  GetCustomerProductSuccessResponse,
} from 'models';
import { CustomerProductDto } from './customerProduct.dto';

export class GetCustomerProductParamsDto implements GetCustomerProductParams {
  @ApiProperty()
  @IsString()
  productId: string;
}

export class GetCustomerProductErrorResponseDto
  implements GetCustomerProductErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({ example: GetCustomerProductErrorMessages.CAN_NOT_GET_PRODUCT })
  @IsString()
  error: GetCustomerProductErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class GetCustomerProductSuccessResponseDto
  implements GetCustomerProductSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty({ type: () => CustomerProductDto })
  @IsObject()
  data: CustomerProductDto;
}
