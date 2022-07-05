import { WishListService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import { WishlistItem } from 'src/entity/wishList';
import { RolesGuard } from 'src/guards/auth.guard';
import { Customer } from 'src/entity/customer';

@Resolver()
@UseGuards(new RolesGuard(['customer']))
export class WishListResolver {
  constructor(private wishListService: WishListService) { }

  @Query()
  async getUserWishlist(@UserInfo() user: Customer) {
    return await this.wishListService.getUserWishlist(user.id);
  }

  @Mutation()
  async addToWishlist(@Args('item') item: WishlistItem, @UserInfo() user: Customer) {
    return await this.wishListService.addToWishList(user.id, item);
  }

  @Mutation()
  async deleteWishList(@Args('wishlistId') wishlistId: string) {
    return await this.wishListService.deleteWishlist(wishlistId);
  }

  @Mutation()
  async updateWishlistItem(@Args('item') item: WishlistItem, @UserInfo() user: Customer) {
    return await this.wishListService.updateWishlistItem(item, user.id);
  }

  @Mutation()
  async deleteWishlistItem(@Args('productId') productId: string, @UserInfo() user: Customer) {
    return await this.wishListService.deleteWishlistItem(productId, user.id);
  }

  @Mutation()
  async deleteAllWishlistItems(@UserInfo() user: Customer) {
    return await this.wishListService.deleteAllWishlistItems(user.id);
  }
}
