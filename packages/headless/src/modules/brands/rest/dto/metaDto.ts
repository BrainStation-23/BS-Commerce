import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { BrandInfo, BrandMeta } from '@bs-commerce/models';

export class MetaDto implements BrandMeta{
    @ApiProperty()
    @IsOptional()
    keywords?: string;

    @ApiProperty()
    @IsOptional()
    description?: string;

    @ApiProperty()
    @IsOptional()
    title?: string;

    @ApiProperty()
    @IsOptional()
    SEFN?: string;
}