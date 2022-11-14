import {
  IsBoolean,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';
import { BranchAddressDto, BranchDto, BranchPhotoDto } from './branch.dto';
import { HttpStatus } from '@nestjs/common';

import {
  CreateBranchErrorMessage,
  CreateBranchErrorResponse,
  CreateBranchRequest,
  CreateBranchSuccessResponse,
  InActiveReason,
} from 'models';

export class CreateBranchRequestDto implements CreateBranchRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  store: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ type: BranchAddressDto })
  @IsNotEmpty()
  @IsObject()
  @CustomValidator(BranchAddressDto)
  address: BranchAddressDto;

  @ApiProperty()
  @IsOptional()
  inActiveReason?: InActiveReason;

  @ApiProperty({ type: BranchPhotoDto })
  @IsOptional()
  @IsObject()
  @CustomValidator(BranchPhotoDto)
  image?: BranchPhotoDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;
}

export class CreateBranchSuccessResponseDto
  implements CreateBranchSuccessResponse
{
  @ApiProperty({ default: HttpStatus.CREATED })
  code: number;

  @ApiProperty()
  data: BranchDto;
}

export class CreateBranchErrorResponseDto implements CreateBranchErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code?: number;

  @ApiProperty()
  error:
    | CreateBranchErrorMessage.CANNOT_CREATE_BRANCH
    | CreateBranchErrorMessage.BRANCH_ALREADY_EXISTS
    | CreateBranchErrorMessage.INVALID_STORE_ID;

  @ApiProperty()
  errors: string[];
}

export type CreateBranchResponseDto =
  | CreateBranchErrorResponseDto
  | CreateBranchSuccessResponseDto;
