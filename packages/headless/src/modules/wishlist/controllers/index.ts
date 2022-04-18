import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Item } from 'src/entity/wishList';
import { Response } from 'express';
import { Helper } from 'src/helper/helper.interface';
import { WishListService } from '../services';

@Controller('api/wishlist')
export class WishListController {
  constructor(
    private wishListService: WishListService,
    private helper: Helper,
  ) { }

  /* @Post()
  async addWishList(@Body() item: Item, @Req() req: any, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.addToWishList(req.user?._id, item,);

    res.status(code);
    return response;
  } */

  /**
   *
   * @param item : Item
   * @param userId : string
   * @returns WishList or null
   */
  @Post('/:userId')
  async addWishList(@Body() item: Item, @Param('userId') userId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.addToWishList(userId, item,);
    res.status(code);
    return response;
  }

  /* @Get('user')
  async getWishList(@Req() req: any, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.getWishList(req.user?._id);

    res.status(code);
    return response;
  } */

  /**
   *
   * @param userId string
   * @returns WishList or null
   */
  @Get('user/:userId')
  async getWishList(@Param('userId') userId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.getWishList(userId,);
    res.status(code);
    return response;
  }

  @Get(':wishlistId')
  async getWishListById(@Param('wishlistId') wishlistId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.getWishlistById(wishlistId,);
    res.status(code);
    return response;
  }

  @Delete('/:wishlistId')
  async deleteWishListById(@Param('wishlistId') wishlistId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.deleteWishlistById(wishlistId,);
    res.status(code);
    return response;
  }

  /* @Patch('/item')
  async updateWishlistItem(@Body() item: Item, @Req() req: any, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.updateWishlistItem(item, req.user?._id,);
    res.status(code);
    return response;
  } */

  @Patch('/item/:userId')
  async updateWishlistItem(@Body() item: Item, @Param('userId') userId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.updateWishlistItem(item, userId,);
    res.status(code);
    return response;
  }

  @Delete('/item')
  async deleteWishlistItem(@Query('product') product: string, @Req() req: any, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.deleteWishlistItem(product, req.user?._id,);
    res.status(code);
    return response;
  }

  /* @Get('/allitems')
  async getItemsWithoutPopulate(@Req() req: any, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.getWishlistWithoutPopulate(req.user?._id,);
    res.status(code);
    return response;
  } */

  @Get('/allitems/:userId')
  async getItemsWithoutPopulate(@Param('userId') userId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.getWishlistWithoutPopulate(userId);
    res.status(code);
    return response;
  }

  /* @Delete('/allitems')
  async deleteAllWishlistItems(@Req() req: any, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.deleteAllWishlistItems(req.user?._id,);
    res.status(code);
    return response;
  } */

  @Delete('/allitems/:userId')
  async deleteAllWishlistItems(@Param('userId') userId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.deleteAllWishlistItems(userId);
    res.status(code);
    return response;
  }
}
