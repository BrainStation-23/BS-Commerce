import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Branch, BranchAddress, SingleBranchErrorMessage, SingleBranchErrorResponse, SingleBranchSuccessResponse } from 'models';
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';
import { HttpStatus } from '@nestjs/common';
import { CreateBranchErrorResponseDto, CreateBranchSuccessResponseDto } from './create.branch.dto';

export class BranchAddressDto implements BranchAddress {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressLine1: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  addressLine2?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  postCode: string;
}

export class BranchDto implements Branch {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  store: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ type: BranchAddressDto })
  @IsNotEmpty()
  @CustomValidator(BranchAddressDto)
  address: BranchAddressDto;
}

export class SingleBranchSuccessResponseDto implements SingleBranchSuccessResponse{
  @ApiProperty({ default: HttpStatus.OK })
  code: number;

  @ApiProperty()
  data: BranchDto;
}

export class SingleBranchErrorResponseDto implements SingleBranchErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code?: number;

  @ApiProperty()
  error:
    | SingleBranchErrorMessage.CANNOT_FIND_BRANCH
    | SingleBranchErrorMessage.INVALID_BRANCH_ID
    | SingleBranchErrorMessage.INVALID_STORE_ID

  @ApiProperty()
  errors: string[];
}

export type SingleBranchResponseDto =
  | SingleBranchErrorResponseDto
  | SingleBranchSuccessResponseDto;
