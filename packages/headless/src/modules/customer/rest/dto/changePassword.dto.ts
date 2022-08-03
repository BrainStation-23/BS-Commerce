import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsString, MinLength } from 'class-validator';
import {
    CustomerChangePasswordErrorResponse,
    CustomerChangePasswordRequest,
    CustomerChangePasswordSuccessResponse,
    CustomerChangePasswordErrorMessages,
    CustomerChangePasswordSuccessMessage
} from 'models';

export class CustomerChangePasswordDto implements CustomerChangePasswordRequest {
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

export class CustomerChangePasswordErrorResponseDto implements CustomerChangePasswordErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: CustomerChangePasswordErrorMessages.CAN_NOT_CHANGE_PASSWORD,
        examples: [CustomerChangePasswordErrorMessages.CAN_NOT_GET_CUSTOMER, CustomerChangePasswordErrorMessages.CURRENT_PASSWORD_IS_INCORRECT, CustomerChangePasswordErrorMessages.CAN_NOT_CHANGE_PASSWORD]
    })
    error: CustomerChangePasswordErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

class Message {
    @ApiProperty({ example: CustomerChangePasswordSuccessMessage.CHANGE_PASSWORD_SUCCESSFUL })
    @IsString()
    message: CustomerChangePasswordSuccessMessage.CHANGE_PASSWORD_SUCCESSFUL;
}
export class CustomerChangePasswordSuccessResponseDto implements CustomerChangePasswordSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: Message;
}