import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Admin } from 'src/entity/admin';
import { Admin as AdminInfo } from 'src/modules/admin-auth/decorator/auth.decorator';
import { JwtAuthGuard } from 'src/modules/admin-auth/guards/auth.guard';
import { CompareDataDto, CompareResponse } from '../dto/test.dto';
import { CompareTestService } from '../services/test.service';

@ApiTags('Test purpose - Comparison API')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@UseInterceptors(ClassSerializerInterceptor)
@Controller('test-purpose/compare')
export class CompareTestController {
  constructor(private compareService: CompareTestService) {}

  @ApiResponse({
    description: 'Add product to compare Response',
    type: CompareDataDto,
  })
  @Get()
  async getCompareByUserId(
    @AdminInfo() user: Admin,
    @Res({ passthrough: true }) res: Response,
  ): Promise<CompareResponse<CompareDataDto>> {
    const { code, ...response } = await this.compareService.getCompareByUserId(user.id);
    res.status(code);
    return response;
  }

  @ApiResponse({
    description: 'Add product to compare Response',
    type: Boolean,
  })
  @Get('boolean')
  async getCompare(
    @AdminInfo() user: Admin,
    @Res({ passthrough: true }) res: Response,
  ): Promise<CompareResponse<boolean>> {
    const { code, ...response } = await this.compareService.getCompare(user.id);
    res.status(code);
    return response;
  }
}
