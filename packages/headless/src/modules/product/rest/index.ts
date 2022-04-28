import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { Product } from '../../../entity/product';
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

  @Get('/:productId')
  async getProduct(@Param('productId') productId: string, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.productService.getProduct(productId);
    res.status(code);
    return response;
  }

  @Get()
  async getAllProducts(@Query('skip') skip: number, @Query('limit') limit: number, @Res({ passthrough: true }) res: Response,) {
    const { code, ...response } = await this.productService.getAllProducts(skip, limit,);
    res.status(code);
    return response;
  }
}
