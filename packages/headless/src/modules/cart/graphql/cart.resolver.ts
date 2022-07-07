import { CartService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { User } from 'src/entity/user';
import { AddToCartRequestDto } from '../dto/addToCart.dto';
import { deleteCartRequestDto } from '../dto/deleteCart.dto';
import { updateCartItemRequestDto } from '../dto/updateCartItem.dto';
import { deleteCartItemRequestDto } from '../dto/deleteCartItem.dto';
import { RolesGuard } from 'src/guards/auth.guard';

@UseGuards(new RolesGuard(['customer']))
@Resolver()
export class CartResolver {
  constructor(private cartService: CartService) { }

  @Query()
  async getCart(@UserInfo() user: User) {
    return await this.cartService.getCart(user.id);
  }

  @Mutation()
  async addToCart(
    @Args('item') item: AddToCartRequestDto,
    @UserInfo() user: User,
  ) {
    return await this.cartService.addToCart(item, user.id);
  }

  @Mutation()
  async deleteCart(@Args() data: deleteCartRequestDto) {
    return await this.cartService.deleteCart(data.cartId);
  }

  @Mutation()
  async updateCartItem(
    @UserInfo() user: User,
    @Args('item') item: updateCartItemRequestDto,
  ) {
    return await this.cartService.updateCartItem(user.id, item);
  }

  @Mutation()
  async deleteCartItem(
    @UserInfo() user: User,
    @Args() data: deleteCartItemRequestDto,
  ) {
    return await this.cartService.deleteCartItem(user.id, data.productId);
  }

  @Mutation()
  async deleteAllCartItems(@UserInfo() user: User) {
    return await this.cartService.deleteAllCartItems(user.id);
  }
}