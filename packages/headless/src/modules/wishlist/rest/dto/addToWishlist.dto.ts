import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min } from 'class-validator';
import { WishlistDto } from './wishlist.dto';
import {
    addToWishlistErrorResponse,
    addToWishlistRequest,
    addToWishlistSuccessResponse,
    addToWishlistErrorMessage
} from 'bs-commerce-models';

export class AddToWishlistRequestDto implements addToWishlistRequest {
    @ApiProperty()
    @IsString()
    productId: string;

    @ApiProperty({ type: () => Number, default: 1 })
    @IsNumber()
    @Min(1)
    quantity: number;
}

export class AddToWishlistSuccessResponseDto implements addToWishlistSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty({ type: WishlistDto })
    data: WishlistDto;
}

export class AddToWishlistErrorResponseDto implements addToWishlistErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty({
        example: addToWishlistErrorMessage.CAN_NOT_CREATE_WISHLIST,
        examples: [addToWishlistErrorMessage.CAN_NOT_CREATE_WISHLIST, addToWishlistErrorMessage.CAN_NOT_ADD_ITEM_TO_THE_WISHLIST, addToWishlistErrorMessage.CAN_NOT_INCREMENT_WISHLIST_ITEM],
    })
    error: addToWishlistErrorMessage;

    @ApiProperty()
    errors: string[];
}