import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse } from '@nestjs/swagger';

import { Brand } from '../../../entity/brand';
import { BrandService } from '../services/index';
import {
  CreateBrandRequestDto,
  CreateBrandSuccessResponseDto,
  CreateBrandErrorResponseDto,
} from '../dto/createBrandDto';

@Controller('brands')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Get('/')
  @ApiResponse({
    status: HttpStatus.OK
  })
  async getAllBrands(
    @Query('skip') skip: number,
    @Query('limit') limit: number,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.brandService.getAllBrands();
    res.status(code);
    return response;
  }

  @Get('/:id')
  async getBrand(
    @Param('id') brandId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.brandService.getBrandById(brandId);

    res.status(code);
    return response;
  }

  @Post('/create')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Brand was createdsuccessfully',
    type: CreateBrandSuccessResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error creating new brand',
    type: CreateBrandErrorResponseDto,
  })
  async createBrand(
    @Body() brand: CreateBrandRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.brandService.createBrand(brand);

    res.status(code);
    return response;
  }

  @Put('/:id')
  async updateBrand(
    @Param('id') brandId: string,
    @Body() featuresToUpdate: Brand,
    @Res({ passthrough: true })
    res: Response,
  ) {
    const { code, ...response } = await this.brandService.updateBrandById(
      brandId,
      featuresToUpdate,
    );

    res.status(code);
    return response;
  }

  @Delete('/:id')
  async deleteBrandById(
    @Param('id') brandId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.brandService.deleteBrandById(
      brandId,
    );

    res.status(code);
    return response;
  }
}
