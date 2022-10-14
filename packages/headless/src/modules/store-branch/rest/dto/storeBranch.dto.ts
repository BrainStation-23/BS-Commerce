import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import {
  StoreBranch,
  StoreBranchAddress,
  StoreBranchInfo,
  StoreBranchStatus,
} from 'models';

export class StoreBranchAddressDto implements StoreBranchAddress {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  addressLine1: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  addressLine2: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  postCode: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  country: string;
}

export class StoreBranchInfoDto implements StoreBranchInfo {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  shopName: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  legalName: string;
}

export class StoreBranchDto implements StoreBranch {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  store: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty({ type: StoreBranchInfoDto })
  @IsNotEmpty()
  @IsObject()
  info: StoreBranchInfoDto;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  image: string;

  @ApiProperty({ type: StoreBranchAddressDto })
  @IsNotEmpty()
  @IsObject()
  address: StoreBranchAddressDto;

  @ApiProperty({
    example: StoreBranchStatus.PENDING,
  })
  @IsString()
  status: StoreBranchStatus;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  description: string;
}
