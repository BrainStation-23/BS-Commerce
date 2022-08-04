import { CartService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import { User } from 'src/entity/user';
import { CartResponse, deleteCartItemRequestSchema, deleteCartRequestSchema, ItemInput, updateCartItemRequestSchema } from './cart.model';
import { RolesGuard } from 'src/guards/auth.guard';
@UseGuards(new RolesGuard(['customer']))
@Resolver()
export class CartResolver {
  constructor(private cartService: CartService) { }

  @Query(returns => CartResponse, { nullable: true, description: "Search and GET Cart by User ID" })
  async getCart(@UserInfo() user: User) {
    return await this.cartService.getCart(user.id);
  }

  @Mutation(returns => CartResponse, { nullable: true, description: "Add Item to the Cart" })
  async addToCart(
    @Args('item') item: ItemInput,
    @UserInfo() user: User,
  ) {
    return await this.cartService.addToCart(item, user.id);
  }


  @Mutation(type => CartResponse, { nullable: true, description: "Delete Cart by Cart ID" })
  async deleteCart(@Args('data') data: deleteCartRequestSchema) {
    return await this.cartService.deleteCart(data.cartId);
  }

  @Mutation(returns => CartResponse, { nullable: true, description: "Update item Quantity by Product ID" })
  async updateCartItem(
    @UserInfo() user: User,
    @Args('item') item: updateCartItemRequestSchema,
  ) {
    return await this.cartService.updateCartItem(user.id, item);
  }

  @Mutation(returns => CartResponse, { nullable: true, description: "Delete Cart Item by product ID" })
  async deleteCartItem(
    @UserInfo() user: User,
    @Args('data') data: deleteCartItemRequestSchema,
  ) {
    return await this.cartService.deleteCartItem(user.id, data.productId);
  }

  @Mutation(returns => CartResponse, { nullable: true, description: "Delete All Cart Items by User ID" })
  async deleteAllCartItems(@UserInfo() user: User) {
    return await this.cartService.deleteAllCartItems(user.id);
  }
}