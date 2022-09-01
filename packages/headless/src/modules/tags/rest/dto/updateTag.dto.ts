import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { updateTag, updateTagErrorMessages, updateTagErrorResponse, updateTagRequest, updateTagSuccessResponse } from "models";

export class updateTagDto implements updateTag {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    name: string;
}

export class updateTagParamDto {
    @ApiProperty({ type: String })
    @Type(() => String)
    @IsString()
    id: string;
}

export class updateTagRequestDto implements updateTagRequest {
    @ApiProperty({ required: false, type: String })
    @Type(() => String)
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({ required: false, type: Boolean })
    @Type(() => Boolean)
    @IsBoolean()
    @IsOptional()
    isHomePageProductsTag?: boolean;
}

export class updateTagSuccessResponseDto implements updateTagSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @Type(() => updateTagDto)
    @IsObject()
    data: updateTagDto;
}

export class updateTagErrorResponseDto implements updateTagErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: updateTagErrorMessages.CAN_NOT_UPDATE_TAG,
        examples: [updateTagErrorMessages.CAN_NOT_UPDATE_TAG]
    })
    @IsString()
    error: updateTagErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}