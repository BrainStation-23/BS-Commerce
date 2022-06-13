import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import type { ManufacturerSeo } from "models";

export class ManufacturerSeoDto implements ManufacturerSeo {
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