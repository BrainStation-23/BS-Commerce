import { CartService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { User as UserInfo } from '../../../decorators/auth.decorator';
import { User } from '../../../entity/user';
import {
  CartResponse,
  deleteCartItemRequestSchema,
  deleteCartRequestSchema,
  DeleteCartResponse,
  ItemInput,
  updateCartItemRequestSchema,
} from './cart.model';
import { RolesGuard } from '../../../guards/auth.guard';
import { Helper } from '../../../helper/helper.interface';

@UseGuards(new RolesGuard(['customer']))
@Resolver()
export class CartResolver {
  constructor(private cartService: CartService, private helper: Helper) {}

  @Query(() => CartResponse, { nullable: true })
  async getCart(@UserInfo() user: User) {
    const res = await this.cartService.getCart(user.id);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => CartResponse, { nullable: true })
  async addToCart(@Args('item') item: ItemInput, @UserInfo() user: User) {
    const res = await this.cartService.addToCart(item, user.id);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => DeleteCartResponse, { nullable: true })
  async deleteCart(@Args('data') data: deleteCartRequestSchema) {
    const res = await this.cartService.deleteCart(data.cartId);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => CartResponse, { nullable: true })
  async updateCartItem(
    @UserInfo() user: User,
    @Args('item') item: updateCartItemRequestSchema,
  ) {
    const res = await this.cartService.updateCartItem(user.id, item);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => CartResponse, { nullable: true })
  async deleteCartItem(
    @UserInfo() user: User,
    @Args('data') data: deleteCartItemRequestSchema,
  ) {
    const res = await this.cartService.deleteCartItem(user.id, data.productId);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => CartResponse, { nullable: true })
  async deleteAllCartItems(@UserInfo() user: User) {
    const res = await this.cartService.deleteAllCartItems(user.id);
    return this.helper.serviceResponse.graphqlResponse(res);
  }
}
