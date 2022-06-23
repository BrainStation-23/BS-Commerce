import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { getCategoryListAncestor, NestedCategoryList, getCategoryListErrorMessage, getCategoryListErrorResponse, getCategoryListSuccessResponse } from "models";

export class AncestorDto implements getCategoryListAncestor {
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

export class subCategoryListDto {
    @ApiProperty()
    @IsString()
    name: string;
    
    @ApiProperty()
    @IsString()
    slug: string;

    @ApiProperty()
    @IsString()
    imageId: string;

    @ApiProperty({ type: [AncestorDto] })
    @IsOptional()
    @IsArray()
    ancestors: AncestorDto[];

    @ApiProperty({ type: [Object] })
    @IsOptional()
    @IsArray()
    subCategories?: any[];
}

export class NestedCategoryListDto implements NestedCategoryList {

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    slug: string;

    @ApiProperty()
    @IsString()
    imageId: string;

    @ApiProperty({ type: [AncestorDto] })
    @IsArray()
    ancestors: AncestorDto[];

    @ApiProperty({ type: [subCategoryListDto] })
    @IsOptional()
    @Type(() => subCategoryListDto)
    @IsArray()
    subCategories?: subCategoryListDto[];
}
export class CategoryListDto {
    @ApiProperty({ type: [NestedCategoryListDto] })
    @Type(() => NestedCategoryListDto)
    @IsArray()
    categories: NestedCategoryListDto[];
}

export class getCategoryListSuccessResponseDto implements getCategoryListSuccessResponse {
    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty({ type: CategoryListDto })
    @IsObject()
    data: CategoryListDto;
}

export class getCategoryListErrorResponseDto implements getCategoryListErrorResponse {
    @ApiProperty({
        default: HttpStatus.BAD_REQUEST,
    })
    code: number;

    @ApiProperty({
        example: getCategoryListErrorMessage.CAN_NOT_GET_CATEGORY_LIST,
        examples: [getCategoryListErrorMessage.CAN_NOT_GET_CATEGORY_LIST],
    })
    error: getCategoryListErrorMessage;

    @ApiProperty()
    errors: string[];
}