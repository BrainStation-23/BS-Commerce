import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Branch, BranchAddress } from 'models';
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';

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
