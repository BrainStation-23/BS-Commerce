import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class LogoutSuccessResponseMessage {
    @ApiProperty()
    message: string;
}

export class CustomerLogoutSuccessResponseDto {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: LogoutSuccessResponseMessage;
}
