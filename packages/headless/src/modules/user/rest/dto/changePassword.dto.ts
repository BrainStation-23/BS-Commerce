import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsString, MinLength } from 'class-validator';
import {
    ChangePasswordErrorResponse,
    ChangePasswordRequest,
    ChangePasswordSuccessResponse,
    ChangePasswordErrorMessages,
    ChangePasswordSuccessMessage
} from '@bs-commerce/models';

export class ChangePasswordDto implements ChangePasswordRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    currentPassword: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    newPassword: string;
}

export class ChangePasswordErrorResponseDto implements ChangePasswordErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: ChangePasswordErrorMessages.CAN_NOT_CHANGE_PASSWORD,
        examples: [ChangePasswordErrorMessages.CAN_NOT_GET_USER, ChangePasswordErrorMessages.CURRENT_PASSWORD_IS_INCORRECT, ChangePasswordErrorMessages.CAN_NOT_CHANGE_PASSWORD]
    })
    error: ChangePasswordErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

class Message {
    @ApiProperty({ example: ChangePasswordSuccessMessage.CHANGE_PASSWORD_SUCCESSFUL })
    @IsString()
    message: ChangePasswordSuccessMessage.CHANGE_PASSWORD_SUCCESSFUL;
}
export class ChangePasswordSuccessResponseDto implements ChangePasswordSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: Message;
}