import { OrderProductInfoDto } from './order.product.info.dto';
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsObject, IsOptional } from "class-validator";
import { OrderProductData } from "models";
import { OrderProductPhotoDto } from './orderProductPhoto.dto';

export class OrderProductDto implements OrderProductData{
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty({ type: OrderProductInfoDto })
    @Type(() => OrderProductInfoDto)
    @IsObject()
    info: OrderProductInfoDto;

    @ApiProperty({ type: OrderProductPhotoDto })
    @Type(() => OrderProductPhotoDto)
    @IsOptional()
    @IsObject()
    photos?: OrderProductPhotoDto[];
}