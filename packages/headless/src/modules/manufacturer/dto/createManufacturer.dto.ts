import { CreateManufacturerRequest } from './../../../../../models/src/manufacturer/createManufacturer';
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { ManufacturerSeo } from '../../../../../models/src/manufacturer/manufacturerSeo';


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

export class CreateManufacturerDto implements CreateManufacturerRequest {
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

