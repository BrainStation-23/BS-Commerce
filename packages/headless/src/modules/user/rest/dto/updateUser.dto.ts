import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { regexConfig } from 'config/phone';
import { AddressDto, UserDto } from './user.dto';
import { ValidateNested as CustomValidator } from '../../../../decorators/service.validator';
import {
  UpdatedUserRequest,
  UpdateUserErrorResponse,
  UpdateUserSuccessResponse,
  UpdateUserErrorMessages,
} from '@bs-commerce/models';

export class UpdatedUserDto implements UpdatedUserRequest {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  provider?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  providerData?: object;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  additionalProviderData?: object;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsPhoneNumber(regexConfig.phone as any, {
    message: 'Please Enter the Valid Phone Number!',
  })
  phone?: string;

  @ApiProperty({ required: false, type: AddressDto })
  @IsOptional()
  @CustomValidator(AddressDto)
  @IsObject()
  address?: AddressDto;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  status?: string;
}

export class UpdateUserErrorResponseDto implements UpdateUserErrorResponse {
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  code: number;

  @ApiProperty({
    example: UpdateUserErrorMessages.CAN_NOT_UPDATE_USER,
  })
  @IsString()
  error: UpdateUserErrorMessages;

  @ApiProperty()
  @IsArray()
  errors: string[];
}

export class UpdateUserSuccessResponseDto implements UpdateUserSuccessResponse {
  @ApiProperty({ default: HttpStatus.OK })
  @IsNumber()
  code: number;

  @ApiProperty()
  @IsObject()
  data: UserDto;
}
