import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { ProductService } from '../services';
import {
  CreateProductDto,
  CreateProductErrorResponseDto,
  CreateProductSuccessResponseDto,
  DeleteProductErrorResponseDto,
  DeleteProductParamsDto,
  DeleteProductSuccessResponseDto,
  GetAllHomePageProductsErrorResponseDto,
  GetAllHomePageProductsSuccessResponseDto,
  GetAllProductsErrorResponseDto,
  GetAllProductsQueryDto,
  GetAllProductsSuccessResponseDto,
  GetCustomerAllProductsErrorResponseDto,
  GetCustomerAllProductsQueryDto,
  GetCustomerAllProductsSuccessResponseDto,
  GetCustomerProductErrorResponseDto,
  GetCustomerProductParamsDto,
  GetCustomerProductSuccessResponseDto,
  GetProductBySKUErrorResponseDto,
  GetProductBySKUParamsDto,
  GetProductBySKUSuccessResponseDto,
  GetProductCountErrorResponseDto,
  GetProductCountSuccessResponseDto,
  GetProductErrorResponseDto,
  GetProductParamsDto,
  GetProductsByConditionErrorResponseDto,
  GetProductsByConditionQueryDto,
  GetProductsByConditionSuccessResponseDto,
  GetProductSuccessResponseDto,
  UpdateProductDto,
  UpdateProductErrorResponseDto,
  UpdateProductParamsDto,
  UpdateProductsForBrandErrorResponseDto,
  updateProductsForBrandRequestDto,
  UpdateProductsForBrandSuccessResponseDto,
  UpdateProductSuccessResponseDto,
} from '../dto';

@ApiTags('Product API')
@Controller()
export class ProductController {
  constructor(private productService: ProductService) { }

  // Customer
  @Get('customer/products')
  @ApiResponse({
    description: 'Get All Products Success Response',
    type: GetCustomerAllProductsSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get All Products Error Response',
    type: GetCustomerAllProductsErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getCustomerAllProducts(@Query() query: GetCustomerAllProductsQueryDto, @Res({ passthrough: true }) res: Response) {
    const { skip, limit } = query;
    const { code, ...response } = await this.productService.getCustomerAllProducts({ skip, limit });
    res.status(code);
    return { code, ...response };
  }

  @Get('customer/products/:productId')
  @ApiResponse({
    description: 'Get Product Success Response',
    type: GetCustomerProductSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get Product Error Response',
    type: GetCustomerProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getCustomerProduct(@Param() params: GetCustomerProductParamsDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getCustomerProduct(params.productId);
    res.status(code);
    return { code, ...response };
  }

  @Get('customer/home-page-products')
  @ApiResponse({
    description: 'Get All Home Page Products Success Response',
    type: GetAllHomePageProductsSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get All Home Page Products Error Response',
    type: GetAllHomePageProductsErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getCustomerHomePageProducts(@Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getCustomerAllHomePageProducts();
    res.status(code);
    return { code, ...response };
  }

  // Admin
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('products')
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
  async getAllProducts(@Query() query: GetAllProductsQueryDto, @Res({ passthrough: true }) res: Response) {
    const { skip, limit } = query;
    const { code, ...response } = await this.productService.getAllProducts({ skip, limit });
    res.status(code);
    return { code, ...response };
  }


  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('products/count')
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
    return { code, ...response };
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('products/sku/:sku')
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
  async getProductBySKU(@Param() params: GetProductBySKUParamsDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getProductBySKU(params.sku);
    res.status(code);
    return { code, ...response };
  }


  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('products/condition')
  @ApiResponse({
    description: 'Get Products By Condition Success Response',
    type: GetProductsByConditionSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Get Products By Condition Error Response',
    type: GetProductsByConditionErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async getProductsByCondition(
    @Query() condition: GetProductsByConditionQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.productService.getProductsByCondition(condition);
    res.status(code);
    return { code, ...response };
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('products/:productId')
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
  async getProduct(@Param() params: GetProductParamsDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getProduct(params.productId);
    res.status(code);
    return { code, ...response };
  }

  @Post('product')
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
    return { code, ...response };
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete('products/:productId')
  @ApiParam({ name: 'productId' })
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
  async deleteProduct(@Param() params: DeleteProductParamsDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.deleteProduct(params.productId);
    res.status(code);
    return { code, ...response };
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Patch('products/brand')
  @ApiResponse({
    description: 'Update Products For Brand Success Response',
    type: UpdateProductsForBrandSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Update Products For Brand Error Response',
    type: UpdateProductsForBrandErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async updateProductsForBrand(@Body() data: updateProductsForBrandRequestDto, @Res({ passthrough: true }) res: Response,) {
    const { productIds, brandId } = data;
    const { code, ...response } = await this.productService.updateProductsForBrand(productIds, brandId);
    res.status(code);
    return { code, ...response };
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Patch('products/:productId')
  @ApiParam({ name: 'productId' })
  @ApiResponse({
    description: 'Update Product Success Response',
    type: UpdateProductSuccessResponseDto,
    status: HttpStatus.OK
  })
  @ApiResponse({
    description: 'Update Product Error Response',
    type: UpdateProductErrorResponseDto,
    status: HttpStatus.BAD_REQUEST
  })
  async updateProduct(@Body() product: UpdateProductDto, @Param() params: UpdateProductParamsDto, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.updateProduct(product, params.productId);
    res.status(code);
    return { code, ...response };
  }
}
