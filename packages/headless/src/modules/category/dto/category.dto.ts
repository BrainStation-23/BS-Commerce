import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsNumber, IsObject, IsString } from "class-validator";
import { Ancestor, Category, Meta, Photo } from "models";

export class AncestorDto implements Ancestor {
    @ApiProperty()
    @IsNumber()
    name: string;

    @ApiProperty()
    @IsString()
    slug: string;

    @ApiProperty()
    @IsNumber()
    level: number;
}

export class MetaDto implements Meta {
    @ApiProperty()
    @IsArray()
    keywords?: [string];

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    SEFN: string;
}

export class PhotoDto implements Photo {
    @ApiProperty()
    @IsString()
    url: string;

    @ApiProperty()
    @IsString()
    alt: string;
}

export class CategoryDto implements Category {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    slug: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsObject()
    photo: PhotoDto;

    @ApiProperty()
    @IsBoolean()
    showOnHomePage: boolean;

    @ApiProperty()
    @IsBoolean()
    includeInTopMenu: boolean;

    @ApiProperty()
    @IsBoolean()
    allowToSelectPageSize: boolean;

    @ApiProperty()
    @IsBoolean()
    published: boolean;

    @ApiProperty()
    @IsNumber()
    displayOrder: number;

    @ApiProperty()
    @IsString()
    rootPath: string;

    @ApiProperty({ type: [AncestorDto] })
    @Type(() => AncestorDto)
    @IsArray()
    ancestors: AncestorDto[];

    @ApiProperty({ type: MetaDto })
    @Type(()=>MetaDto)
    @IsObject()
    meta: MetaDto;
}