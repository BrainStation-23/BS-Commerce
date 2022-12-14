import { WishListService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { User as UserInfo } from '../../../decorators/auth.decorator';
import { User } from '../../../entity/user';
import { RolesGuard } from '../../../guards/auth.guard';
import {
  WishlistItemInput,
  WishListResponse,
  WishListResponseWithMessage,
} from './wishlist.model';
import { Helper } from '../../../helper/helper.interface';

@Resolver()
@UseGuards(new RolesGuard(['customer']))
export class WishListResolver {
  constructor(
    private wishListService: WishListService,
    private helper: Helper,
  ) {}

  @Query(() => WishListResponse)
  async getUserWishlist(@UserInfo() user: User) {
    const res = await this.wishListService.getUserWishlist(user.id);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => WishListResponse)
  async addToWishlist(
    @Args('item') item: WishlistItemInput,
    @UserInfo() user: User,
  ) {
    const res = await this.wishListService.addToWishList(user.id, item);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => WishListResponseWithMessage)
  async deleteWishList(@Args('wishlistId') wishlistId: string) {
    const res = await this.wishListService.deleteWishlist(wishlistId);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => WishListResponse)
  async updateWishlistItem(
    @Args('item') item: WishlistItemInput,
    @UserInfo() user: User,
  ) {
    const res = await this.wishListService.updateWishlistItem(item, user.id);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => WishListResponse)
  async deleteWishlistItem(
    @Args('productId') productId: string,
    @UserInfo() user: User,
  ) {
    const res = await this.wishListService.deleteWishlistItem(
      productId,
      user.id,
    );
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => WishListResponseWithMessage)
  async deleteAllWishlistItems(@UserInfo() user: User) {
    const res = await this.wishListService.deleteAllWishlistItems(user.id);
    return this.helper.serviceResponse.graphqlResponse(res);
  }
}
