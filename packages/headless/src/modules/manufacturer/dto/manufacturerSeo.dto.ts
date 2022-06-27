import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MinLength } from "class-validator";
import type { ManufacturerSeo } from "models";

export class ManufacturerSeoDto implements ManufacturerSeo {
    @ApiProperty({ required: false})
    @IsString()
    @IsOptional()
    @MinLength(3)
    metaKeyword?: string;

    @ApiProperty({ required: false})
    @IsString()
    @IsOptional()
    metaDescription?: string;

    @ApiProperty({ required: false})
    @IsString()
    @IsOptional()
    metaTitle?: string;

    @ApiProperty({ required: false})
    @IsString()
    @IsOptional()
    SEFN?: string;
}