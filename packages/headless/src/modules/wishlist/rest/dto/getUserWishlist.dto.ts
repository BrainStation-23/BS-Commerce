import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { WishlistDto } from './wishlist.dto';
import {
  getUserWishlistErrorResponse,
  getUserWishlistSuccessResponse,
  getUserWishlistErrorMessage,
} from '@bs-commerce/models';

export class getUserWishlistSuccessResponseDto
  implements getUserWishlistSuccessResponse
{
  @ApiProperty({ default: HttpStatus.OK })
  code: number;

  @ApiProperty({ type: WishlistDto })
  data: WishlistDto;
}

export class getUserWishlistErrorResponseDto
  implements getUserWishlistErrorResponse
{
  @ApiProperty({ default: HttpStatus.BAD_REQUEST })
  code: number;

  @ApiProperty({ example: getUserWishlistErrorMessage.NO_WISHLIST_FOUND })
  error: getUserWishlistErrorMessage;

  @ApiProperty()
  errors: string[];
}
