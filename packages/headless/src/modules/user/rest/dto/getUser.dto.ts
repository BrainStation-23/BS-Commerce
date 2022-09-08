import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import {
    GetUserErrorResponse,
    GetUserSuccessResponse,
    GetUserErrorMessages
} from '@bs-commerce/models';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';

export class GetUserErrorResponseDto implements GetUserErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: GetUserErrorMessages.CAN_NOT_GET_USER
    })
    @IsString()
    error: GetUserErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class GetUserSuccessResponseDto implements GetUserSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: UserDto;
}