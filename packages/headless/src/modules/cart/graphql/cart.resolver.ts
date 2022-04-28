import { Item } from 'src/entity/cart';
import { CartService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { User } from 'src/entity/user';

@UseGuards(JwtAuthGuard)
@Resolver()
export class CartResolver {
  constructor(private cartService: CartService) { }

  /**
   * Query Start
   */
  @Query()
  async getCart(@UserInfo() user: User) {
    return await this.cartService.getCart(user.id);
  }

  /**
  * Query End
  */

  /**
  * Mutation Start
  */

  @Mutation()
  async addToCart(
    @Args('item') item: Item,
    @UserInfo() user: User,
  ) {
    return await this.cartService.addToCart(item, user.id);
  }

  @Mutation()
  async deleteCart(@Args('cartId') cartId: string) {
    console.log(cartId);
    return await this.cartService.deleteCart(cartId);
  }

  @Mutation()
  async updateCartItem(
    @UserInfo() user: User,
    @Args('item') item: Item,
  ) {
    return await this.cartService.updateCartItem(user.id, item);
  }

  @Mutation()
  async deleteCartItem(
    @UserInfo() user: User,
    @Args('productId') productId: string,
  ) {
    return await this.cartService.deleteCartItem(user.id, productId);
  }

  @Mutation()
  async deleteAllCartItems(@UserInfo() user: User) {
    return await this.cartService.deleteAllCartItems(user.id);
  }

  /**
   * Mutation End
   */
}