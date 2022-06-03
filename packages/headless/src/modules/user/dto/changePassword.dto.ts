import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { ChangePasswordErrorResponse, ChangePasswordRequest, ChangePasswordSuccessResponse } from "models";
import { UserDto } from "./user.dto";

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
    @ApiProperty()
    code: number;

    @ApiProperty()
    error: 'CANT\'T_GET_USER' | 'CURRENT_PASSWORD_IS_INCORRECT' | 'CAN\'T_CHANGE_PASSWORD';

    @ApiProperty()
    errors: string[];
}

export class ChangePasswordSuccessResponseDto implements ChangePasswordSuccessResponse {
    @ApiProperty()
    code: number;

    @ApiProperty()
    data: UserDto;
}