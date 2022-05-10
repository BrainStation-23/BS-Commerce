import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CompareData } from 'src/entity/compare';
import { User } from 'src/entity/user';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { CompareService } from '../services';

@ApiTags('User Profile API')
@ApiBearerAuth()
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
      body.productId,
    );
    res.status(code);
    return response;
  }

  @Get()
  async getCompareByUserId(
    @UserInfo() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.compareService.getCompareByUserId(
      user.id,
    );
    res.status(code);
    return response;
  }

  @Get(':compareId')
  async getCompareById(
    @UserInfo() user: User,
    @Param('compareId') compareId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.compareService.getCompareById(
      user.id,
      compareId,
    );
    res.status(code);
    return response;
  }

  @Delete()
  async deleteCompareByUserId(
    @UserInfo() user: User,
    @Query('compareId') compareId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.compareService.deleteCompareById(
      user.id,
      compareId,
    );
    res.status(code);
    return response;
  }

  @Delete('item')
  async deleteItemByProductId(
    @UserInfo() user: User,
    @Query('productId') productId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.compareService.deleteItemByProductId(user.id, productId);
    res.status(code);
    return response;
  }

  @Delete('allitems')
  async deleteAllItemByUserId(
    @UserInfo() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.compareService.deleteAllItemByUserId(user.id);
    res.status(code);
    return response;
  }
}
