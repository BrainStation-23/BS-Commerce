import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsObject, IsString, ValidateNested } from "class-validator";
import { getCategoryListAncestor, getCategoryListCategory, getCategoryListErrorMessage, getCategoryListErrorResponse, getCategoryListSuccessResponse } from "models";
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';

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

export class CategoryDto implements getCategoryListCategory {
    @ApiProperty()
    @IsString()
    slug: string;

    @ApiProperty({ type : AncestorDto })
    @ValidateNested()
    @CustomValidator(AncestorDto)
    @IsArray()
    ancestors: AncestorDto[];
}

export class getCategoryListSuccessResponseDto implements getCategoryListSuccessResponse {
    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty({ type: CategoryDto })
    @ValidateNested()
    @CustomValidator(CategoryDto)
    @IsObject()
    data: CategoryDto[];
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