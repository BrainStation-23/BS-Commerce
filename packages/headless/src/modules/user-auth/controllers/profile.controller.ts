import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserId } from '../decorator/user.decorator';
import { JwtAuthGuard } from '../passport/jwt-auth.guard';
import { UserProfileService } from '../services/user-profile.service';

@ApiTags('User Profile API')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('user-info')
export class UserProfileController {
  constructor(private userProfileService: UserProfileService) {}

  @Get()
  async getInfo(@UserId() userId: string) {
    return await this.userProfileService.getProfile(userId);
  }
}
