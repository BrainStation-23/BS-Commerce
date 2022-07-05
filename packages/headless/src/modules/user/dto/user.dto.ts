import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import type { Address, User } from 'models';

export class AddressDto implements Address {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    id?: string;

    @ApiProperty({ required: true })
    @IsString()
    addressLine1: string;

    @ApiProperty({ required: false })
    @IsString()
    addressLine2?: string;

    @ApiProperty({ required: true })
    @IsString()
    city: string;

    @ApiProperty({ required: true })
    @IsString()
    country: string;

    @ApiProperty({ required: true })
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