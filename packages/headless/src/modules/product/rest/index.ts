import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { Product } from 'src/entity/product';
import { ProductService } from '../services';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Post()
  async addProduct(@Body() product: Product, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.productService.createProduct(product);
    res.status(code);
    return response;
  }

  @Get()
  async getAllProducts(@Query('skip') skip: number = 10, @Query('limit') limit: number = 0, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.productService.getAllProducts(skip, limit);
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
  async getProductBySKU(@Param('sku') sku: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.productService.getProductBySKU(sku);
    res.status(code);
    return response;
  }

  @Delete(':productId')
  async deleteProduct(@Param('productId') productId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.productService.deleteProduct(productId);
    res.status(code);
    return response;
  }

  @Patch(':productId')
  async updateProduct(@Body() product: Product, @Param('productId') productId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.productService.updateProduct(product, productId);
    res.status(code);
    return response;
  }

  @Get('condition')
  async getProductsByCondition(
    @Query('skip') skip: number,
    @Query('limit') limit: number,
    @Query('brandId') brandId: string,
    @Query('categoryId') categoryId: string,
    @Query('productName') productName: string,
    @Query('isFeatured') isFeatured: boolean,
    @Res({ passthrough: true }) res: Response
  ) {
    const { code, ...response } = await this.productService.getProductsByCondition({ skip, limit, brandId, categoryId, productName, isFeatured });
    res.status(code);
    return response;
  }

  @Get(':productId')
  async getProduct(@Param('productId') productId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.productService.getProduct(productId);
    res.status(code);
    return response;
  }
}
