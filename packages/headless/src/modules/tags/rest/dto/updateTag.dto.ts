import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import {
    UpdateTagRequest,
    UpdateTagErrorMessages,
    UpdateTagErrorResponse,
    UpdateTagSuccessResponse,
    UpdateTagParams,
} from 'models';
import { TagDto } from './tags.dto';

export class UpdateTagParamDto implements UpdateTagParams {
    @ApiProperty()
    @IsString()
    tagId: string;
}

export class UpdateTagRequestDto implements UpdateTagRequest {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    isHomePageProductsTag?: boolean;
}

export class UpdateTagSuccessResponseDto implements UpdateTagSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty({ type: () => TagDto })
    @IsObject()
    data: TagDto;
}

export class UpdateTagErrorResponseDto implements UpdateTagErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: UpdateTagErrorMessages.CAN_NOT_UPDATE_TAG,
        examples: [UpdateTagErrorMessages.CAN_NOT_UPDATE_TAG, UpdateTagErrorMessages.TAG_NAME_EXISTS]
    })
    @IsString()
    error: UpdateTagErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}