import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import {
  GetProductParams,
  GetProductErrorMessages,
  GetProductErrorResponse,
  GetProductSuccessResponse,
} from 'models';
import { ProductDto } from '.';

export class GetProductParamsDto implements GetProductParams {
  @ApiProperty()
  @IsString()
  productId: string;
}

export class GetProductErrorResponseDto implements GetProductErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({ example: GetProductErrorMessages.CAN_NOT_GET_PRODUCT })
  @IsString()
  error: GetProductErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class GetProductSuccessResponseDto implements GetProductSuccessResponse {
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty({ type: () => ProductDto })
  @IsObject()
  data: ProductDto;
}
