import { Item } from 'src/entity/wishList';
import { WishListService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class WishListResolver {
  constructor(private wishListService: WishListService) {}

  //Graphql Query

  @Query()
  async getWishlist(@Args('wishlistId') wishlistId: string) {
    return await this.wishListService.getWishlistById(wishlistId);
  }

  @Query()
  async getUserWishlist(@Args('userId') userId: string) {
    return await this.wishListService.getWishList(userId);
  }

  @Query()
  async getItemsWithoutPopulate(@Args('userId') userId: string) {
    return await this.wishListService.getWishlistWithoutPopulate(userId);
  }

  /* @Query()
  async hello() {
    return {
      message: async () => {
        const wishlist: any = await this.wishListService.getWishlistById('625d312f4fb9625b8052b135');
        return wishlist.data;
      },
      name: () => { console.log('Name called'); return 'Md Ismail Hosen'; }
    }
  } */

  //Graphql Mutation

  @Mutation()
  async addToWishlist(
    @Args('item') item: Item,
    @Args('userId') userId: string,
  ) {
    return await this.wishListService.addToWishList(userId, item);
  }

  @Mutation()
  async deleteWishListById(@Args('wishlistId') wishlistId: string) {
    return await this.wishListService.deleteWishlistById(wishlistId);
  }

  @Mutation()
  async deleteWishlistItem(
    @Args('product') product: string,
    @Args('userId') userId: string,
  ) {
    return await this.wishListService.deleteWishlistItem(product, userId);
  }

  @Mutation()
  async deleteAllWishlistItems(@Args('userId') userId: string) {
    return await this.wishListService.deleteAllWishlistItems(userId);
  }
}
