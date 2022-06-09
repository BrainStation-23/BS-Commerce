import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsObject, IsOptional, IsPhoneNumber, IsString, ValidateNested } from 'class-validator';
import { regexConfig } from 'config/regex';
import { AddressDto, UserDto } from './user.dto';
import {
    UpdatedUserRequest,
    UpdateUserErrorResponse,
    UpdateUserSuccessResponse,
    UpdateUserErrorMessages
} from 'models';

export class UpdatedUserDto implements UpdatedUserRequest {
    @ApiProperty()
    @IsOptional()
    @IsString()
    firstName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    lastName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    provider?: string;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    providerData?: object;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    additionalProviderData?: object;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsPhoneNumber(regexConfig.phone as any, { message: 'Please Enter the Valid Phone Number!' })
    phone?: string;

    @ApiProperty()
    @IsOptional()
    @ValidateNested({ each: true })
    @IsObject()
    address?: AddressDto;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    active?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    gender?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    status?: string;
}

export class UpdateUserErrorResponseDto implements UpdateUserErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty({
        example: UpdateUserErrorMessages.CAN_NOT_UPDATE_USER
    })
    error: UpdateUserErrorMessages;

    @ApiProperty()
    errors: string[];
}

export class UpdateUserSuccessResponseDto implements UpdateUserSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: UserDto;
}