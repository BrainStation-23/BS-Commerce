import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { Cart, CartProduct, updateCartItemErrorMessage, updateCartItemErrorResponse, ResponseItem, updateCartItemRequest, updateCartItemSuccessResponse } from "models";

export class updateCartItemRequestDto implements updateCartItemRequest {
    @ApiProperty()
    @IsOptional()
    @IsString()
    productId?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    quantity?: number;
}

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

export class updateCartItemSuccessResponseDto implements updateCartItemSuccessResponse {
    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CartDto;
}

export class updateCartItemErrorResponseDto implements updateCartItemErrorResponse {
    @ApiProperty({
        default: HttpStatus.BAD_REQUEST,
    })
    code: number;

    @ApiProperty({
        example: updateCartItemErrorMessage.CAN_NOT_UPDATE_CART_ITEM,
        examples: [updateCartItemErrorMessage.CAN_NOT_UPDATE_CART_ITEM, updateCartItemErrorMessage.CAN_NOT_REMOVE_CART_ITEM],
    })
    error: updateCartItemErrorMessage;

    @ApiProperty()
    errors: string[];
}