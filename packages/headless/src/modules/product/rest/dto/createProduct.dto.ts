import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import {
    ProductCategoryDto,
    ProductDto,
    ProductInfoDto,
    ProductManufacturerDto,
    ProductMetaDto,
    ProductPhotoDto,
} from './product.dto';
import {
    CreateProductRequest,
    CreateProductErrorResponse,
    CreateProductErrorMessages,
    CreateProductSuccessResponse,
} from 'bs-commerce-models';
import { Type } from 'class-transformer';
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';

export class CreateProductDto implements CreateProductRequest {
    @ApiProperty({ type: ProductInfoDto })
    @CustomValidator(ProductInfoDto)
    @IsObject()
    info: ProductInfoDto;

    @ApiProperty({ type: ProductMetaDto })
    @IsObject()
    @CustomValidator(ProductMetaDto)
    meta: ProductMetaDto;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsArray()
    tags?: [string];

    @ApiProperty({ type: [ProductPhotoDto], required: false })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @CustomValidator(ProductPhotoDto)
    @Type(() => ProductPhotoDto)
    photos?: ProductPhotoDto[];

    @ApiProperty({ required: false })
    @IsOptional()
    @IsArray()
    brands?: [string];

    @ApiProperty({ type: ProductManufacturerDto })
    @IsObject()
    @CustomValidator(ProductManufacturerDto)
    manufacturer: ProductManufacturerDto;

    @ApiProperty({ type: [ProductCategoryDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @CustomValidator(ProductCategoryDto)
    @Type(() => ProductCategoryDto)
    categories: ProductCategoryDto[];
}

export class CreateProductErrorResponseDto implements CreateProductErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: CreateProductErrorMessages.CAN_NOT_CREATE_NEW_PRODUCT,
        examples: [CreateProductErrorMessages.PRODUCT_SKU_MATCH, CreateProductErrorMessages.PRODUCT_FRIENDLY_PAGE_NAME_MATCH, CreateProductErrorMessages.CAN_NOT_CREATE_NEW_PRODUCT]
    })
    @IsString()
    error: CreateProductErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class CreateProductSuccessResponseDto implements CreateProductSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: ProductDto;
}
