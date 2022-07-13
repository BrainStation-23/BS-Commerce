import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { WishlistDto } from './wishlist.dto';
import {
    updateWishlistItemErrorResponse,
    updateWishlistItemRequestBody,
    updateWishlistItemSuccessResponse,
    updateWishlistItemErrorMessage
} from 'models';

export class updateWishlistItemRequestBodyDto implements updateWishlistItemRequestBody {
    @ApiProperty()
    @IsString()
    productId: string;

    @ApiProperty({ type: () => Number })
    @IsNumber()
    quantity: number;
}

export class updateWishlistItemSuccessResponseDto implements updateWishlistItemSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty({ type: WishlistDto })
    data: WishlistDto;
}

export class updateWishlistItemErrorResponseDto implements updateWishlistItemErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty({
        example: updateWishlistItemErrorMessage.CAN_NOT_UPDATE_WISHLIST_ITEM,
        examples: [updateWishlistItemErrorMessage.CAN_NOT_DELETE_WISHLIST_ITEM, updateWishlistItemErrorMessage.CAN_NOT_UPDATE_WISHLIST_ITEM],
    })
    error: updateWishlistItemErrorMessage;

    @ApiProperty()
    errors: string[];
}