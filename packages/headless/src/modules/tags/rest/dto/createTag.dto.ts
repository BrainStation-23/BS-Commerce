import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, } from 'class-validator';
import { HttpStatus } from '@nestjs/common';
import { TagDto } from './tags.dto';
import {
    CreateTagRequestBody,
    CreateTagErrorResponse,
    CreateTagErrorMessages,
    CreateTagSuccessResponse,
} from '@bs-commerce/models';

export class CreateTagRequestBodyDto implements CreateTagRequestBody {
    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ required: false, default: false })
    @IsOptional()
    @IsBoolean()
    isHomePageProductsTag?: boolean;
}

export class CreateTagErrorResponseDto implements CreateTagErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: CreateTagErrorMessages.CAN_NOT_CREATE_TAG,
        examples: [CreateTagErrorMessages.TAG_NAME_EXISTS, CreateTagErrorMessages.CAN_NOT_CREATE_TAG,]
    })
    error: CreateTagErrorMessages;

    @ApiProperty()
    errors: string[];
}

export class CreateTagSuccessResponseDto implements CreateTagSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty({ type: TagDto })
    data: TagDto;
}