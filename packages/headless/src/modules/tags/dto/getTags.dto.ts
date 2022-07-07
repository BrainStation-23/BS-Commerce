import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject } from 'class-validator';
import { GetTagsErrorMessages, GetTagsErrorResponse, GetTagsSuccessResponse } from 'models';
import { TagsDto } from './tags.dto';

export class GetTagsErrorResponseDto implements GetTagsErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: GetTagsErrorMessages.NO_TAGS_FOUND
    })
    error: GetTagsErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class GetTagsSuccessResponseDto implements GetTagsSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: [TagsDto];
}