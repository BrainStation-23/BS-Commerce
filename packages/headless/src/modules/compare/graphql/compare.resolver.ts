import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompareData } from 'src/entity/compare';
import { User } from 'src/entity/user';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { CompareService } from '../services';
@UseGuards(JwtAuthGuard)
@Resolver()
export class GqlCompareResolver {
  constructor(private compareService: CompareService) {}

  /**
   * Query Start
   */

  @Query()
  async getCompareByUserId(@UserInfo() user: User) {
    return await this.compareService.getCompareByUserId(user.id);
  }

  @Query()
  async getCompareById(
    @Args('compareId') compareId: string,
    @UserInfo() user: User,
  ) {
    return await this.compareService.getCompareById(user.id, compareId);
  }

  /**
   * Query End
   */

  /**
   * Mutation Start
   */

  @Mutation()
  async addItemToCompare(
    @UserInfo() user: User,
    @Args('body') body: CompareData,
  ) {
    return await this.compareService.addItemToCompare(user.id, body.productId);
  }

  @Mutation()
  async deleteCompareById(
    @UserInfo() user: User,
    @Args('compareId') compareId: string,
  ) {
    return await this.compareService.deleteCompareById(user.id, compareId);
  }

  @Mutation()
  async deleteItemByProductId(
    @UserInfo() user: User,
    @Args('productId') productId: string,
  ) {
    return await this.compareService.deleteItemByProductId(user.id, productId);
  }

  @Mutation()
  async deleteAllItemByUserId(@UserInfo() user: User) {
    return await this.compareService.deleteAllItemByUserId(user.id);
  }

  /**
   * Mutation End
   */
}
