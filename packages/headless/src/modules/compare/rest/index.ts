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
import { User } from 'src/entity/user';
import { RolesGuard } from 'src/guards/auth.guard';
import { User as UserInfo } from 'src/decorators/auth.decorator';
import {
  AddToCompareDto,
  CompareErrorResponseDto,
  CompareSuccessResponseDto,
} from '../dto/compare.dto';
import { CompareService } from '../services';

@ApiTags('Comparison API')
@Controller('compare')
export class CompareController {
  constructor(private compareService: CompareService) {}
  
  @UseGuards(new RolesGuard(['customer']))
  @ApiBearerAuth()
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
    @UserInfo() user: User,
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

  @UseGuards(new RolesGuard(['customer']))
  @ApiBearerAuth()
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
  async getCompareByUserId(@UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.compareService.getCompareByUserId(user.id);
    res.status(code);
    return response;
  }

  @UseGuards(new RolesGuard(['customer']))
  @ApiBearerAuth()
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
    @UserInfo() user: User,
    @Param('compareId') compareId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.compareService.getCompareById(user.id, compareId);
    res.status(code);
    return response;
  }

  @UseGuards(new RolesGuard(['customer']))
  @ApiBearerAuth()
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
    @UserInfo() user: User,
    @Query('compareId') compareId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.compareService.deleteCompareById(user.id, compareId);
    res.status(code);
    return response;
  }

  @UseGuards(new RolesGuard(['customer']))
  @ApiBearerAuth()
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
    @UserInfo() user: User,
    @Query() query: AddToCompareDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.compareService.deleteItemByProductId(
      user.id,
      query.productId,
    );
    res.status(code);
    return response;
  }

  @UseGuards(new RolesGuard(['customer']))
  @ApiBearerAuth()
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
  async deleteAllItemByUserId(@UserInfo() user: User, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.compareService.deleteAllItemByUserId(user.id);
    res.status(code);
    return response;
  }

  @Post('/public')
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
  async addItemToComaprePublic(
    @Body() body: AddToCompareDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.compareService.getProductDetails( body.productId );
    res.status(code);
    return response;
  }

}
