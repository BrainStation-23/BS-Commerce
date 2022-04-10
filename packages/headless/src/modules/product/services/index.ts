import { HttpStatus, Injectable } from '@nestjs/common';
import * as Joi from 'joi';
import { validateParam } from 'src/decorators/service.validator';
import { Helper } from 'src/helper/helper.interface';
import { ServiceErrorResponse, ServiceSuccessResponse } from 'src/helper/serviceResponse/service.response.interface';
import { Product } from '../../../entity/product';
import { ProductRepository } from '../repositories';
import { ProductCreateSchema } from '../validators/product.create.validator';
@Injectable()

export class ProductService {

    constructor(
        private productRepo: ProductRepository,
        private helper: Helper
    ) { }

    @validateParam(ProductCreateSchema)
    async createProduct(product: Product): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
        const isProductExist = await this.productRepo.findProduct(product.id);
        if (isProductExist) {

            return this.helper.serviceResponse.errorResponse('Product already exists', null, HttpStatus.BAD_REQUEST);
        }
        else {
            const newProduct = await this.productRepo.createProduct(product);
            return this.helper.serviceResponse.successResponse(newProduct);
        }
    }

    @validateParam(Joi.string().required())
    async getProduct(productId: string): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
        const foundProduct = await this.productRepo.findProduct(productId);
        if (foundProduct === null) {
            return this.helper.serviceResponse.errorResponse('Product not found', { product: ["Not found"] });
        }
        else {
            return this.helper.serviceResponse.successResponse(foundProduct);
        }
    }

    async getAllProducts(skip?: number, limit?: number): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
        const foundProduct = await this.productRepo.findAllProduct(skip, limit);
        return this.helper.serviceResponse.successResponse(foundProduct);
    }
}
