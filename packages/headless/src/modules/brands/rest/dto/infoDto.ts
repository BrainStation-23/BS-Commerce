import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsArray,
  IsBoolean,
} from 'class-validator';
import { BrandInfo } from '@bs-commerce/models';

export class InfoDto implements BrandInfo {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  allowToSelectPageSize?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  displayOrder?: number;

  @ApiProperty({
    example: [1, 2],
  })
  @IsOptional()
  @IsArray()
  pageSizeOptions?: number[];
}
