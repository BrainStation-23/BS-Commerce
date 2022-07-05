import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Admin } from 'src/entity/admin';
import { User as AdminInfo } from 'src/decorators/auth.decorator';
import { JwtAuthGuard } from 'src/modules/admin-auth/guards/auth.guard';
import {
  AddToCompareDto,
  CompareErrorResponseDto,
  CompareSuccessResponseDto,
} from '../dto/compare.dto';
import { CompareService } from '../services';

@ApiTags('Comparison API')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('compare')
export class CompareController {
  constructor(private compareService: CompareService) {}

  @Post()
  @ApiResponse({
    description: 'Add product to compare Success Response',
    type: CompareSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Add product to compare Error Response',
    type: CompareErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async addItemToComapre(
    @AdminInfo() user: Admin,
    @Body() body: AddToCompareDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.compareService.addItemToCompare(
      user.id,
      body.productId,
    );
    res.status(code);
    return response;
  }

  @ApiResponse({
    description: 'Add product to compare Error Response',
    type: CompareErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    description: 'Get compare by user',
    type: CompareSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @Get()
  async getCompareByUserId(@AdminInfo() user: Admin, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.compareService.getCompareByUserId(user.id);
    res.status(code);
    return response;
  }

  @ApiResponse({
    description: 'Add product to compare Error Response',
    type: CompareErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    description: 'Get compare by compare id',
    type: CompareSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiParam({ name: 'compareId', example: '' })
  @Get(':compareId')
  async getCompareById(
    @AdminInfo() user: Admin,
    @Param('compareId') compareId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.compareService.getCompareById(user.id, compareId);
    res.status(code);
    return response;
  }

  @ApiResponse({
    description: 'Add product to compare Error Response',
    type: CompareErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    description: 'Delete compare by compare id',
    type: CompareSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiQuery({ name: 'compareId', example: '' })
  @Delete()
  async deleteCompareById(
    @AdminInfo() user: Admin,
    @Query('compareId') compareId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.compareService.deleteCompareById(user.id, compareId);
    res.status(code);
    return response;
  }

  @ApiResponse({
    description: 'Add product to compare Error Response',
    type: CompareErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    description: 'Delete compare item by product id',
    type: CompareSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiQuery({ name: 'productId', example: '' })
  @Delete('item')
  async deleteItemByProductId(
    @AdminInfo() user: Admin,
    @Query('productId') productId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.compareService.deleteItemByProductId(
      user.id,
      productId,
    );
    res.status(code);
    return response;
  }

  @ApiResponse({
    description: 'Add product to compare Error Response',
    type: CompareErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    description: 'Delete all compare items of user',
    type: CompareSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @Delete('allitems')
  async deleteAllItemByUserId(@AdminInfo() user: Admin, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.compareService.deleteAllItemByUserId(user.id);
    res.status(code);
    return response;
  }
}
