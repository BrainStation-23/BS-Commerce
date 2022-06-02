import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { Cart, Item } from "src/entity/cart";

export class CartDto extends Cart{
    @ApiProperty()
    @IsOptional()
    @IsString()
    id?: string;

    @ApiProperty()
    @IsString()
    userId: string;

    @ApiProperty()
    @IsArray()
    items: Item[];
}

export class ItemDto extends Item {
    // @ApiProperty()
    // @IsOptional()
    // @IsObject()
    // product?: Product;

    @ApiProperty()
    @IsString()
    productId: string;

    @ApiProperty()
    @IsNumber()
    quantity: number;
  }