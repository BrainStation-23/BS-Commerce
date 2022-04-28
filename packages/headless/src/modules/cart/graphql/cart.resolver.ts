import { Item } from 'src/entity/cart';
import { CartService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CartResolver {
  constructor(private cartService: CartService) { }

  /**
   * Query Start
   */
  @Query()
  async getCart(@Args('userId') userId: string) {
    return await this.cartService.getCart(userId);
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
    @Args('userId') userId: string,
  ) {
    return await this.cartService.addToCart(item, userId);
  }

  @Mutation()
  async deleteCart(@Args('cartId') cartId: string) {
    return await this.cartService.deleteCart(cartId);
  }

  @Mutation()
  async updateCartItem(
    @Args('userId') userId: string,
    @Args('item') item: Item,
  ) {
    return await this.cartService.updateCartItem(userId, item);
  }

  @Mutation()
  async deleteCartItem(
    @Args('productId') productId: string,
    @Args('userId') userId: string,
  ) {
    return await this.cartService.deleteCartItem(productId, userId);
  }

  @Mutation()
  async deleteAllCartItems(@Args('userId') userId: string) {
    return await this.cartService.deleteAllCartItems(userId);
  }

  /**
   * Mutation End
   */
}