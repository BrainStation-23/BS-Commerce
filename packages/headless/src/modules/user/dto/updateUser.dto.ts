import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsObject, IsOptional, IsPhoneNumber, IsString, ValidateNested } from "class-validator";
import { regexConfig } from "config/regex";
import { UpdatedUserRequest, UpdateUserErrorResponse, UpdateUserSuccessResponse } from "models";
import { AddressDto, UserDto } from "./user.dto";

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
    @ApiProperty()
    code: number;

    @ApiProperty()
    error: 'CANT\'T_GET_USER' | 'CANT\'T_UPDATE_USER_ADDRESS' | 'CANT\'T_ADD_USER_NEW_ADDRESS' | 'CANT\'T_UPDATE_USER';

    @ApiProperty()
    errors: string[];
}

export class UpdateUserSuccessResponseDto implements UpdateUserSuccessResponse {
    @ApiProperty()
    code: number;

    @ApiProperty()
    data: UserDto;
}