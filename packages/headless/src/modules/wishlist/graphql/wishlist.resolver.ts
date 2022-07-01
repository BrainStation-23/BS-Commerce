import { WishListService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { User } from 'src/entity/user';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { WishlistItem } from 'src/entity/wishList';
@UseGuards(JwtAuthGuard)
@Resolver()
export class WishListResolver {
  constructor(private wishListService: WishListService) { }

  @Query()
  async getUserWishlist(@UserInfo() user: User) {
    return await this.wishListService.getUserWishlist(user.id);
  }

  @Mutation()
  async addToWishlist(@Args('item') item: WishlistItem, @UserInfo() user: User) {
    return await this.wishListService.addToWishList(user.id, item);
  }

  @Mutation()
  async deleteWishList(@Args('wishlistId') wishlistId: string) {
    return await this.wishListService.deleteWishlist(wishlistId);
  }

  @Mutation()
  async updateWishlistItem(@Args('item') item: WishlistItem, @UserInfo() user: User) {
    return await this.wishListService.updateWishlistItem(item, user.id);
  }

  @Mutation()
  async deleteWishlistItem(@Args('productId') productId: string, @UserInfo() user: User) {
    return await this.wishListService.deleteWishlistItem(productId, user.id);
  }

  @Mutation()
  async deleteAllWishlistItems(@UserInfo() user: User) {
    return await this.wishListService.deleteAllWishlistItems(user.id);
  }
}
