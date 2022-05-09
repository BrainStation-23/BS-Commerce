import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { CompareData } from 'src/entity/compare';
import { User } from 'src/entity/user';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { CompareService } from '../services';

@UseGuards(JwtAuthGuard)
@Controller('compare')
export class CompareController {
  constructor(private compareService: CompareService) {}

  @Post()
  async addItemToComapre(
    @UserInfo() user: User,
    @Body() body: CompareData,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.compareService.addItemToCompare(
      user.id,
      body,
    );
    res.status(code);
    return response;
  }
}
