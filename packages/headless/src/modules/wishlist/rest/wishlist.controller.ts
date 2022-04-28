import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Item } from 'src/entity/wishList';
import { Response } from 'express';
import { WishListService } from '../services';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { User } from 'src/entity/user';

@UseGuards(JwtAuthGuard)
@Controller('wishlist')
export class WishListController {
  constructor(
    private wishListService: WishListService,
  ) { }

  @Post()
  async addWishList(@Body() item: Item, @UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.addToWishList(user.id, item,);
    res.status(code);
    return response;
  }

  @Get()
  async getUserWishlist(@UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.getUserWishlist(user.id);
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
  async updateWishlistItem(@Body() item: Item, @UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.updateWishlistItem(item, user.id);
    res.status(code);
    return response;
  }

  @Delete('/item')
  async deleteWishlistItem(@Query('product') product: string, @UserInfo() user: User, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.deleteWishlistItem(product, user.id);
    res.status(code);
    return response;
  }

  @Delete('/allitems')
  async deleteAllWishlistItems(@UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.deleteAllWishlistItems(user.id,);
    res.status(code);
    return response;
  }
}