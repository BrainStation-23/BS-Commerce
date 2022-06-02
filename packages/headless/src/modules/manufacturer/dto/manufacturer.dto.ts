import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { regexConfig } from "config/regex";
import { Manufacturer, SEO } from "src/entity/manufacturer";

export class UpdatedManufacturer {
    name?: string;
    description?: string;
    picture?: string;
    isPublished?: boolean;
    displayOrder?: number;
    seo?: {
        metaKeyword?: string;
        metaDescription?: string;
        metaTitle?: string;
        SEFN?: string;
    }
}

export class ManufacturerSeoDto extends SEO {
    @ApiProperty()
    @IsString()
    @IsOptional()
    metaKeyword?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    metaDescription?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    metaTitle?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    SEFN?: string;
}

export class CreateManufacturerDto extends Manufacturer {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    picture?: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    isPublished?: boolean;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    displayOrder?: number;

    @ApiProperty()
    @IsOptional()
    @ValidateNested({ each: true })
    @IsObject()
    seo?: ManufacturerSeoDto
}

