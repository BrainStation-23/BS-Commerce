import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import type { Address, User } from 'models'

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

export class UserDto implements User {
    @ApiProperty()
    id: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    displayName: string;

    @ApiProperty()
    phone?: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    provider?: string;

    @ApiProperty()
    providerData?: object;

    @ApiProperty()
    additionalProviderData?: object;

    @ApiProperty()
    resetPasswordToken?: string;

    @ApiProperty()
    resetPasswordExpires?: number;

    @ApiProperty()
    gender?: string;

    @ApiProperty({
        type: [AddressDto]
    })
    addresses?: AddressDto[];

    @ApiProperty()
    status?: string;
}