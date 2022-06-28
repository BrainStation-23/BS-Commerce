import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { addCategoryErrorMessage, addCategoryErrorResponse, addCategoryRequest, addCategorySuccessResponse, Ancestor, Category, Meta, Photo } from "models";

export class MetaDto implements Meta {
    @ApiProperty()
    @ValidateNested()
    @IsArray()
    keywords?: [string];

    @ApiProperty()
    @ValidateNested()
    @IsString()
    description?: string;

    @ApiProperty()
    @ValidateNested()
    @IsString()
    title?: string;

    @ApiProperty()
    @ValidateNested()
    @IsString()
    SEFN?: string;
}

export class PhotoDto implements Photo{
    @ApiProperty()
    @IsOptional()
    @IsString()
    url: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    alt: string;
}
export class addCategoryRequestDto implements addCategoryRequest {

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    parentSlug?: string;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    photo: PhotoDto;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    showOnHomePage?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    includeInTopMenu?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    allowToSelectPageSize?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    published?: boolean;


    @ApiProperty()
    @IsOptional()
    @IsNumber()
    displayOrder?: number;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    meta?: MetaDto;
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