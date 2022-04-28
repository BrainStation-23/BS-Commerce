import { HttpStatus, Injectable } from '@nestjs/common';
import * as Joi from 'joi';
import { validateParams } from 'src/decorators/service.validator';
import { Helper } from 'src/helper/helper.interface';
import { ServiceErrorResponse, ServiceSuccessResponse, } from 'src/helper/serviceResponse/service.response.interface';
import { Product } from '../../../entity/product';
import { ProductRepository } from '../repositories';
import { ProductCreateSchema } from '../validators/product.create.validator';
@Injectable()
export class ProductService {
  constructor(private productRepo: ProductRepository, private helper: Helper) { }

  @validateParams({ schema: ProductCreateSchema })
  async createProduct(product: Product): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const newProduct = await this.productRepo.createProduct(product);
    if (!newProduct) {
      return this.helper.serviceResponse.errorResponse('Can\'t create new Product', null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return this.helper.serviceResponse.successResponse(newProduct);
  }

  @validateParams({ schema: Joi.string().required() })
  async getProduct(productId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const product = await this.productRepo.findProduct(productId);
    if (!product) {
      return this.helper.serviceResponse.errorResponse("Can't get the Product.", null, HttpStatus.BAD_REQUEST);
    }
    return this.helper.serviceResponse.successResponse(product);

  }

  @validateParams({ schema: Joi.number() }, { schema: Joi.number() },)
  async getAllProducts(skip?: number, limit?: number,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const products = await this.productRepo.findAllProduct(skip, limit);
    if (!products) {
      return this.helper.serviceResponse.errorResponse("Can't get All Products.", null, HttpStatus.BAD_REQUEST);
    }
    return this.helper.serviceResponse.successResponse(products);
  }
}
