import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Product, SearchCondition } from 'src/entity/product';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import {
  CreateProductDto,
  CreateProductErrorResponseDto,
  CreateProductSuccessResponseDto,
  DeleteProductErrorResponseDto,
  DeleteProductSuccessResponseDto,
  GetAllProductsErrorResponseDto,
  GetAllProductsQueryDto,
  GetAllProductsSuccessResponseDto,
  GetProductBySKUErrorResponseDto,
  GetProductBySKUSuccessResponseDto,
  GetProductCountErrorResponseDto,
  GetProductCountSuccessResponseDto,
  GetProductErrorResponseDto,
  GetProductSuccessResponseDto,
} from '../dto';
import { ProductService } from '../services';

@ApiTags('Product API')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Get()
  @ApiQuery({ type: GetAllProductsQueryDto })
  @ApiResponse({
    description: 'Get All Product Success Response',
    type: GetAllProductsSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get All Product Error Response',
    type: GetAllProductsErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getAllProducts(@Query() data: SearchCondition, @Res({ passthrough: true }) res: Response) {
    const { skip, limit } = data;
    const { code, ...response } = await this.productService.getAllProducts({ skip, limit });
    res.status(code);
    return response;
  }

  @Get('count')
  @ApiResponse({
    description: 'Get All Product Count Success Response',
    type: GetProductCountSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get All Product Count Error Response',
    type: GetProductCountErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getProductCount(@Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getProductCount();
    res.status(code);
    return response;
  }

  @Get('sku/:sku')
  @ApiParam({ name: 'sku' })
  @ApiResponse({
    description: 'Get Product by SKU Success Response',
    type: GetProductBySKUSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get Product by SKU Error Response',
    type: GetProductBySKUErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getProductBySKU(@Param('sku') sku: string, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getProductBySKU(sku);
    res.status(code);
    return response;
  }

  @Get('condition')
  async getProductsByCondition(
    @Query() condition: SearchCondition,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.productService.getProductsByCondition(condition);
    res.status(code);
    return response;
  }

  @Get('list')
  async getProductsList(
    @Query() condition: SearchCondition,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.productService.getProductsList(condition);
    res.status(code);
    return response;
  }

  @Get('brand/:brandId')
  async getProductsByBrand(@Param('brandId') brandId: string, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getProductsByBrand(brandId);
    res.status(code);
    return response;
  }

  @Get(':productId')
  @ApiParam({ name: 'productId' })
  @ApiResponse({
    description: 'Get Product Success Response',
    type: GetProductSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get Product Error Response',
    type: GetProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getProduct(@Param('productId') productId: string, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getProduct(productId);
    res.status(code);
    return response;
  }

  @Post()
  @ApiResponse({
    description: 'Create Product Success Response',
    type: CreateProductSuccessResponseDto,
    status: HttpStatus.CREATED
  })
  @ApiResponse({
    description: 'Create Product Error Response',
    type: CreateProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async addProduct(@Body() product: CreateProductDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.createProduct(product);
    res.status(code);
    return response;
  }

  @Delete(':productId')
  @ApiResponse({
    description: 'Delete Product Success Response',
    type: DeleteProductSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Delete Product Error Response',
    type: DeleteProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async deleteProduct(@Param('productId') productId: string, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.deleteProduct(productId);
    res.status(code);
    return response;
  }

  @Patch('brand')
  async updateProductsForBrand(
    @Body('productIds') productIds: string[],
    @Body('brandId') brandId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.productService.updateProductsForBrand(productIds, brandId);
    res.status(code);
    return response;
  }

  @Patch(':productId')
  async updateProduct(@Body() product: Product, @Param('productId') productId: string, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.updateProduct(product, productId);
    res.status(code);
    return response;
  }
}
