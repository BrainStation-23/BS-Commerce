import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Item } from 'src/entity/wishList';
import { Response } from 'express';
import { WishListService } from '../services';
import { UserId } from 'src/modules/auth/decorator/auth.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('wishlist')
export class WishListController {
  constructor(
    private wishListService: WishListService,
  ) { }

  @Post()
  async addWishList(@Body() item: Item, @UserId() userId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.addToWishList(userId, item,);
    res.status(code);
    return response;
  }

  @Get()
  async getUserWishlist(@UserId() userId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.getUserWishlist(userId);
    res.status(code);
    return response;
  }

  @Get(':wishlistId')
  async getWishList(@Param('wishlistId') wishlistId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.getWishlist(wishlistId,);
    res.status(code);
    return response;
  }

  @Delete('/:wishlistId')
  async deleteWishlist(@Param('wishlistId') wishlistId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.deleteWishlist(wishlistId);
    res.status(code);
    return response;
  }

  @Patch('/item')
  async updateWishlistItem(@Body() item: Item, @UserId() userId: string, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.updateWishlistItem(item, userId);
    res.status(code);
    return response;
  }

  @Delete('/item')
  async deleteWishlistItem(@Query('product') product: string, @UserId() userId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.deleteWishlistItem(product, userId);
    res.status(code);
    return response;
  }

  @Delete('/allitems')
  async deleteAllWishlistItems(@UserId() userId: string, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.deleteAllWishlistItems(userId,);
    res.status(code);
    return response;
  }
}