import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import {
    CreateUserErrorResponse,
    CreateUserRequest,
    CreateUserSuccessResponse,
    SignUpErrorMessages
} from 'models';
import { UserDto } from 'src/modules/user/dto/user.dto';

export class CreateUserDto implements CreateUserRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6, {
        message: 'Password is too short. Minimal length is $constraint1 characters',
    })
    password: string;
}

export class CreateUserErrorResponseDto implements CreateUserErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty({
        example: SignUpErrorMessages.CAN_NOT_CREATE_USER,
        examples: [SignUpErrorMessages.USER_ALREADY_EXITS, SignUpErrorMessages.CAN_NOT_CREATE_USER]
    })
    error: SignUpErrorMessages.USER_ALREADY_EXITS | SignUpErrorMessages.CAN_NOT_CREATE_USER;

    @ApiProperty()
    errors: string[];
}

export class CreateUserSuccessResponseDto implements CreateUserSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: UserDto;
}