import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import {
  GetCustomerProductByURLParams,
  GetCustomerProductByURLErrorMessages,
  GetCustomerProductByURLErrorResponse,
  GetCustomerProductByURLSuccessResponse,
} from 'models';
import { ProductDto } from '.';

export class GetCustomerProductByURLParamsDto
  implements GetCustomerProductByURLParams
{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  url: string;
}

export class GetCustomerProductByURLErrorResponseDto
  implements GetCustomerProductByURLErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: GetCustomerProductByURLErrorMessages.CAN_NOT_GET_PRODUCT,
  })
  @IsString()
  error: GetCustomerProductByURLErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class GetCustomerProductByURLSuccessResponseDto
  implements GetCustomerProductByURLSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty({ type: () => ProductDto })
  @IsObject()
  data: ProductDto;
}
