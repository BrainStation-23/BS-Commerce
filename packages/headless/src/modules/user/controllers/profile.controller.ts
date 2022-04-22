import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UserInfo } from '../decorator/user.decorator';
import { IJwtPayload } from '../interface/user.interface';
import { JwtAuthGuard } from '../passport/jwt-auth.guard';
import { UserProfileService } from '../services/user-profile.service';

@ApiTags('User Profile API')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserProfileController {
  constructor(private userProfileService: UserProfileService) {}

  @Get('me')
  async getuser(
    @UserInfo() userData: IJwtPayload,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.userProfileService.getProfile(
      userData.id,
    );
    res.status(code);
    return response;
  }
}
