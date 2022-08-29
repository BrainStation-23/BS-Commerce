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
    createHomePageTag,
    createHomePageTagErrorMessages,
    createHomePageTagErrorResponse,
    createHomePageTagRequest,
    createHomePageTagSuccessResponse
} from "models";


export class createHomePageTagDto implements createHomePageTag {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    name: string;
}

export class createHomePageTagRequesttDto implements createHomePageTagRequest {
    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isHomePageProductsTags: boolean;
}

export class createHomePageTagSuccessResponseDto implements createHomePageTagSuccessResponse {
    @ApiProperty({ default: HttpStatus.CREATED })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: createHomePageTagDto;
}

export class createHomePageTagErrorResponseDto implements createHomePageTagErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: createHomePageTagErrorMessages.CAN_NOT_CREATE_HOME_PAGE_PRODUCT_TAG,
        examples: [createHomePageTagErrorMessages.CAN_NOT_CREATE_HOME_PAGE_PRODUCT_TAG, createHomePageTagErrorMessages.TAG_NAME_EXISTS]
    })
    @IsString()
    error: createHomePageTagErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}