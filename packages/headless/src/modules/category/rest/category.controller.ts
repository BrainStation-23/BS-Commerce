import {
  Body,
  Controller, Get, HttpStatus, Res, UseGuards,
} from '@nestjs/common';
import { CategoryService } from '../services';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { getCategoryListErrorResponseDto, getCategoryListSuccessResponseDto } from '../dto/getCategoryList';

@Controller('category')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Category API')
export class CategoryController {
  constructor(private categoryService: CategoryService) { }

  @Get()
  @ApiResponse({
    description: 'Get Category List API',
    type: getCategoryListSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Error Response',
    type: getCategoryListErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getCategoryList(
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.categoryService.getCategoryList();
    res.status(code);
    return response;
  }
}