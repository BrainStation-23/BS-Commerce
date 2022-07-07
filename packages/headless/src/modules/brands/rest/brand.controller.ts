import { ObjectValidationPipe } from '../validators/NestedObjectValidator.pipe';
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

import { Brand } from 'src/entity/brand';
import { BrandService } from '../services/index';
import { GetBrandByIdSuccessResponseDto, GetBrandByIdErrorResponseDto } from 'src/modules/brands/dto/getBrandByIdDto';
import { CreateBrandRequestDto, CreateBrandSuccessResponseDto, CreateBrandErrorResponseDto } from 'src/modules/brands/dto/createBrandDto';
import { GetAllBrandsErrorResponseDto, GetAllBrandsSuccessResponseDto } from 'src/modules/brands/dto/getAllBrandsDto';
import { UpdateBrandRequestdto } from 'src/modules/brands/dto/updateBrandDto';
import { DeleteBrandErrorResponseDto, DeleteBrandSuccessResponseDto } from 'src/modules/brands/dto/deleteBrandDto';
import { UpdateBrandErrorResponseDto, UpdateBrandSuccessResponseDto } from './../dto/updateBrandDto';

@Controller('brands')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Get('/')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All the brands were fetched successfully',
    type: GetAllBrandsSuccessResponseDto
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Brands could not be fetched ',
    type: GetAllBrandsErrorResponseDto
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
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Requested brand was fetched successfully',
    type: GetBrandByIdSuccessResponseDto
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Brand could not be fetched ',
    type: GetBrandByIdErrorResponseDto
  })
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
    description: 'Brand was created successfully',
    type: CreateBrandSuccessResponseDto
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error creating new brand',
    type: CreateBrandErrorResponseDto
  })
  async createBrand(
    @Body(ObjectValidationPipe) brand: CreateBrandRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.brandService.createBrand(brand);

    res.status(code);
    return response;
  }

  @Put('/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Brand was updated successfully',
    type: UpdateBrandSuccessResponseDto
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error updating existing brand',
    type: UpdateBrandErrorResponseDto
  })
  async updateBrand(
    @Param('id') brandId: string,
    @Body(ObjectValidationPipe) featuresToUpdate: UpdateBrandRequestdto,
    @Res({ passthrough: true })
    res: Response,
  ) {
    const response = await this.brandService.updateBrandById(
      brandId,
      featuresToUpdate,
    );

    res.status(response.code);
    return response;
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Brand was deleted successfully',
    type: DeleteBrandSuccessResponseDto
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Brand could not be deleted ',
    type: DeleteBrandErrorResponseDto
  })
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
