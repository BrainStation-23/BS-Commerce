import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { ManufacturerSeo } from "../../../../../models/src/manufacturer/manufacturerSeo";

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