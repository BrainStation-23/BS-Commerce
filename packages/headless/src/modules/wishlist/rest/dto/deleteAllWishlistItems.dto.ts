import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
    deleteAllWishlistItemsErrorResponse,
    deleteAllWishlistItemsSuccessResponse,
    deleteAllWishlistItemsErrorMessage,
    deleteAllWishlistItemsSuccessMessage,
} from 'bs-commerce-models';

class DeleteAllWishlistItemsSuccessMessage {
    @ApiProperty({ example: deleteAllWishlistItemsSuccessMessage.WISHLIST_ITEMS_DELETED_SUCCESSFUL })
    message: string
}

export class deleteAllWishlistItemsSuccessResponseDto implements deleteAllWishlistItemsSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: DeleteAllWishlistItemsSuccessMessage;
}

export class deleteAllWishlistItemsErrorResponseDto implements deleteAllWishlistItemsErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty({ example: deleteAllWishlistItemsErrorMessage.CAN_NOT_DELETE_ALL_WISHLIST_ITEMS, })
    error: deleteAllWishlistItemsErrorMessage;

    @ApiProperty()
    errors: string[];
}