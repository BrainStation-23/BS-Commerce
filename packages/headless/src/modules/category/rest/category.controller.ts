import {
    Body,
    Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Req, Res, UseGuards,
} from '@nestjs/common';
import { Category } from 'src/entity/category';
import { CategoryService } from '../services';
import { User as UserInfo } from 'src/modules/auth/decorator/auth.decorator'
import { User } from 'src/entity/user';
import { Response, Request } from 'express';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { addCategoryErrorResponseDto, addCategoryRequestDto, addCategorySuccessResponseDto } from '../dto/addCategory.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('category')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Category API')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Post()
    @ApiResponse({
        description: 'Add Category Api',
        type: addCategorySuccessResponseDto,
        status: HttpStatus.CREATED
      })
      @ApiResponse({
        description: 'Error Response',
        type: addCategoryErrorResponseDto,
        status: HttpStatus.BAD_REQUEST
      })
    async addCategory(
        @Body() category: addCategoryRequestDto,
        @UserInfo() user: User,
        @Res({ passthrough: true }) res: Response,
    ) {
        const { code, ...response } = await this.categoryService.addCategory(category);
        res.status(code);
        return response;
    }
}