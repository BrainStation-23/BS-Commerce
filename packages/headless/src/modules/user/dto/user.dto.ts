import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsPhoneNumber, IsString, MinLength, ValidateNested } from "class-validator";
import { regexConfig } from "config/regex";
import type { Address, ChangePassword, UpdatedUser } from "models"


export class AddressDto implements Address {
    @ApiProperty()
    @IsOptional()
    @IsString()
    id?: string;

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



export class UpdatedUserDto implements UpdatedUser {
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

export class ChangePasswordDto implements ChangePassword {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    currentPassword: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    newPassword: string;
}