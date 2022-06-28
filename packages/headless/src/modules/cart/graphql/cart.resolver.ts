import { Item } from 'src/entity/cart';
import { CartService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { User as UserInfo } from 'src/modules/admin-auth/decorator/auth.decorator';
import { JwtAuthGuard } from 'src/modules/admin-auth/guards/auth.guard';
import { Admin } from 'src/entity/admin';
import { AddToCartRequestDto } from '../dto/addToCart.dto';
import { deleteCartRequestDto } from '../dto/deleteCart.dto';
import { updateCartItemRequestDto } from '../dto/updateCartItem.dto';
import { deleteCartItemRequestDto } from '../dto/deleteCartItem.dto';

@UseGuards(JwtAuthGuard)
@Resolver()
export class CartResolver {
  constructor(private cartService: CartService) { }

  @Query()
  async getCart(@UserInfo() user: Admin) {
    return await this.cartService.getCart(user.id);
  }

  @Mutation()
  async addToCart(
    @Args('item') item: AddToCartRequestDto,
    @UserInfo() user: Admin,
  ) {
    return await this.cartService.addToCart(item, user.id);
  }

  @Mutation()
  async deleteCart(@Args() data: deleteCartRequestDto) {
    return await this.cartService.deleteCart(data.cartId);
  }

  @Mutation()
  async updateCartItem(
    @UserInfo() user: Admin,
    @Args('item') item: updateCartItemRequestDto,
  ) {
    return await this.cartService.updateCartItem(user.id, item);
  }

  @Mutation()
  async deleteCartItem(
    @UserInfo() user: Admin,
    @Args() data: deleteCartItemRequestDto,
  ) {
    return await this.cartService.deleteCartItem(user.id, data.productId);
  }

  @Mutation()
  async deleteAllCartItems(@UserInfo() user: Admin) {
    return await this.cartService.deleteAllCartItems(user.id);
  }
}