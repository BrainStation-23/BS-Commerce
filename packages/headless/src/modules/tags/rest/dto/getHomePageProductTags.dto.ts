import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsArray,
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsObject,
    IsString
} from "class-validator";
import {
    GetHomePageProductsTags,
    GetHomePageProductsTagsErrorMessages,
    GetHomePageProductsTagsErrorResponse,
    GetHomePageProductsTagsSuccessResponse
} from "models";

export class GetHomePageProductsTagsDto implements GetHomePageProductsTags {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    name: string;
}

export class GetHomePageProductsTagsSuccessResponseDto implements GetHomePageProductsTagsSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @Type(() => GetHomePageProductsTagsDto)
    @IsObject()
    data: GetHomePageProductsTagsDto;
}

export class GetHomePageProductsTagsErrorResponseDto implements GetHomePageProductsTagsErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: GetHomePageProductsTagsErrorMessages.NO_TAGS_FOUND,
        examples: [GetHomePageProductsTagsErrorMessages.NO_TAGS_FOUND]
    })
    @IsString()
    error: GetHomePageProductsTagsErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}