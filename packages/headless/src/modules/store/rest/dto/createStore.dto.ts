import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { HttpStatus } from '@nestjs/common';
import { StoreDto, StoreImage, StoreInfo } from './store.dto';
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';
import {
  CreateStoreRequestBody,
  CreateStoreErrorResponse,
  CreateStoreErrorMessages,
  CreateStoreSuccessResponse,
  CreateStoreAddress,
} from 'models';
import { Type } from 'class-transformer';

export class CreateStoreAddressDto implements CreateStoreAddress {
  @ApiProperty()
  @IsString()
  addressLine1: string;

  @ApiProperty({ required: false })
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

export class CreateStoreAdminDto {
  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class CreateStoreRequestBodyDto implements CreateStoreRequestBody {
  @ApiProperty({ type: StoreInfo })
  @IsObject()
  @Type(() => StoreInfo)
  @CustomValidator(StoreInfo)
  info: StoreInfo;

  @ApiProperty({ type: StoreImage, required: false })
  @IsObject()
  @IsOptional()
  @Type(() => StoreImage)
  @CustomValidator(StoreImage)
  image?: StoreImage;

  @ApiProperty({ type: CreateStoreAddressDto })
  @IsObject()
  @Type(() => CreateStoreAddressDto)
  @CustomValidator(CreateStoreAddressDto)
  address: CreateStoreAddressDto;

  @ApiProperty({ type: CreateStoreAdminDto })
  @IsObject()
  @Type(() => CreateStoreAdminDto)
  @CustomValidator(CreateStoreAdminDto)
  admin: CreateStoreAdminDto;

  @ApiProperty({ default: true })
  @IsBoolean()
  isActive: boolean;
}

export class CreateStoreErrorResponseDto implements CreateStoreErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: CreateStoreErrorMessages.CAN_NOT_CREATE_STORE,
    examples: [
      CreateStoreErrorMessages.STORE_SHOP_OR_LEGAL_NAME_EXISTS,
      CreateStoreErrorMessages.CAN_NOT_CREATE_STORE,
      CreateStoreErrorMessages.STORE_ADMIN_EMAIL_EXISTS,
    ],
  })
  error: CreateStoreErrorMessages;

  @ApiProperty()
  errors: string[];
}

export class CreateStoreSuccessResponseDto
  implements CreateStoreSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  code: number;

  @ApiProperty({ type: StoreDto })
  data: StoreDto;
}
