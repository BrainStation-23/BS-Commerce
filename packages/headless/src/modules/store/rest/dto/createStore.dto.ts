import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MinLength,
  IsEmail,
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
import { StoreAdminCreateReq } from './store-admin.dto';
import { CreateRoleDto } from './store-admin-role.dto';

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
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6, {
    message: 'Password is too short. Minimal length is $constraint1 characters',
  })
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

  @ApiProperty({ type: StoreAdminCreateReq })
  @IsObject()
  @Type(() => StoreAdminCreateReq)
  @CustomValidator(StoreAdminCreateReq)
  admin: StoreAdminCreateReq;

  @ApiProperty({ type: CreateRoleDto })
  @IsObject()
  @Type(() => CreateRoleDto)
  @CustomValidator(CreateRoleDto)
  role: CreateRoleDto

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
      CreateStoreErrorMessages.STORE_SHOP_NAME_EXISTS,
      CreateStoreErrorMessages.CAN_NOT_CREATE_STORE,
      CreateStoreErrorMessages.EMAIL_ALREADY_USED,
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
