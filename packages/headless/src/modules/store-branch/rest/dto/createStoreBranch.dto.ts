import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  CreateStoreBranchErrorMessages,
  CreateStoreBranchErrorResponse,
  CreateStoreBranchRequest,
  CreateStoreBranchSuccessResponse,
} from 'models';
import {
  StoreBranchAddressDto,
  StoreBranchDto,
  StoreBranchInfoDto,
} from './storeBranch.dto';

export class CreateStoreBranchRequestDto implements CreateStoreBranchRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  store: string;

  @ApiProperty({ type: StoreBranchInfoDto })
  @Type(() => StoreBranchInfoDto)
  @IsNotEmpty()
  @IsObject()
  info: StoreBranchInfoDto;

  @ApiProperty({ type: StoreBranchAddressDto })
  @Type(() => StoreBranchAddressDto)
  @IsNotEmpty()
  @IsObject()
  address: StoreBranchAddressDto;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  image: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  description: string;
}
export class CreateStoreBranchSuccessResponseDto
  implements CreateStoreBranchSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty({ type: [StoreBranchDto] })
  @IsObject()
  data: StoreBranchDto;
}

export class CreateStoreBranchErrorResponseDto
  implements CreateStoreBranchErrorResponse
{
  @ApiProperty({ default: HttpStatus.INTERNAL_SERVER_ERROR })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: CreateStoreBranchErrorMessages.CAN_NOT_CREATE_STORE_BRANCH_REQUEST,
  })
  @IsString()
  error: CreateStoreBranchErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}
