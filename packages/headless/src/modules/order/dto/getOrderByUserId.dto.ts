import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString, MaxLength } from 'class-validator';
import { UserOrderList, ProductDataWithPhoto } from 'models';
import { ProductPhotoDto } from 'src/modules/product/dto/product.dto';

export class OrderProductDto implements ProductDataWithPhoto{
    @ApiProperty({ example: '25aaa4fa-69d0-4bc5-85a0-4f9c6828702f' })
    @IsString()
    productId: string;
  
    @ApiProperty({ example: 'test' })
    @MaxLength(100)
    @IsString()
    name: string;
    
    @ApiProperty({ type: [ProductPhotoDto] })
    @IsArray()
    photos: ProductPhotoDto[];

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
}
