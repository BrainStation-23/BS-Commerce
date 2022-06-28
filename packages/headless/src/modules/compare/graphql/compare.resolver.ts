import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompareItems } from 'src/entity/compare';
import { Admin } from 'src/entity/admin';
import { User as UserInfo } from 'src/modules/admin-auth/decorator/auth.decorator';
import { JwtAuthGuard } from 'src/modules/admin-auth/guards/auth.guard';
import { CompareService } from '../services';
@UseGuards(JwtAuthGuard)
@Resolver()
export class GqlCompareResolver {
  constructor(private compareService: CompareService) {}

  /**
   * Query Start
   */

  @Query()
  async getCompareByUserId(@UserInfo() user: Admin) {
    return await this.compareService.getCompareByUserId(user.id);
  }

  @Query()
  async getCompareById(
    @Args('compareId') compareId: string,
    @UserInfo() user: Admin,
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
    @UserInfo() user: Admin,
    @Args('body') body: CompareItems,
  ) {
    return await this.compareService.addItemToCompare(user.id, body.productId);
  }

  @Mutation()
  async deleteCompareById(
    @UserInfo() user: Admin,
    @Args('compareId') compareId: string,
  ) {
    return await this.compareService.deleteCompareById(user.id, compareId);
  }

  @Mutation()
  async deleteItemByProductId(
    @UserInfo() user: Admin,
    @Args('productId') productId: string,
  ) {
    return await this.compareService.deleteItemByProductId(user.id, productId);
  }

  @Mutation()
  async deleteAllItemByUserId(@UserInfo() user: Admin) {
    return await this.compareService.deleteAllItemByUserId(user.id);
  }

  /**
   * Mutation End
   */
}
