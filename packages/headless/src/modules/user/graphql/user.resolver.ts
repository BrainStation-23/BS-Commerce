import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User as UserInfo } from '../../../decorators/auth.decorator';
import { UserService } from '../services';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../../../guards/auth.guard';
import {
  Admin,
  AdminResponse,
  ChangePasswordInput,
  ChangePasswordResponse,
  UpdateUserInput,
} from './user.model';
import { Helper } from '../../../helper/helper.interface';

@UseGuards(new RolesGuard(['admin']))
@Resolver()
export class UserResolver {
  constructor(private userService: UserService, private helper: Helper) {}

  @Query(() => AdminResponse)
  async getUser(@UserInfo() admin: Admin) {
    const res = await this.userService.getUser(admin.id);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => AdminResponse)
  async updateUser(
    @Args('data') data: UpdateUserInput,
    @UserInfo() admin: Admin,
  ) {
    const res = await this.userService.updateUser(admin.id, data);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => ChangePasswordResponse)
  async changePassword(
    @Args('passwordDetails') passwordDetails: ChangePasswordInput,
    @UserInfo() admin: Admin,
  ) {
    const res = await this.userService.changePassword(
      admin.id,
      passwordDetails,
    );
    return this.helper.serviceResponse.graphqlResponse(res);
  }
}
