import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
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

        const { code, ...response } = await this.productService.createProduct(product);
        res.status(code);
        return response;
    }

    @Get('/:productId')
    async getSingleProduct(@Param('productId') productId: string, @Res({ passthrough: true }) res: Response) {

        console.log(productId);
        const { code, ...response } = await this.productService.getProduct(productId);
        res.status(code);
        return response;
    }

    @Get('/')
    async getAllProducts(@Res({ passthrough: true }) res: Response) {

        const { code, ...response } = await this.productService.getAllProducts();
        res.status(code);
        return response;
    }
}

