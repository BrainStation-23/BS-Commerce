import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { Cart, ResponseItem, CartProduct, addToCartErrorResponse, addToCartRequest, addToCartSuccessResponse, addToCartErrorMessage } from 'models';
class ResponseItemDto implements ResponseItem{
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
class CartDto implements Cart {
    @ApiProperty()
    @IsString()
    id?: string;

    @ApiProperty()
    @IsString()
    userId?: string;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    items?:ResponseItemDto[];
}
export class AddToCartSuccessResponseDto implements addToCartSuccessResponse {
    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CartDto;
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
        default: HttpStatus.INTERNAL_SERVER_ERROR,
    })
    code: number;

    @ApiProperty({
        example: addToCartErrorMessage.CANNOT_CREATE_CART,
        examples: [addToCartErrorMessage.CANNOT_CREATE_CART, addToCartErrorMessage.CANNOT_ADD_ITEM_TO_THE_CART, addToCartErrorMessage.CANNOT_INCREMENT_CART_ITEM],
    })
    error: addToCartErrorMessage;

    @ApiProperty()
    errors: string[];
}