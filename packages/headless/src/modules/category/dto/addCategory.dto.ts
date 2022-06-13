import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { addCategoryErrorMessage, addCategoryErrorResponse, addCategoryRequest, addCategorySuccessResponse, Ancestor, Category, Meta } from "models";

export class addCategoryRequestDto implements addCategoryRequest {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    parentSlug: string;
}

export class AncestorDto implements Ancestor {
    @ApiProperty()
    @IsNumber()
    name: string;

    @ApiProperty()
    @IsArray()
    slug: string;

    @ApiProperty()
    @IsNumber()
    level: number;
}

export class MetaDto implements Meta {
    @ApiProperty()
    @IsArray()
    keywords?: [string];

    @ApiProperty()
    @IsArray()
    description: string;

    @ApiProperty()
    @IsArray()
    title: string;

    @ApiProperty()
    @IsArray()
    SEFN: string;
}

export class CategoryDto implements Category {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    slug: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    imageId: string;

    @ApiProperty()
    @IsBoolean()
    showOnHomePage: boolean;

    @ApiProperty()
    @IsBoolean()
    includeInTopMenu: boolean;

    @ApiProperty()
    @IsBoolean()
    allowToSelectPageSize: boolean;

    @ApiProperty()
    @IsBoolean()
    published: boolean;

    @ApiProperty()
    @IsNumber()
    displayOrder: number;

    @ApiProperty()
    @IsString()
    rootPath: string;

    @ApiProperty()
    @IsArray()
    ancestors: AncestorDto[];

    @ApiProperty()
    @IsObject()
    meta: MetaDto;
}

export class addCategorySuccessResponseDto implements addCategorySuccessResponse {
    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CategoryDto;
}

export class addCategoryErrorResponseDto implements addCategoryErrorResponse {
    @ApiProperty({
        default: HttpStatus.INTERNAL_SERVER_ERROR,
    })
    code: number;

    @ApiProperty({
        example: addCategoryErrorMessage.CAN_NOT_ADD_CATEGORY,
        examples: [addCategoryErrorMessage.CAN_NOT_ADD_CATEGORY],
    })
    error: addCategoryErrorMessage;

    @ApiProperty()
    errors: string[];
}