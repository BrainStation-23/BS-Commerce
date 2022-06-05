import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional, IsObject } from 'class-validator';

import type { CreateBrandRequest, Info, Meta } from 'models';

export class CreateBrandDto implements CreateBrandRequest{
    @ApiProperty()
    @IsOptional()
    @IsString()
    id?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    info: Info;

    @ApiProperty()
    @IsOptional()
    @IsObject()
    meta: Meta;
}


