import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CartService } from '../services';
import { Response } from 'express';
import { Item } from 'src/entity/cart';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { User } from 'src/entity/user';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';

@UseGuards(JwtAuthGuard)
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) { }

  @Post()
  async addToCart(
    @Body() item: Item,
    @UserInfo() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.addToCart(
      item,
      user.id,
    );
    res.status(code);
    return response;
  }

  @Get()
  async getCart(@UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.cartService.getCart(user.id);
    res.status(code);
    return response;
  }

  @Delete()
  async deleteCartById(
    @Query('cartId') cartId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.deleteCart(cartId);
    res.status(code);
    return response;
  }

  @Put('item')
  async updateCartItem(
    @UserInfo() user: User,
    @Body() item: Item,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.updateCartItem(
      user.id,
      item,
    );
    res.status(code);
    return response;
  }

  @Delete('item')
  async deleteCartItem(
    @UserInfo() user: User,
    @Query('productId') productId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.deleteCartItem(
      user.id,
      productId,
    );
    res.status(code);
    return response;
  }

  @Delete('allitems')
  async deleteAllCartItems(
    @UserInfo() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.deleteAllCartItems(
      user.id,
    );
    res.status(code);
    return response;
  }
}
