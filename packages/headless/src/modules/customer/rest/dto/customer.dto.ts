import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import type { CustomerAddress, Customer } from 'models';

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
    @IsOptional()
    @IsString()
    company?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    state?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    country?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    postCode?: string;

    @ApiProperty({ required: true })
    @IsString()
    phone: string;

    @ApiProperty({
        example: 'HOME',
        examples: ['HOME', 'OFFICE', 'OTHERS']
    })
    @IsString()
    tag: string;
}

export class CustomerInformationDto implements Customer {
    @ApiProperty()
    id: string;

    @ApiProperty()
    firstName?: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    phone?: string;

    @ApiProperty()
    email: string;

    @ApiProperty({
        type: [CustomerAddressDto]
    })
    addresses?: CustomerAddressDto[];
}