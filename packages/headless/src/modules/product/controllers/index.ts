import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { Product } from '../../../entity/product';
import { ProductService } from '../services';

@Controller('products')

export class ProductController {
    constructor(
        private productService: ProductService,
        private helper: Helper
    ) { }
    @Post('/')
    async addProduct(@Body() product: Product) {

        console.log(product);
        const response = await this.productService.createProduct(product);

        if (response) {
            return this.helper.apiResponse.successResponse(response);
        }
        else {
            return this.helper.apiResponse.errorResponse('CAN\'T_CREATE_PRODUCT');
        }
    }
    @Get('/:productId')
    async getSingleProduct(@Param('productId') productId: string) {

        console.log(productId);
        const response = await this.productService.getProduct(productId);

        if (response) {
            return this.helper.apiResponse.successResponse(response);
        }
        else {
            return this.helper.apiResponse.errorResponse('PRODUCT_NOT_FOUND');
        }
    }
    @Get('/')
    async getAllProducts() {

        const response = await this.productService.getAllProducts();

        if (response) {
            return this.helper.apiResponse.successResponse(response);
        }
        else {
            return this.helper.apiResponse.errorResponse('PRODUCT_NOT_FOUND');
        }
    }
}

