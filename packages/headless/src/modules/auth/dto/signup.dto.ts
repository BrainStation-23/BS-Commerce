import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { CreateUserErrorResponse, CreateUserRequest, CreateUserSuccessResponse } from "models";
import { UserDto } from "src/modules/user/dto/user.dto";

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
    @ApiProperty()
    code: number;

    @ApiProperty()
    error: 'USER_ALREADY_EXITS' | 'CAN\'T_CREATE_USER';

    @ApiProperty()
    errors: string[];
}

export class CreateUserSuccessResponseDto implements CreateUserSuccessResponse {
    @ApiProperty()
    code: number;

    @ApiProperty()
    data: UserDto;
}