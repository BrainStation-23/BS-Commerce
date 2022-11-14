import { IsArray, IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Branch, BranchAddress, IBranchPhoto, SingleBranchErrorMessage, SingleBranchErrorResponse, SingleBranchSuccessResponse, StoreBranchStatus } from 'models';
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';
import { HttpStatus } from '@nestjs/common';
import { CreateBranchErrorResponseDto, CreateBranchSuccessResponseDto } from './create.branch.dto';
import { Type } from 'class-transformer';
import { InActiveReason } from 'src/entity/branch';

export class BranchAddressDto implements BranchAddress {
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

export class BranchPhotoDto implements IBranchPhoto{
  @ApiProperty()
  @IsOptional()
  @IsString()
  cover?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  logo?: string;
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
  @IsObject()
  @CustomValidator(BranchAddressDto)
  address: BranchAddressDto;

  @ApiProperty({ enum: InActiveReason})
  @IsOptional()
  inActiveReason?: InActiveReason;

  @ApiProperty({ type: BranchPhotoDto })
  @IsOptional()
  @IsObject()
  @CustomValidator(BranchPhotoDto)
  image?: BranchPhotoDto;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: StoreBranchStatus.PENDING,
  })
  @IsString()
  status: StoreBranchStatus;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

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
