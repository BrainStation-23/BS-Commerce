import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import {
    GetTagParams,
    GetTagErrorMessages,
    GetTagErrorResponse,
    GetTagSuccessResponse,
} from 'models';
import { TagDto } from './tags.dto';

export class GetTagParamsDto implements GetTagParams {
    @ApiProperty()
    @IsString()
    tagId: string;
}

export class GetTagErrorResponseDto implements GetTagErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({ example: GetTagErrorMessages.CAN_NOT_GET_TAG, })
    @IsString()
    error: GetTagErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class GetTagSuccessResponseDto implements GetTagSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty({ type: () => TagDto })
    @IsObject()
    data: TagDto;
}