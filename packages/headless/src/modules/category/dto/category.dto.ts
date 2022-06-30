import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { Ancestor, Category, Meta, Photo } from "models";


export class MetaDto implements Meta {
    @ApiProperty()
    @IsOptional()
    @IsArray()
    keywords?: [string];

    @ApiProperty()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    SEFN?: string;
}

export class PhotoDto implements Photo{
    @ApiProperty()
    @IsOptional()
    @IsString()
    url: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    alt: string;
}

export class AncestorDto implements Ancestor {
    @ApiProperty()
    @IsNumber()
    name: string;

    @ApiProperty()
    @IsArray()
    slug: string;

    @ApiProperty()
    @IsNumber()
    level: number;
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

    @ApiProperty({ type: PhotoDto })
    @Type(() => PhotoDto)
    @IsOptional()
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

    @ApiProperty({type: [AncestorDto]})
    @Type(()=>AncestorDto)
    @IsArray()
    ancestors: AncestorDto[];

    @ApiProperty({ type: MetaDto })
    @Type(()=>MetaDto)
    @IsObject()
    meta: MetaDto;
}