import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ProductDto } from './product.dto';
import { Type } from 'class-transformer';
import { ValidateNested as CustomValidator } from 'src/decorators/service.validator';
import {
    UpdateProductRequest,
    UpdateProductErrorResponse,
    UpdateProductErrorMessages,
    UpdateProductSuccessResponse,
    UpdateProductInfo,
    UpdateProductMeta,
    UpdateProductPhoto,
    UpdateProductCategory,
    UpdateProductManufacturer,
    UpdateProductParams,
} from 'models';

export class UpdateProductParamsDto implements UpdateProductParams {
    @ApiProperty()
    @IsString()
    productId: string;
}

export class UpdateProductInfoDto implements UpdateProductInfo {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    shortDescription?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    fullDescription?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    sku?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    price?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    oldPrice?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    cost?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    showOnHomePage?: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    includeInTopMenu?: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    allowToSelectPageSize?: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    published?: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    displayOrder?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    isFeatured?: boolean;
}

export class UpdateProductMetaDto implements UpdateProductMeta {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsArray()
    keywords?: string[];

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    friendlyPageName?: string;
}

export class UpdateProductPhotoDto implements UpdateProductPhoto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    url?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    id?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    alt?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    displayOrder?: number;
}

export class UpdateProductManufacturerDto implements UpdateProductManufacturer {
    @ApiProperty({ required: false })
    @IsString()
    id?: string;

    @ApiProperty({ required: false })
    @IsString()
    name?: string;
}

export class UpdateProductCategoryDto implements UpdateProductCategory {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    id?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    isFeatured?: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    displayOrder?: number
}

export class UpdateProductDto implements UpdateProductRequest {
    @ApiProperty({ type: UpdateProductInfoDto, required: false })
    @IsOptional()
    @CustomValidator(UpdateProductInfoDto)
    info?: UpdateProductInfoDto;

    @ApiProperty({ type: UpdateProductMetaDto, required: false })
    @IsOptional()
    @CustomValidator(UpdateProductMetaDto)
    meta?: UpdateProductMetaDto;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    tags?: [string];

    @ApiProperty({ type: [UpdateProductPhotoDto], required: false })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @CustomValidator(UpdateProductPhotoDto)
    @Type(() => UpdateProductPhotoDto)
    photos?: UpdateProductPhotoDto[];

    @ApiProperty({ required: false })
    @IsOptional()
    @IsArray()
    brands?: [string];

    @ApiProperty({ type: UpdateProductManufacturerDto, required: false })
    @IsOptional()
    @CustomValidator(UpdateProductManufacturerDto)
    manufacture?: UpdateProductManufacturerDto;

    @ApiProperty({ type: [UpdateProductCategoryDto], required: false })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @CustomValidator(UpdateProductCategoryDto)
    @Type(() => UpdateProductCategoryDto)
    categories?: UpdateProductCategoryDto[];
}

export class UpdateProductErrorResponseDto implements UpdateProductErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    @IsNumber()
    code: number;

    @ApiProperty({
        example: UpdateProductErrorMessages.CAN_NOT_UPDATE_PRODUCT,
        examples: [UpdateProductErrorMessages.PRODUCT_SKU_MATCH, UpdateProductErrorMessages.PRODUCT_FRIENDLY_PAGE_NAME_MATCH, UpdateProductErrorMessages.CAN_NOT_UPDATE_PRODUCT]
    })
    @IsString()
    error: UpdateProductErrorMessages;

    @ApiProperty()
    @IsArray()
    errors: string[];
}

export class UpdateProductSuccessResponseDto implements UpdateProductSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: ProductDto;
}