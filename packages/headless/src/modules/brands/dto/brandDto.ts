import { IsNotEmpty, IsNotEmptyObject, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Brand } from 'models';
import { InfoDto } from './infoDto';
import { MetaDto } from './metaDto';

export class BrandDto implements Brand{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    info: InfoDto;

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    meta: MetaDto;

}