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
} from '@nestjs/common';
import { Response } from 'express';
import { Helper } from 'src/helper/helper.interface';
import { Brand } from './../../../entity/brand';
import { Brandservice } from './../services/index';

@Controller('brands')
export class BrandController {
  constructor(private helper: Helper, private brandService: Brandservice) {}

  @Get('/')
  async getAllBrands(
    @Query('skip') skip: number,
    @Query('limit') limit: number,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.brandService.getBrands();
    res.status(code);
    return response;
  }

  @Get('/:id')
  async getBrandById(
    @Param('id') brandId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.brandService.getBrandById(brandId);

    res.status(code);
    return response;
  }

  @Post('/create')
  async addBrand(
    @Body() brand: Brand,
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
    const { code, ...response } = await this.brandService.editBrand(
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
