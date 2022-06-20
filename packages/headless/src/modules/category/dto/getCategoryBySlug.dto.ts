import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsString, ValidateNested } from "class-validator";
import { Ancestor, Category, getCategoryBySlugErrorMessage, getCategoryBySlugErrorResponse, getCategoryBySlugRequest, getCategoryBySlugSuccessResponse, Meta } from "models";
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';

export class getCategoryBySlugRequestDto implements getCategoryBySlugRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    slug: string;
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

    @ApiProperty({type: AncestorDto})
    @CustomValidator(AncestorDto)
    @ValidateNested()
    @IsArray()
    ancestors: AncestorDto[];

    @ApiProperty({type: MetaDto})
    @CustomValidator(MetaDto)
    @ValidateNested()
    @IsObject()
    meta: MetaDto;
}

export class getCategoryBySlugSuccessResponseDto implements getCategoryBySlugSuccessResponse {
    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty({type: CategoryDto})
    @CustomValidator(CategoryDto)
    @ValidateNested()
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