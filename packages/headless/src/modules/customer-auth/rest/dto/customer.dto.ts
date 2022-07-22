import { ApiProperty } from "@nestjs/swagger";
import { Customer } from 'models';

export class CustomerDto implements Customer {
    @ApiProperty()
    id: string;

    @ApiProperty()
    phone?: string;

    @ApiProperty()
    email?: string;

    @ApiProperty()
    otp?: string;
}