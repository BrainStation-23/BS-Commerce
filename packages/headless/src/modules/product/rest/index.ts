import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Product, SearchCondition } from 'src/entity/product';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { ProductService } from '../services';
@UseGuards(JwtAuthGuard)
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Get()
  async getAllProducts(@Query('skip') skip: number, @Query('limit') limit: number, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.productService.getAllProducts({ skip, limit });
    res.status(code);
    return response;
  }

  @Get('count')
  async getProductCount(@Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getProductCount();
    res.status(code);
    return response;
  }

  @Get('sku/:sku')
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
  async getProduct(@Param('productId') productId: string, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.getProduct(productId);
    res.status(code);
    return response;
  }

  @Post()
  async addProduct(@Body() product: Product, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.createProduct(product);
    res.status(code);
    return response;
  }

  @Delete(':productId')
  async deleteProduct(@Param('productId') productId: string, @Res({ passthrough: true }) res: Response) {
    const { code, ...response } = await this.productService.deleteProduct(productId);
    res.status(code);
    return response;
  }

  @Patch('brand')
  async updateProductsForBands(
    @Body('productIds') productIds: string[],
    @Body('brandId') brandId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } = await this.productService.updateProductsForBands(productIds, brandId);
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
