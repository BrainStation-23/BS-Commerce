import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Patch,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CartService } from '../services';
import { Response } from 'express';
import { User } from 'src/entity/user';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/guards/auth.guard';
import {
  AddToCartErrorResponseDto,
  AddToCartRequestDto,
  AddToCartSuccessResponseDto,
} from './dto/addToCart.dto';
import {
  getCartErrorResponseDto,
  getCartSuccessResponseDto,
} from './dto/getCart.dto';
import {
  deleteCartErrorResponseDto,
  deleteCartRequestDto,
  deleteCartSuccessResponseDto,
} from './dto/deleteCart.dto';
import {
  updateCartItemErrorResponseDto,
  updateCartItemRequestDto,
  updateCartItemSuccessResponseDto,
} from './dto/updateCartItem.dto';
import {
  deleteCartItemErrorResponseDto,
  deleteCartItemRequestDto,
  deleteCartItemSuccessResponseDto,
} from './dto/deleteCartItem.dto';
import {
  deleteAllCartItemsErrorResponseDto,
  deleteAllCartItemsSuccessResponseDto,
} from './dto/deleteAllCartItems.dto';

@Controller('cart')
@ApiBearerAuth()
@UseGuards(new RolesGuard(['customer']))
@ApiTags('Cart API')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post()
  @ApiResponse({
    description: 'Add to Cart API',
    type: AddToCartSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Error Response',
    type: AddToCartErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async addToCart(
    @Body() item: AddToCartRequestDto,
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
  @ApiResponse({
    description: 'Get cart API',
    type: getCartSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Error Response',
    type: getCartErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getCart(
    @UserInfo() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.getCart(user.id);
    res.status(code);
    return response;
  }

  @ApiResponse({
    description: 'Delete cart API',
    type: deleteCartSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Error Response',
    type: deleteCartErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  @Delete()
  async deleteCart(
    @Query() data: deleteCartRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.deleteCart(
      data.cartId,
    );
    res.status(code);
    return response;
  }

  @ApiResponse({
    description: 'Update Cart Item Api',
    type: updateCartItemSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Error Response',
    type: updateCartItemErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  @Patch('item')
  async updateCartItem(
    @UserInfo() user: User,
    @Body() item: updateCartItemRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.updateCartItem(
      user.id,
      item,
    );
    res.status(code);
    return response;
  }

  @ApiResponse({
    description: 'Delete Cart Item Api',
    type: deleteCartItemSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Error Response',
    type: deleteCartItemErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  @Delete('item')
  async deleteCartItem(
    @UserInfo() user: User,
    @Query() data: deleteCartItemRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.cartService.deleteCartItem(
      user.id,
      data.productId,
    );
    res.status(code);
    return response;
  }

  @ApiResponse({
    description: 'Delete All Cart Items Api',
    type: deleteAllCartItemsSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Error Response',
    type: deleteAllCartItemsErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
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
