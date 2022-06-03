import { ApiProperty } from "@nestjs/swagger";
import { GetUserErrorResponse, GetUserSuccessResponse } from "models";
import { UserDto } from "./user.dto";

export class GetUserErrorResponseDto implements GetUserErrorResponse {
    @ApiProperty()
    code: number;

    @ApiProperty()
    error: 'CANT\'T_GET_USER';

    @ApiProperty()
    errors: string[];
}

export class GetUserSuccessResponseDto implements GetUserSuccessResponse {
    @ApiProperty()
    code: number;

    @ApiProperty()
    data: UserDto;
}