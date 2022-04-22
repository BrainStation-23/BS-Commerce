import { Item } from 'src/entity/wishList';
import { WishListService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class WishListResolver {
  constructor(private wishListService: WishListService) { }

  /**
   * Query Start
   */

  @Query()
  async getWishlist(@Args('wishlistId') wishlistId: string) {
    return await this.wishListService.getWishlist(wishlistId);
  }

  @Query()
  async getUserWishlist(@Args('userId') userId: string) {
    return await this.wishListService.getUserWishlist(userId);
  }

  /**
  * Query End
  */

  /**
  * Mutation Start
  */

  @Mutation()
  async addToWishlist(
    @Args('item') item: Item,
    @Args('userId') userId: string,
  ) {
    return await this.wishListService.addToWishList(userId, item);
  }

  @Mutation()
  async deleteWishList(@Args('wishlistId') wishlistId: string) {
    return await this.wishListService.deleteWishlist(wishlistId);
  }

  @Mutation()
  async updateWishlistItem(
    @Args('item') item: Item,
    @Args('userId') userId: string,
  ) {
    return await this.wishListService.updateWishlistItem(item, userId);
  }

  @Mutation()
  async deleteWishlistItem(
    @Args('productId') product: string,
    @Args('userId') userId: string,
  ) {
    return await this.wishListService.deleteWishlistItem(product, userId);
  }

  @Mutation()
  async deleteAllWishlistItems(@Args('userId') userId: string) {
    return await this.wishListService.deleteAllWishlistItems(userId);
  }

  /**
   * Mutation End
   */
}
