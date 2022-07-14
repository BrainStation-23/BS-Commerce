import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import type { CustomerAddress, Customer } from 'models';

export enum AddressTags {
    HOME = 'HOME',
    OFFICE = 'OFFICE',
    OTHERS = 'OTHERS'
  }

export class CustomerAddressDto implements CustomerAddress {
    @ApiProperty({ required: true })
    @IsString()
    firstName: string;

    @ApiProperty({ required: true })
    @IsString()
    lastName: string;

    @ApiProperty({ required: true })
    @IsString()
    addressLine1: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    addressLine2?: string;

    @ApiProperty({ required: false })
    @IsString()
    company?: string;

    @ApiProperty({ required: false })
    @IsString()
    state?: string;

    @ApiProperty({ required: false })
    @IsString()
    country?: string;

    @ApiProperty({ required: true })
    @IsString()
    postCode: string;

    @ApiProperty({ required: true })
    @IsString()
    phone: string;

    @ApiProperty({
        example: 'HOME',
        examples: ['HOME', 'OFFICE', 'OTHERS']
    })
    @IsEnum(AddressTags)
    @IsString()
    tag: string;
}

export class CustomerInformationDto implements Customer {
    @ApiProperty()
    id: string;

    @ApiProperty({ required: false })
    phone?: string;

    @ApiProperty({ required: false })
    email: string;

    @ApiProperty()
    otp: string;

    @ApiProperty({
        type: [CustomerAddressDto]
    })
    addresses?: CustomerAddressDto[];
}