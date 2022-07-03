import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { WishlistDto } from './wishlist.dto';
import {
    deleteWishlistItemErrorResponse,
    deleteWishlistItemSuccessResponse,
    deleteWishlistItemErrorMessage,
    DeleteWishlistItemParams,
} from 'models';
import { IsNotEmpty, IsString } from 'class-validator';

export class deleteWishlistItemPramsDto implements DeleteWishlistItemParams {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    productId: string;
}

export class deleteWishlistItemSuccessResponseDto implements deleteWishlistItemSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty({ type: WishlistDto })
    data: WishlistDto;
}

export class deleteWishlistItemErrorResponseDto implements deleteWishlistItemErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty({ example: deleteWishlistItemErrorMessage.CAN_NOT_DELETE_WISHLIST_ITEM, })
    error: deleteWishlistItemErrorMessage;

    @ApiProperty()
    errors: string[];
}