import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { Cart, ResponseItem, CartProduct, addToCartErrorResponse, addToCartRequest, ErrorMessage } from 'models';
export class AddToCartResponseDto implements Cart {
    @ApiProperty()
    @IsString()
    id?: string;

    @ApiProperty()
    @IsString()
    userId: string;

    @ApiProperty({ type: () => [ResItemDto] })
    @IsArray()
    items: ResItemDto[];
}
class ResItemDto implements ResponseItem {
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


export class AddToCartRequestDto implements addToCartRequest {
    @ApiProperty()
    @IsString()
    productId: string;

    @ApiProperty()
    @IsNumber()
    quantity: number;
}

export class AddToCartErrorResponseDto implements addToCartErrorResponse {
    @ApiProperty({
        default: HttpStatus.BAD_REQUEST,
    })
    code: number;

    @ApiProperty({
        example: ErrorMessage.CANNOT_CREATE_CART,
        examples: [ErrorMessage.CANNOT_CREATE_CART, ErrorMessage.CANNOT_ADD_ITEM_TO_THE_CART, ErrorMessage.CANNOT_INCREMENT_CART_ITEM],
    })
    error: ErrorMessage.CANNOT_CREATE_CART | ErrorMessage.CANNOT_ADD_ITEM_TO_THE_CART | ErrorMessage.CANNOT_INCREMENT_CART_ITEM;

    @ApiProperty()
    errors: string[];
}