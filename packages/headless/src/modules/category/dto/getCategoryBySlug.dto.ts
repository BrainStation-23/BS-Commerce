import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";
import { getCategoryBySlugErrorMessage, getCategoryBySlugErrorResponse, getCategoryBySlugRequest, getCategoryBySlugSuccessResponse } from "models";
import { CategoryDto } from "./category.dto";

export class getCategoryBySlugRequestDto implements getCategoryBySlugRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    slug: string;
}
export class getCategoryBySlugSuccessResponseDto implements getCategoryBySlugSuccessResponse {
    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty({ type: CategoryDto })
    @IsObject()
    data: CategoryDto;
}

export class getCategoryBySlugErrorResponseDto implements getCategoryBySlugErrorResponse {
    @ApiProperty({
        default: HttpStatus.BAD_REQUEST,
    })
    code: number;

    @ApiProperty({
        example: getCategoryBySlugErrorMessage.CAN_NOT_GET_CATEGORY_BY_SLUG,
        examples: [getCategoryBySlugErrorMessage.CAN_NOT_GET_CATEGORY_BY_SLUG],
    })
    error: getCategoryBySlugErrorMessage;

    @ApiProperty()
    errors: string[];
}