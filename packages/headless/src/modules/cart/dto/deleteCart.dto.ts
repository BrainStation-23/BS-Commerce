import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { Cart, CartProduct, deleteCartErrorMessage, deleteCartErrorResponse, deleteCartRequest, deleteCartSuccessResponse, ResponseItem } from "models";

export class deleteCartRequestDto implements deleteCartRequest{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    cartId: string;  
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

export class deleteCartSuccessResponseDto implements deleteCartSuccessResponse {
    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: CartDto;
}

export class deleteCartErrorResponseDto implements deleteCartErrorResponse {
    @ApiProperty({
        default: HttpStatus.BAD_REQUEST,
    })
    code: number;

    @ApiProperty({
        example: deleteCartErrorMessage.CAN_NOT_REMOVE_CART,
    })
    error: deleteCartErrorMessage;

    @ApiProperty()
    errors: string[];
}