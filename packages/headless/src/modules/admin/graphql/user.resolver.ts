import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Admin } from 'src/entity/admin';
import { User as UserInfo } from 'src/modules/admin-auth/decorator/auth.decorator';
import { UserService } from '../services';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/admin-auth/guards/auth.guard';
import { ChangePasswordDto, UpdatedUserDto } from '../dto';

@UseGuards(JwtAuthGuard)
@Resolver()
export class UserResolver {
  constructor(private userService: UserService) { }

  @Query()
  async getUser(@UserInfo() user: Admin) {
    return await this.userService.getUser(user.id);
  }

  @Mutation()
  async updateUser(@Args('data') data: UpdatedUserDto, @UserInfo() user: Admin) {
    return await this.userService.updateUser(user.id, data);
  }

  @Mutation()
  async changePassword(@Args('passwordDetails') passwordDetails: ChangePasswordDto, @UserInfo() user: Admin) {
    return await this.userService.changePassword(user.id, passwordDetails);
  }
}