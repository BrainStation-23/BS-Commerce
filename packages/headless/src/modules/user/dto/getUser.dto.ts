import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { 
    GetUserErrorResponse,
    GetUserSuccessResponse,
    GetUserErrorMessages
 } from 'models';

export class GetUserErrorResponseDto implements GetUserErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty({
        example: GetUserErrorMessages.CAN_NOT_GET_USER
    })
    error: GetUserErrorMessages;

    @ApiProperty()
    errors: string[];
}

export class GetUserSuccessResponseDto implements GetUserSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: UserDto;
}