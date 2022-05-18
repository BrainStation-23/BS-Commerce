import { HttpStatus, Injectable } from '@nestjs/common';
import * as Joi from 'joi';
import { validateParams } from 'src/decorators/service.validator';
import { Helper } from 'src/helper/helper.interface';
import { ServiceErrorResponse, ServiceSuccessResponse, } from 'src/helper/serviceResponse/service.response.interface';
import { Product, SearchCondition } from 'src/entity/product';
import { ProductRepository } from '../repositories';
import { ProductSchema, ProductSearchSchema, ProductUpdateSchema } from '../validators/product.validator';
@Injectable()
export class ProductService {
  constructor(private productRepo: ProductRepository, private helper: Helper) { }

  @validateParams({ schema: ProductSchema })
  async createProduct(product: Product): Promise<ServiceSuccessResponse | ServiceErrorResponse> {

    const skuMatch = await this.productRepo.findProduct({ 'info.sku': product.info.sku });
    if (skuMatch) return this.helper.serviceResponse.errorResponse('Product sku Match. Please choose a different sku.', null, HttpStatus.BAD_REQUEST);

    const friendlyPageNameMatch = await this.productRepo.findProduct({ 'meta.friendlyPageName': product.meta.friendlyPageName });
    if (friendlyPageNameMatch) return this.helper.serviceResponse.errorResponse('Product friendlyPageName Match. Please choose a different friendlyPageName.', null, HttpStatus.BAD_REQUEST);

    const newProduct = await this.productRepo.createProduct(product);
    if (!newProduct) return this.helper.serviceResponse.errorResponse('Can\'t create new Product', null, HttpStatus.INTERNAL_SERVER_ERROR);
    return this.helper.serviceResponse.successResponse(newProduct);
  }

  @validateParams({ schema: Joi.string().required().label('productId') })
  async getProduct(productId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const product = await this.productRepo.findProduct({ id: productId });
    if (!product) return this.helper.serviceResponse.errorResponse('Can\'t get the Product.', null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(product);
  }

  @validateParams({ schema: ProductSearchSchema })
  async getAllProducts(condition: SearchCondition): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const { skip, limit } = condition;
    const products = await this.productRepo.findAllProducts(skip, limit);
    if (!products) return this.helper.serviceResponse.errorResponse('Can\'t get All Products.', null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(products);
  }

  async getProductCount(): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const count = await this.productRepo.getProductCount({});
    if (!count) return this.helper.serviceResponse.errorResponse('Can\'t get Product Count.', null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ count });
  }

  @validateParams({ schema: Joi.string().required().label('SKU') })
  async getProductBySKU(sku: string): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const product = await this.productRepo.findProduct({ 'info.sku': sku });
    if (!product) return this.helper.serviceResponse.errorResponse('Can\'t get the Product.', null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(product);
  }

  @validateParams({ schema: Joi.string().required().label('productId') })
  async deleteProduct(productId: string,): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const product = await this.productRepo.deleteProduct(productId);
    if (!product) return this.helper.serviceResponse.errorResponse('Can\'t delete this Product.', null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(product);
  }

  @validateParams({ schema: ProductUpdateSchema }, { schema: Joi.string().required().label('productId') })
  async updateProduct(product: Product, productId: string): Promise<ServiceSuccessResponse | ServiceErrorResponse> {

    const skuMatch = await this.productRepo.findProduct({ 'info.sku': product.info.sku });
    if (skuMatch) return this.helper.serviceResponse.errorResponse('Product sku Match. Please choose a different sku.', null, HttpStatus.BAD_REQUEST);

    const friendlyPageNameMatch = await this.productRepo.findProduct({ 'meta.friendlyPageName': product.meta.friendlyPageName });
    if (friendlyPageNameMatch) return this.helper.serviceResponse.errorResponse('Product friendlyPageName Match. Please choose a different friendlyPageName.', null, HttpStatus.BAD_REQUEST);

    const updatedProduct = await this.productRepo.updateProduct(product, productId);
    if (!updatedProduct) return this.helper.serviceResponse.errorResponse('Can\'t update this Product.', null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(updatedProduct);
  }

  @validateParams({ schema: Joi.array().required().label('productIds') }, { schema: Joi.string().required().label('brandId') })
  async updateProductsForBrand(productIds: string[], brandId: string): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const products = await this.productRepo.updateProductsForBrand(productIds, brandId);
    if (products.length <= 0) return this.helper.serviceResponse.errorResponse('Can\'t Get Products.', null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(products);
  }

  @validateParams({ schema: ProductSearchSchema })
  async getProductsByCondition(condition: SearchCondition): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const { skip, limit } = condition;
    const query = this.generateSearchQuery(condition);
    const [products, count] = await Promise.all([await this.productRepo.findProductsByCondition(query, skip, limit), await this.productRepo.getProductCount(query)]);
    if (products.length <= 0 || !count) return this.helper.serviceResponse.errorResponse('Can\'t get Products.', null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ products, count });
  }

  @validateParams({ schema: Joi.string().required().label('brandId') })
  async getProductsByBrand(brandId: string): Promise<ServiceSuccessResponse | ServiceErrorResponse> {
    const products = await this.productRepo.findProductsByCondition({ brands: brandId });
    if (products.length <= 0) return this.helper.serviceResponse.errorResponse('Can\'t get Products.', null, HttpStatus.BAD_REQUEST);
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
      query['categories.id'] = categoryId;
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
