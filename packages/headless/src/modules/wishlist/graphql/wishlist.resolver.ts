import { Item, WishList } from 'src/entity/wishList';
import { WishListService } from '../services';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/gql-auth.guard';
import { UserId } from 'src/modules/auth/decorator/auth.decorator';
@UseGuards(GqlAuthGuard)
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
  async getUserWishlist(@UserId() userId: string) {
    return await this.wishListService.getUserWishlist(userId);
  }

  /**
  * Query End
  */

  /**
  * Mutation Start
  */

  @Mutation()
  async addToWishlist(@Args('item') item: Item, @UserId() userId: string) {
    return await this.wishListService.addToWishList(userId, item);
  }

  @Mutation()
  async deleteWishList(@Args('wishlistId') wishlistId: string) {
    return await this.wishListService.deleteWishlist(wishlistId);
  }

  @Mutation()
  async updateWishlistItem(@Args('item') item: Item, @UserId() userId: string) {
    return await this.wishListService.updateWishlistItem(item, userId);
  }

  @Mutation()
  async deleteWishlistItem(@Args('productId') productId: string, @UserId() userId: string) {
    return await this.wishListService.deleteWishlistItem(productId, userId);
  }

  @Mutation()
  async deleteAllWishlistItems(@UserId() userId: string) {
    return await this.wishListService.deleteAllWishlistItems(userId);
  }

  /**
   * Mutation End
   */
}
