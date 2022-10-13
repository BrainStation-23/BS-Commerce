import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { StoreService } from '../services';
import {
  CreateStoreErrorResponseDto,
  CreateStoreRequestBodyDto,
  CreateStoreSuccessResponseDto,
} from './dto';
import { Response } from 'express';

@Controller('store')
@ApiTags('Store API')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Post()
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
}
