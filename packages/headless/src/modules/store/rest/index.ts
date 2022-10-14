import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { StoreService } from '../services';
import {
  CreateStoreErrorResponseDto,
  CreateStoreRequestBodyDto,
  CreateStoreSuccessResponseDto,
  GetAllStoresErrorResponseDto,
  GetAllStoresQueryDto,
  GetAllStoresSuccessResponseDto,
  GetStoreErrorResponseDto,
  GetStoreParamsDto,
  GetStoreSuccessResponseDto,
} from './dto';
import { Response } from 'express';

@Controller('stores')
@ApiTags('Store API')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Post('create-store')
  @ApiResponse({
    description: 'Create Store Success Response',
    type: CreateStoreSuccessResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Create Store Error Response',
    type: CreateStoreErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async createStore(
    @Body() data: CreateStoreRequestBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.storeService.createStore(data);
    res.status(code);
    return { code, ...response };
  }

  @Get()
  @ApiResponse({
    description: 'Get Single Store Success Response',
    type: GetAllStoresSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get Single Store Error Response',
    type: GetAllStoresErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getAllStores(
    @Query() condition: GetAllStoresQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.storeService.getAllStores(
      condition,
    );
    res.status(code);
    return { code, ...response };
  }

  @Get('/:storeId')
  @ApiResponse({
    description: 'Get Single Store Success Response',
    type: GetStoreSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get Single Store Error Response',
    type: GetStoreErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getStore(
    @Param() params: GetStoreParamsDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.storeService.getStore(
      params.storeId,
    );
    res.status(code);
    return { code, ...response };
  }
}
