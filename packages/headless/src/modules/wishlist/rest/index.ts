import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { WishlistItem } from 'src/entity/wishList';
import { Response } from 'express';
import { WishListService } from '../services';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { User } from 'src/entity/user';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/auth.guard';
import { AuthGuard } from '@nestjs/passport';
import {
  AddToWishlistErrorResponseDto,
  AddToWishlistRequestDto,
  AddToWishlistSuccessResponseDto,
  deleteWishlistErrorResponseDto,
  deleteWishlistPramsDto,
  deleteWishlistSuccessResponseDto,
  getUserWishlistErrorResponseDto,
  getUserWishlistSuccessResponseDto,
} from '../dto';

@Controller()
@Roles('customer')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiBearerAuth()
@ApiTags('Customer Wishlist API')
export class WishListController {
  constructor(private wishListService: WishListService,) { }

  @Post('wishlist')
  @ApiResponse({
    description: 'Add to Wishlist Success Response',
    type: AddToWishlistSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Add to Wishlist Error Response',
    type: AddToWishlistErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async addWishList(@Body() item: AddToWishlistRequestDto, @UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.addToWishList(user.id, item,);
    res.status(code);
    return response;
  }

  @Get('customer/wishlist')
  @ApiResponse({
    description: 'Get User Wishlist Success Response',
    type: getUserWishlistSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get User Wishlist Error Response',
    type: getUserWishlistErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getUserWishlist(@UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.getUserWishlist(user.id);
    res.status(code);
    return response;
  }

  @Patch('wishlist/item')
  async updateWishlistItem(@Body() item: WishlistItem, @UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.updateWishlistItem(item, user.id);
    res.status(code);
    return response;
  }

  @Delete('wishlist/item/:productId')
  async deleteWishlistItem(@Param('productId') productId: string, @UserInfo() user: User, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.deleteWishlistItem(productId, user.id);
    res.status(code);
    return response;
  }

  @Delete('wishlist/allitems')
  async deleteAllWishlistItems(@UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.wishListService.deleteAllWishlistItems(user.id,);
    res.status(code);
    return response;
  }

  @Delete('wishlist/:wishlistId')
  @ApiResponse({
    description: 'Delete Wishlist Success Response',
    type: deleteWishlistSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Delete Wishlist Error Response',
    type: deleteWishlistErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async deleteWishlist(@Param() params: deleteWishlistPramsDto, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.wishListService.deleteWishlist(params.wishlistId);
    res.status(code);
    return response;
  }
}