import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { Product } from '../../../entity/product';
import { ProductService } from '../services';

@Controller('products')

export class ProductController {

    constructor(
        private productService: ProductService
    ) { }

    @Post('/')
    async addProduct(@Body() product: Product, @Res({ passthrough: true }) res: Response) {
        const { code, ...response } = await this.productService.createProduct(product, 20);
        res.status(code);
        return response;
    }

    @Get('/:productId')
    async getSingleProduct(@Param('productId') productId: string, @Res({ passthrough: true }) res: Response) {
        const { code, ...response } = await this.productService.getProduct(productId);
        res.status(code);
        return response;
    }

    @Get('/')
    async getAllProducts(@Query('skip') skip: number, @Query('limit') limit: number, @Res({ passthrough: true }) res: Response) {
        const { code, ...response } = await this.productService.getAllProducts(skip, limit);
        res.status(code);
        return response;
    }
}

