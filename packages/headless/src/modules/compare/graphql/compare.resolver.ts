import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompareItems } from 'src/entity/compare';
import { User } from 'src/entity/user';
import { RolesGuard } from 'src/guards/auth.guard';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import { CompareService } from '../services';
import { AddCompareItemModel, ComparePublicResponseModel, CompareResponseModel } from './compare.model';
import { AddCompareItem } from '@bs-commerce/models';
@Resolver()
export class GqlCompareResolver {
  constructor(private compareService: CompareService) {}

  /**
   * Query Start
   */
  @UseGuards(new RolesGuard(['customer']))
  @Query(returns => CompareResponseModel)
  async getCompareByUserId(@UserInfo() user: User) {
    return await this.compareService.getCompareByUserId(user.id);
  }

  @UseGuards(new RolesGuard(['customer']))
  @Query(returns => CompareResponseModel)
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
  @UseGuards(new RolesGuard(['customer']))
  @Mutation(returns => CompareResponseModel)
  async addItemToCompare(
    @UserInfo() user: User,
    @Args('body') body: AddCompareItemModel,
  ) {
    console.log('sds')
    return await this.compareService.addItemToCompare(user.id, body.productId);
  }

  @UseGuards(new RolesGuard(['customer']))
  @Mutation(returns => CompareResponseModel)
  async deleteCompareById(
    @UserInfo() user: User,
    @Args('compareId') compareId: string,
  ) {
    return await this.compareService.deleteCompareById(user.id, compareId);
  }

  @UseGuards(new RolesGuard(['customer']))
  @Mutation(returns => CompareResponseModel)
  async deleteItemByProductId(
    @UserInfo() user: User,
    @Args('productId') productId: string,
  ) {
    return await this.compareService.deleteItemByProductId(user.id, productId);
  }

  @UseGuards(new RolesGuard(['customer']))
  @Mutation(returns => CompareResponseModel)
  async deleteAllItemByUserId(@UserInfo() user: User) {
    return await this.compareService.deleteAllItemByUserId(user.id);
  }

  @Mutation(returns => ComparePublicResponseModel)
  async getCompareProduct(
    @Args('body') body: AddCompareItemModel
  ) {
    return await this.compareService.getProductDetails(body.productId);
  }

  /**
   * Mutation End
   */
}
