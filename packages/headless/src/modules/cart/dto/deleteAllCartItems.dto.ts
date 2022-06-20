import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { Cart, CartProduct, deleteAllCartItemsErrorMessage, ResponseItem, deleteAllCartItemsErrorResponse, deleteAllCartItemsSuccessResponse } from "models";

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

export class deleteAllCartItemsSuccessResponseDto implements deleteAllCartItemsSuccessResponse {
    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CartDto;
}

export class deleteAllCartItemsErrorResponseDto implements deleteAllCartItemsErrorResponse {
    @ApiProperty({
        default: HttpStatus.BAD_REQUEST,
    })
    code: number;

    @ApiProperty({
        example: deleteAllCartItemsErrorMessage.CAN_NOT_REMOVE_ALL_CART_ITEMS,
    })
    error: deleteAllCartItemsErrorMessage;

    @ApiProperty()
    errors: string[];
}