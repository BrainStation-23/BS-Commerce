import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsNumber, MaxLength, IsArray } from "class-validator";
import { IOrderProduct, IOrderProductPhoto } from "models";

export class OrderProductPhotoDto implements IOrderProductPhoto {
    @ApiProperty({ required: false })
    @IsString()
    url: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    id?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    alt?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    displayOrder?: number;
}

export class OrderProductDto implements IOrderProduct {
    @ApiProperty({ example: '052eeb8f-6a08-438d-8799-2fb0bb8d7d98' })
    @IsString()
    productId: string;
  
    @ApiProperty({ example: 'test' })
    @MaxLength(100)
    @IsString()
    name: string;
  
    @ApiProperty({ example: 100 })
    @IsNumber()
    price: number;
    
    @ApiProperty({ example: 2 })
    @IsNumber()
    quantity: number;
  
    @ApiProperty({ example: 'string' })
    @IsString()
    @MaxLength(100)
    sku: string;

    @ApiProperty({ type: [OrderProductPhotoDto] })
    @IsOptional()
    @IsArray()
    photos?: OrderProductPhotoDto[];

    @ApiProperty({ example: 200 })
    @IsNumber()
    totalPrice: number;
  }