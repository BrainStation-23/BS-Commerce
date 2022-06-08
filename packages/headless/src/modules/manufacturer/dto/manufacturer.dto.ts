import { ManufacturerSeoDto } from './manufacturerSeo.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import type { Manufacturer } from "models";

export class ManufacturerDto implements Manufacturer {
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