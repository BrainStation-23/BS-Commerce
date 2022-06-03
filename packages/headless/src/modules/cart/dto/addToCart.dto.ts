import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import type { Cart, Item, CartProduct, addToCartErrorResponse, addToCartRequest } from 'models';

export class AddToCartResponseDto implements Cart {
    @ApiProperty()
    @IsString()
    id?: string;

    @ApiProperty()
    @IsString()
    userId: string;

    @ApiProperty()
    @IsArray()
    items: Item[];
}

export class ItemDto implements Item {
    @ApiProperty()
    @IsOptional()
    @IsObject()
    product?: CartProduct;

    @ApiProperty()
    @IsString()
    productId: string;

    @ApiProperty()
    @IsNumber()
    quantity: number;
}

export class AddToCartErrorResponseDto implements addToCartErrorResponse {
    @ApiProperty()
    code: number;

    @ApiProperty()
    error: 'Can\'t create cart' | 'Can\'t add item to the cart' | 'Can\'t increment cart item';;

    @ApiProperty()
    errors: string[];
}

export class AddToCartRequestDto implements addToCartRequest{
    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    item: Item;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userId: string;
}