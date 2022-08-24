import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import {
    IsArray,
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsObject,
    IsOptional,
    IsString
} from "class-validator";
import {
    CreateHomePageProductsTagsErrorMessages,
    CreateHomePageProductsTagsErrorResponse,
    CreateHomePageProductsTagsSuccessResponse,
    HomePageProductsTags,
    HomePageProductsTagsRequest
} from "models";

export class HomePageProductsTagsDto implements HomePageProductsTags {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    name: string;
}

export class HomePageProductsTagsRequestDto implements HomePageProductsTagsRequest {
    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isHomePageProductsTags: boolean;
}

export class CreateHomePageProductsTagsSuccessResponseDto implements CreateHomePageProductsTagsSuccessResponse {
    @ApiProperty({ default: HttpStatus.CREATED })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: HomePageProductsTagsDto;
}

export class CreateHomePageProductsTagsErrorResponseDto implements CreateHomePageProductsTagsErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: CreateHomePageProductsTagsErrorMessages.CAN_NOT_CREATE_HOME_PAGE_PRODUCT_TAG,
        examples: [CreateHomePageProductsTagsErrorMessages.CAN_NOT_CREATE_HOME_PAGE_PRODUCT_TAG, CreateHomePageProductsTagsErrorMessages.TAG_NAME_EXISTS]
    })
    @IsString()
    error: CreateHomePageProductsTagsErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}