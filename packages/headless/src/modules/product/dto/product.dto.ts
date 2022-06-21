import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import {
    ProductInfo,
    ProductMeta,
    ProductPhoto,
    ProductCategory,
    Product,
} from 'models';

export class ProductInfoDto implements ProductInfo {
    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    shortDescription?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    fullDescription?: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    sku: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsNumber()
    oldPrice: number;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsNumber()
    cost: number;

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

export class ProductMetaDto implements ProductMeta {
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

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    friendlyPageName: string;
}

export class ProductPhotoDto implements ProductPhoto {
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

export class ProductCategoryDto implements ProductCategory {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    isFeatured?: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    displayOrder?: number
}

export class ProductDto implements Product {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ type: ProductInfoDto })
    @IsNotEmptyObject()
    @IsObject()
    info: ProductInfoDto;

    @ApiProperty({ type: ProductMetaDto })
    @IsNotEmptyObject()
    @IsObject()
    meta: ProductMetaDto;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    tags?: string[];

    @ApiProperty({ type: [ProductPhotoDto] })
    @IsArray()
    photos?: ProductPhotoDto[];

    @ApiProperty()
    @IsOptional()
    @IsArray()
    brands?: string[];

    @ApiProperty({ type: [ProductCategoryDto] })
    @IsNotEmptyObject()
    @IsArray()
    categories: ProductCategoryDto[];
}