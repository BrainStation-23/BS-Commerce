import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import { StoreDto } from './store.dto';
import {
  GetStoreParams,
  GetStoreErrorMessages,
  GetStoreErrorResponse,
  GetStoreSuccessResponse,
} from 'models';

export class GetStoreParamsDto implements GetStoreParams {
  @ApiProperty()
  @IsString()
  storeId: string;
}

export class GetStoreErrorResponseDto implements GetStoreErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({ example: GetStoreErrorMessages.NO_STORE_FOUND})
  @IsString()
  error: GetStoreErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class GetStoreSuccessResponseDto implements GetStoreSuccessResponse {
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty({ type: () => StoreDto })
  @IsObject()
  data: StoreDto;
}
