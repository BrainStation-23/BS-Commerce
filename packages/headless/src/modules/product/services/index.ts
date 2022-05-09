import { HttpStatus, Injectable } from '@nestjs/common';
import * as Joi from 'joi';
import { validateParams } from 'src/decorators/service.validator';
import { Helper } from 'src/helper/helper.interface';
import { ServiceErrorResponse, ServiceSuccessResponse, } from 'src/helper/serviceResponse/service.response.interface';
import { Product, SearchCondition } from 'src/entity/product';
import { ProductRepository } from '../repositories';
import { ProductSchema, ProductSearchSchema } from '../validators/product.create.validator';
@Injectable()
export class ProductService {
  constructor(private productRepo: ProductRepository, private helper: Helper) { }

  @validateParams({ schema: ProductSchema })
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

  @validateParams({ schema: ProductSearchSchema })
  async getAllProducts(condition: SearchCondition): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const { skip, limit } = condition;
    const products = await this.productRepo.findAllProducts(skip, limit);
    if (!products) {
      return this.helper.serviceResponse.errorResponse("Can't get All Products.", null, HttpStatus.BAD_REQUEST);
    }
    return this.helper.serviceResponse.successResponse(products);
  }

  async getProductCount(): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const count = await this.productRepo.getProductCount({});
    if (!count) {
      return this.helper.serviceResponse.errorResponse("Can't get Product Count.", null, HttpStatus.BAD_REQUEST);
    }
    return this.helper.serviceResponse.successResponse({ count });
  }

  @validateParams({ schema: Joi.string().required() })
  async getProductBySKU(sku: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const product = await this.productRepo.findProductBySKU(sku);
    if (!product) {
      return this.helper.serviceResponse.errorResponse("Can't get the Product.", null, HttpStatus.BAD_REQUEST);
    }
    return this.helper.serviceResponse.successResponse(product);
  }

  @validateParams({ schema: Joi.string().required() })
  async deleteProduct(productId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const product = await this.productRepo.deleteProduct(productId);
    if (!product) {
      return this.helper.serviceResponse.errorResponse("Can't delete this Product.", null, HttpStatus.BAD_REQUEST);
    }
    return this.helper.serviceResponse.successResponse(product);
  }

  @validateParams({ schema: ProductSchema }, { schema: Joi.string().required() })
  async updateProduct(product: Product, productId: string): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const updatedProduct = await this.productRepo.updateProduct(product, productId);
    if (!updatedProduct) {
      return this.helper.serviceResponse.errorResponse("Can't update this Product.", null, HttpStatus.BAD_REQUEST);
    }
    return this.helper.serviceResponse.successResponse(updatedProduct);
  }

  @validateParams({ schema: Joi.array().required() })
  async updateProductsForBands(productIds: string[]): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const products = await this.productRepo.findProductsByCondition({ id: { '$in': productIds } });
    if (products.length <= 0) {
      return this.helper.serviceResponse.errorResponse("Can't Get Products.", null, HttpStatus.BAD_REQUEST);
    }
    return this.helper.serviceResponse.successResponse(products);
  }

  @validateParams({ schema: ProductSearchSchema })
  async getProductsByCondition(condition: SearchCondition): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const { skip, limit, brandId, categoryId, productName, isFeatured } = condition;
    const query = this.generateSearchQuery({ brandId, categoryId, productName, isFeatured });
    const [products, count] = await Promise.all([await this.productRepo.findProductsByCondition(query, skip, limit), await this.productRepo.getProductCount(query)]);
    if (products.length <= 0 || !count) {
      return this.helper.serviceResponse.errorResponse("Can't get Products.", null, HttpStatus.BAD_REQUEST);
    }
    return this.helper.serviceResponse.successResponse({ products, count });
  }

  @validateParams({ schema: Joi.string().required() })
  async getProductsByBrand(brandId: string): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const products = await this.productRepo.findProductsByCondition({ brands: brandId });
    if (products.length <= 0) {
      return this.helper.serviceResponse.errorResponse("Can't get Products.", null, HttpStatus.BAD_REQUEST);
    }
    return this.helper.serviceResponse.successResponse(products);
  }

  @validateParams({ schema: ProductSearchSchema })
  generateSearchQuery(condition: SearchCondition): object {
    const { brandId, categoryId, productName, isFeatured } = condition;
    let query: any = {};
    if (brandId !== undefined && brandId !== '') {
      query.brands = brandId;
    }
    if (categoryId !== undefined && categoryId !== '') {
      query['categories.categoryId'] = categoryId;
    }
    if (productName !== undefined && productName !== '') {
      query['info.name'] = new RegExp(productName, 'i');
    }
    if (isFeatured !== undefined) {
      query['info.isFeatured'] = true;
    }
    return query;
  }

  @validateParams({ schema: ProductSearchSchema })
  async getProductsList(condition: SearchCondition): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const { slug, orderBy, skip, limit } = condition;
    let products: Product[] = [];
    if (slug) {
      //dependent on category module
    }
    else if (skip && limit) {
      products = await this.productRepo.getProductsList(skip, limit, {}, '',);
    } else {
      products = await this.productRepo.getProductsList(1, 9, {}, '',);
    }
    return this.helper.serviceResponse.successResponse(products);
  }

}
