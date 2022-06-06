import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import type { GetUserErrorResponse, GetUserSuccessResponse } from 'models';
import { UserDto } from './user.dto';

export class GetUserErrorResponseDto implements GetUserErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty()
    error: 'CANT\'T_GET_USER';

    @ApiProperty()
    errors: string[];
}

export class GetUserSuccessResponseDto implements GetUserSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: UserDto;
}