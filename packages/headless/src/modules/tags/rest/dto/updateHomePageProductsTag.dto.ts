import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { UpdateHomePageProductsTag, UpdateHomePageProductsTagErrorMessages, UpdateHomePageProductsTagErrorResponse, UpdateHomePageProductsTagRequest, UpdateHomePageProductsTagSuccessResponse } from "models";

export class UpdateHomePageProductsTagDto implements UpdateHomePageProductsTag {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    name: string;
}

export class HomePageProductsTagParamDto {
    @ApiProperty({ type: String })
    @Type(() => String)
    @IsString()
    id: string;
}

export class UpdateHomePageProductsTagRequestDto implements UpdateHomePageProductsTagRequest {
    @ApiProperty({ required: false, type: String })
    @Type(() => String)
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({ required: false, type: Boolean })
    @Type(() => Boolean)
    @IsBoolean()
    @IsOptional()
    isHomePageProductsTags?: boolean;
}

export class UpdateHomePageProductsTagSuccessResponseDto implements UpdateHomePageProductsTagSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @Type(() => UpdateHomePageProductsTagDto)
    @IsObject()
    data: UpdateHomePageProductsTagDto;
}

export class UpdateHomePageProductsTagErrorResponseDto implements UpdateHomePageProductsTagErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: UpdateHomePageProductsTagErrorMessages.CAN_NOT_UPDATE_HOME_PAGE_PRODUCTS_TAG,
        examples: [UpdateHomePageProductsTagErrorMessages.CAN_NOT_UPDATE_HOME_PAGE_PRODUCTS_TAG]
    })
    @IsString()
    error: UpdateHomePageProductsTagErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}