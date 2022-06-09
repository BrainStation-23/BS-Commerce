import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsDate, IsInt, IsNotEmpty, IsNotEmptyObject, IsNumber, IsNumberString, IsObject, IsOptional, IsString } from "class-validator";
import {
    ProductInfo,
    ProductMeta,
    ProductPhoto,
    ProductCategory,
    Product,
} from 'models';

export class ProductInfoDto implements ProductInfo {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    shortDescription?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    fullDescription?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    sku: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    oldPrice: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    cost: number;

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
    @IsBoolean()
    isFeatured?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsDate()
    publishDate?: Date;
}

export class ProductMetaDto implements ProductMeta {
    @ApiProperty()
    @IsOptional()
    @IsArray()
    @IsString()
    keywords?: string[];

    @ApiProperty()
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    friendlyPageName: string;
}

export class ProductPhotoDto implements ProductPhoto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    url?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    id?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    alt?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    displayOrder?: number;
}

export class ProductCategoryDto implements ProductCategory {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isFeatured?: boolean;

    @ApiProperty()
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
    @IsString()
    tags?: string[];

    @ApiProperty({ type: [ProductPhotoDto] })
    @IsArray()
    photos?: ProductPhotoDto[];

    @ApiProperty()
    @IsOptional()
    @IsArray()
    @IsString()
    brands?: string[];

    @ApiProperty({ type: [ProductCategoryDto] })
    @IsNotEmptyObject()
    @IsArray()
    categories: ProductCategoryDto[];
}


