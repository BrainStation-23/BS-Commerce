import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsNumber } from "class-validator";
import { OrderProductPhoto } from "models";

export class OrderProductPhotoDto implements OrderProductPhoto {
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    url?: string;

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