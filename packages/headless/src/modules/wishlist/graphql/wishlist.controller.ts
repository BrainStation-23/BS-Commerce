/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { WishListService } from '../services';

@Controller('wishlist')
export class WishListController {
  constructor(private wishListService: WishListService) {}

  @Get(':wishlistId')
  async getWishListById(
    @Param('wishlistId') wishlistId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.wishListService.getWishlistById(
      wishlistId,
    );
    res.status(code);
    return response;
  }
}
