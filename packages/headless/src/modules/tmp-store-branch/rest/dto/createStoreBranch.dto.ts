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
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';
import {
  CreateStoreBranchErrorMessages,
  CreateStoreBranchErrorResponse,
  CreateStoreBranchRequest,
  CreateStoreBranchSuccessResponse,
} from 'models';
import {
  StoreBranchAddressDto,
  StoreBranchDto,
  StoreBranchImageDto,
} from './storeBranch.dto';

export class CreateStoreBranchRequestDto implements CreateStoreBranchRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  store: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: StoreBranchImageDto, required: false })
  @Type(() => StoreBranchImageDto)
  @CustomValidator(StoreBranchImageDto)
  @IsOptional()
  @IsObject()
  image: StoreBranchImageDto;

  @ApiProperty({ type: StoreBranchAddressDto })
  @Type(() => StoreBranchAddressDto)
  @CustomValidator(StoreBranchAddressDto)
  @IsNotEmpty()
  @IsObject()
  address: StoreBranchAddressDto;

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

  @ApiProperty({ type: StoreBranchDto })
  @Type(() => StoreBranchDto)
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
