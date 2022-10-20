import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';
import {
  StoreBranch,
  StoreBranchStatus,
  StoreBranchImage,
  StoreBranchAddress,
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

export class StoreBranchImageDto implements StoreBranchImage {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  logo: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  cover: string;
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
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  inActiveReason: string;

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
