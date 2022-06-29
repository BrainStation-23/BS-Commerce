import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Admin } from 'src/entity/admin';
import { Admin as AdminInfo } from 'src/modules/admin-auth/decorator/auth.decorator';
import { AdminService } from '../services';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/admin-auth/guards/auth.guard';
import { ChangePasswordDto, UpdatedUserDto } from '../dto';

@UseGuards(JwtAuthGuard)
@Resolver()
export class AdminResolver {
  constructor(private adminService: AdminService) { }

  @Query()
  async getUser(@AdminInfo() user: Admin) {
    return await this.adminService.getUser(user.id);
  }

  @Mutation()
  async updateUser(@Args('data') data: UpdatedUserDto, @AdminInfo() user: Admin) {
    return await this.adminService.updateUser(user.id, data);
  }

  @Mutation()
  async changePassword(@Args('passwordDetails') passwordDetails: ChangePasswordDto, @AdminInfo() user: Admin) {
    return await this.adminService.changePassword(user.id, passwordDetails);
  }
}