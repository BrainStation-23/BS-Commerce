import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { CartService } from '../services';
import { Request, Response } from 'express';
import { Item } from 'src/entity/cart';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post()
  async addToCart(
    @Body() item: Item,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.addToCart(
      item,
      req.user.id,
    );
    res.status(code);
    return response;
  }

  @Get()
  async getCart(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.getCart(req.user.id);
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
    @Req() req: Request,
    @Body() item: Item,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.updateCartItem(
      req.user.id,
      item,
    );
    res.status(code);
    return response;
  }

  @Delete('item')
  async deleteCartItem(
    @Req() req: Request,
    @Query('productId') productId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.deleteCartItem(
      req.user.id,
      productId,
    );
    res.status(code);
    return response;
  }

  @Delete('allitems')
  async deleteAllCartItems(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.deleteAllCartItems(
      req.user.id,
    );
    res.status(code);
    return response;
  }
}
