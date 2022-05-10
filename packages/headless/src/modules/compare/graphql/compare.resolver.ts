import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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

  /**
   * Query End
   */

  /**
   * Mutation Start
   */

  @Mutation()
  async addItemToCompare(
    @Args('body') productId: string,
    @UserInfo() user: User,
  ) {
    return await this.compareService.addItemToCompare(user.id, productId);
  }

  /**
   * Mutation End
   */
}
