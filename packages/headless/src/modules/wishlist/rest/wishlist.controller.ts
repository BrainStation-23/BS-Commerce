import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res } from '@nestjs/common';
import { Item } from 'src/entity/wishList';
import { Response } from 'express';
import { WishListService } from '../services';

@Controller('wishlist')
export class WishListController {
  constructor(
    private wishListService: WishListService,
  ) { }

  @Post()
  async addWishList(@Body() item: Item, @Req() req: any, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.addToWishList(req?.userId, item,);
    res.status(code);
    return response;
  }

  @Get()
  async getUserWishlist(@Req() req: any, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.getUserWishlist(req?.userId);
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
  async updateWishlistItem(@Body() item: Item, @Req() req: any, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.updateWishlistItem(item, req?.userId);
    res.status(code);
    return response;
  }

  @Delete('/item')
  async deleteWishlistItem(@Query('product') product: string, @Req() req: any, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.deleteWishlistItem(product, req?.userId);
    res.status(code);
    return response;
  }

  @Delete('/allitems')
  async deleteAllWishlistItems(@Req() req: any, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.deleteAllWishlistItems(req?.userId,);
    res.status(code);
    return response;
  }
}