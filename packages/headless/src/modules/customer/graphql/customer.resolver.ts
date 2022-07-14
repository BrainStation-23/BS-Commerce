import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/entity/user';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import { UserService } from '../services';
import { UseGuards } from '@nestjs/common';
import { ChangePasswordDto, UpdatedUserDto } from '../dto';
import { RolesGuard } from 'src/guards/auth.guard';

@UseGuards(new RolesGuard(['customer']))
@Resolver()
export class CUstomerResolver {
  constructor(private userService: UserService) { }

  @Query()
  async getUser(@UserInfo() user: User) {
    return await this.userService.getUser(user.id);
  }

  @Mutation()
  async updateUser(@Args('data') data: UpdatedUserDto, @UserInfo() user: User) {
    return await this.userService.updateUser(user.id, data);
  }

  @Mutation()
  async changePassword(@Args('passwordDetails') passwordDetails: ChangePasswordDto, @UserInfo() user: User) {
    return await this.userService.changePassword(user.id, passwordDetails);
  }
}