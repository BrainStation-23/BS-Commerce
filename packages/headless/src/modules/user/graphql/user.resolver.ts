import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import { UserService } from '../services';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/auth.guard';
import {
  Admin,
  AdminResponse,
  ChangePasswordInput,
  ChangePasswordResponse,
  UpdateUserInput
} from './user.model';

@UseGuards(new RolesGuard(['admin']))
@Resolver()
export class UserResolver {
  constructor(private userService: UserService) { }

  @Query(returns => AdminResponse)
  async getUser(@UserInfo() admin: Admin) {
    return await this.userService.getUser(admin.id);
  }

  @Mutation(returns => AdminResponse)
  async updateUser(@Args('data') data: UpdateUserInput, @UserInfo() admin: Admin) {
    return await this.userService.updateUser(admin.id, data);
  }

  @Mutation(returns => ChangePasswordResponse)
  async changePassword(@Args('passwordDetails') passwordDetails: ChangePasswordInput, @UserInfo() admin: Admin) {
    return await this.userService.changePassword(admin.id, passwordDetails);
  }
}