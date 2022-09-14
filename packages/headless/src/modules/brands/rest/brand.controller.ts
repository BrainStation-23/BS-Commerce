import { ObjectValidationPipe } from '../validators/NestedObjectValidator.pipe';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Res,
  HttpStatus,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiBearerAuth, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { BrandService } from '../services/index';
import {
  GetBrandByIdSuccessResponseDto,
  GetBrandByIdErrorResponseDto,
} from 'src/modules/brands/rest/dto/getBrandByIdDto';
import {
  CreateBrandRequestDto,
  CreateBrandSuccessResponseDto,
  CreateBrandErrorResponseDto,
} from 'src/modules/brands/rest/dto/createBrandDto';
import {
  GetAllBrandsErrorResponseDto,
  GetAllBrandsSuccessResponseDto,
} from 'src/modules/brands/rest/dto/getAllBrandsDto';
import { UpdateBrandRequestdto } from 'src/modules/brands/rest/dto/updateBrandDto';
import {
  DeleteBrandErrorResponseDto,
  DeleteBrandSuccessResponseDto,
} from 'src/modules/brands/rest/dto/deleteBrandDto';
import {
  UpdateBrandErrorResponseDto,
  UpdateBrandSuccessResponseDto,
} from './dto/updateBrandDto';
import { RolesGuard } from 'src/guards/auth.guard';
import { UpdateValidationPipe } from '../validators/UpdateValidationPipe';

@ApiTags('Brand API')
@Controller('brands')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Get('/')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All the brands were fetched successfully',
    type: GetAllBrandsSuccessResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Brands could not be fetched ',
    type: GetAllBrandsErrorResponseDto,
  })
  @ApiQuery({
    name: 'skip',
    type: Number,
    description: 'skip paramter is Optional',
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: 'limit parameter is Optional',
    required: false,
  })
  async getAllBrands(
    @Query('skip') skip: number,
    @Query('limit') limit: number,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.brandService.getAllBrands(
      skip,
      limit,
    );
    res.status(code);
    return response;
  }

  @Get('brandName/:name')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Requested brand was fetched successfully',
    type: GetBrandByIdSuccessResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid Brand Name ',
    type: GetBrandByIdErrorResponseDto,
  })
  async getBrandByName(
    @Param('name') name: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.brandService.getBrandByName(name);

    res.status(code);
    return response;
  }

  @Get('/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Requested brand was fetched successfully',
    type: GetBrandByIdSuccessResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Brand could not be fetched ',
    type: GetBrandByIdErrorResponseDto,
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
  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Brand was created successfully',
    type: CreateBrandSuccessResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error creating new brand',
    type: CreateBrandErrorResponseDto,
  })
  async createBrand(
    @Body(ObjectValidationPipe) brand: CreateBrandRequestDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.brandService.createBrand(brand);

    res.status(code);
    return response;
  }

  @Patch('/:id')
  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Brand was updated successfully',
    type: UpdateBrandSuccessResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error updating existing brand',
    type: UpdateBrandErrorResponseDto,
  })
  async updateBrand(
    @Param('id') brandId: string,
    @Body(UpdateValidationPipe) featuresToUpdate: UpdateBrandRequestdto,
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

  @Delete('/:id')
  @UseGuards(new RolesGuard(['admin']))
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Brand was deleted successfully',
    type: DeleteBrandSuccessResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Brand could not be deleted ',
    type: DeleteBrandErrorResponseDto,
  })
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
