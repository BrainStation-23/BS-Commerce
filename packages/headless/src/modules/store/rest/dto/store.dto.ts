import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Store, StoreAddress } from 'models';
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';

export class StoreInfo {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  shopName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  legalName: string;
}

export class StoreImage {
  @ApiProperty()
  @IsString()
  @IsOptional()
  logo?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  cover?: string;
}

export class StoreAddressDto implements StoreAddress {
  @ApiProperty()
  @IsOptional()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  addressLine1: string;

  @ApiProperty()
  @IsString()
  addressLine2?: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsString()
  postCode: string;
}

export class StoreDto implements Store {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ type: StoreInfo })
  @IsObject()
  @Type(() => StoreInfo)
  @CustomValidator(StoreInfo)
  info: StoreInfo;

  @ApiProperty({ type: StoreImage })
  @IsObject()
  @IsOptional()
  @Type(() => StoreImage)
  @CustomValidator(StoreImage)
  image?: StoreImage;

  @ApiProperty({ type: StoreAddressDto })
  @IsObject()
  @Type(() => StoreAddressDto)
  @CustomValidator(StoreAddressDto)
  address: StoreAddressDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty({ description: 'Store Admin ID' })
  @IsString()
  @IsNotEmpty()
  admin: string;

  @ApiProperty()
  @IsString()
  @IsBoolean()
  isActive: boolean;
}
