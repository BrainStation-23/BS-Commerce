import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Item } from '../../../entity/cart';
import { CartService } from '../services';
import { Request, Response } from 'express';

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
    const { code, ...response } = await this.cartService.deleteCartById(cartId);
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
    // const item = { product: productId, quantity: 0 };
    const { code, ...response } = await this.cartService.deleteCartItem(
      req.user.id,
      productId,
    );
    res.status(code);
    return response;
  }

  @Get('allitems')
  async getItemsWithoutPopulate(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.cartService.getItemsWithoutPopulate(req.user.id);
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

  @Get('stripePublishableKey')
  async getStripePublishableKey(@Res({ passthrough: true }) res: Response) {
    const { code, ...response } =
      await this.cartService.getStripePublishableKey();
    res.status(code);
    return response;
  }
}
