import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
    deleteWishlistErrorResponse,
    deleteWishlistSuccessResponse,
    deleteWishlistErrorMessage,
    DeleteWishlistParams,
    deleteWishlistSuccessMessage,
} from 'models';
import { IsNotEmpty, IsString } from 'class-validator';

export class deleteWishlistPramsDto implements DeleteWishlistParams {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    wishlistId: string;
}

class SuccessMessage {
    @ApiProperty({ example: deleteWishlistSuccessMessage.WISHLIST_DELETED_SUCCESSFUL })
    message: string
}

export class deleteWishlistSuccessResponseDto implements deleteWishlistSuccessResponse {
    @ApiProperty({ default: HttpStatus.OK })
    code: number;

    @ApiProperty()
    data: SuccessMessage;
}

export class deleteWishlistErrorResponseDto implements deleteWishlistErrorResponse {
    @ApiProperty({ default: HttpStatus.BAD_REQUEST })
    code: number;

    @ApiProperty({ example: deleteWishlistErrorMessage.CAN_NOT_DELETE_WISHLIST, })
    error: deleteWishlistErrorMessage;

    @ApiProperty()
    errors: string[];
}