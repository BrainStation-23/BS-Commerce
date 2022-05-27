import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsPhoneNumber, IsString, MinLength, ValidateNested } from "class-validator";
import { regexConfig } from "config/regex";
import { Address, ChangePassword } from "src/entity/user";

export class UpdatedUser {
    firstName?: string;
    lastName?: string;
    provider?: string;
    providerData?: object;
    additionalProviderData?: object;
    phone?: string;
    address?: Address;
    active?: boolean;
    gender?: string;
    status?: string;
}

export class AddressDto extends Address {
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



export class UpdatedUserDto extends UpdatedUser {
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

export class ChangePasswordDto extends ChangePassword {
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