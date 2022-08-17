import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNumber, IsBoolean, IsDate } from "class-validator";
import { OrderProductInfo } from "models";

export class OrderProductInfoDto implements OrderProductInfo{
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    shortDescription?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    fullDescription?: string;

    @ApiProperty()
    @IsString()
    sku: string;
    
    @ApiProperty()
    @IsNumber()
    oldPrice: number;
    
    @ApiProperty()
    @IsNumber()
    price: number;

    @ApiProperty()
    @IsNumber()
    cost: number;

    @ApiProperty()
    @IsNumber()
    quantity: number;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    showOnHomePage?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    includeInTopMenu?: boolean;

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

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isFeatured?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsDate()
    publishDate?: Date;
    
}