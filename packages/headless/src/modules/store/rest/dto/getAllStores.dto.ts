import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { StoreDto } from './store.dto';
import {
  GetAllStoresQuery,
  GetAllStoresErrorMessages,
  GetAllStoresErrorResponse,
  GetAllStoresSuccessResponse,
} from 'models';
import { Type } from 'class-transformer';

export class GetAllStoresQueryDto implements GetAllStoresQuery {
  @ApiProperty({ required: false, type: Number })
  @Type(() => Number)
  @IsNumber()
  skip: number;

  @ApiProperty({ required: false, type: Number })
  @Type(() => Number)
  @IsNumber()
  limit: number;

  @ApiProperty({ required: false, description: 'Store URL' })
  @IsOptional()
  @IsString()
  url?: string;

  @ApiProperty({ required: false, description: 'Store Legal Name' })
  @IsOptional()
  @IsString()
  legalName?: string;

  @ApiProperty({
    required: false,
    description: 'Store Active Status(true/false)',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isActive?: boolean;

  @ApiProperty({ required: false, description: 'Store Admin Email Address' })
  @IsOptional()
  @IsString()
  @IsEmail()
  adminEmail?: string;
}

export class GetAllStoresErrorResponseDto implements GetAllStoresErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({ example: GetAllStoresErrorMessages.NO_STORES_FOUND })
  @IsString()
  error: GetAllStoresErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class GetAllStoresSuccessResponseDto
  implements GetAllStoresSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty({ type: () => [StoreDto] })
  @IsObject()
  data: StoreDto[];
}
