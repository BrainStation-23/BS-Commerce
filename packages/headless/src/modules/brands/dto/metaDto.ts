import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Info, Meta } from 'models';

export class MetaDto implements Meta{
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