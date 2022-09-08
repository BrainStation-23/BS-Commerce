import { ApiProperty } from '@nestjs/swagger';
import { Customer } from '@bs-commerce/models';

export class CustomerDto implements Customer {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    phone?: string;

    @ApiProperty()
    email?: string;
}