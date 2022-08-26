import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { deleteAllCartItems, deleteAllCartItemsErrorMessage, deleteAllCartItemsErrorResponse, deleteAllCartItemsSuccessResponse } from "models";

class deleteAllCartItemsDto implements deleteAllCartItems {
    @ApiProperty()
    @IsString()
    id?: string;

    @ApiProperty()
    @IsString()
    userId?: string;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    items?: [];
}

export class deleteAllCartItemsSuccessResponseDto implements deleteAllCartItemsSuccessResponse {
    @ApiProperty()
    @IsNumber()
    code: number;

    @ApiProperty()
    @IsObject()
    data: deleteAllCartItemsDto;
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