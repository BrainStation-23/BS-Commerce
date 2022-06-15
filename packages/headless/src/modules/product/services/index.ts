import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { SearchCondition, UpdateProduct } from 'src/entity/product';
import { ProductRepository } from '../repositories';
import { CreateProductDto } from '../dto/createProduct.dto';
import {
  CreateProductResponse,
  CreateProductErrorMessages,
  GetProductResponse,
  GetProductErrorMessages,
  GetAllProductsResponse,
  GetAllProductsErrorMessages,
  GetProductCountResponse,
  GetProductCountErrorMessages,
  GetProductBySKUResponse,
  GetProductBySKUErrorMessages,
  DeleteProductResponse,
  DeleteProductSuccessMessage,
  UpdateProductResponse,
  UpdateProductErrorMessages,
  DeleteProductErrorMessages,
  GetProductsByConditionErrorMessages,
  GetProductsByConditionResponse,
  UpdateProductsForBrandResponse,
  UpdateProductsForBrandErrorMessages,
  GetCustomerAllProductsResponse,
  GetCustomerProductResponse,
} from 'models';
@Injectable()
export class ProductService {
  constructor(private productRepo: ProductRepository, private helper: Helper) { }

  async createProduct(product: CreateProductDto): Promise<CreateProductResponse> {
    const skuMatch = await this.productRepo.findProduct({ 'info.sku': product.info.sku });
    if (skuMatch) return this.helper.serviceResponse.errorResponse(CreateProductErrorMessages.PRODUCT_SKU_MATCH, null, HttpStatus.BAD_REQUEST);

    const friendlyPageNameMatch = await this.productRepo.findProduct({ 'meta.friendlyPageName': product.meta.friendlyPageName });
    if (friendlyPageNameMatch) return this.helper.serviceResponse.errorResponse(CreateProductErrorMessages.PRODUCT_FRIENDLY_PAGE_NAME_MATCH, null, HttpStatus.BAD_REQUEST);

    const newProduct = await this.productRepo.createProduct(product);
    if (!newProduct) return this.helper.serviceResponse.errorResponse(CreateProductErrorMessages.CAN_NOT_CREATE_NEW_PRODUCT, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(newProduct, HttpStatus.CREATED);
  }

  async getProduct(productId: string,): Promise<GetProductResponse> {
    const product = await this.productRepo.findProduct({ id: productId });
    if (!product) return this.helper.serviceResponse.errorResponse(GetProductErrorMessages.CAN_NOT_GET_PRODUCT, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(product, HttpStatus.OK);
  }

  async getAllProducts(condition: SearchCondition): Promise<GetAllProductsResponse> {
    const { skip, limit } = condition;
    const products = await this.productRepo.findAllProducts({}, skip, limit);
    if (!products?.length) return this.helper.serviceResponse.errorResponse(GetAllProductsErrorMessages.CAN_NOT_GET_ALL_PRODUCTS, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(products, HttpStatus.OK);
  }

  async getProductCount(): Promise<GetProductCountResponse> {
    const count = await this.productRepo.getProductCount({});
    if (!count) return this.helper.serviceResponse.errorResponse(GetProductCountErrorMessages.CAN_NOT_GET_PRODUCT_COUNT, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ count }, HttpStatus.OK);
  }

  async getProductBySKU(sku: string): Promise<GetProductBySKUResponse> {
    const product = await this.productRepo.findProduct({ 'info.sku': sku });
    if (!product) return this.helper.serviceResponse.errorResponse(GetProductBySKUErrorMessages.CAN_NOT_GET_PRODUCT, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(product, HttpStatus.OK);
  }

  async deleteProduct(productId: string,): Promise<DeleteProductResponse> {
    const product = await this.productRepo.deleteProduct(productId);
    if (!product) return this.helper.serviceResponse.errorResponse(DeleteProductErrorMessages.CAN_NOT_DELETE_PRODUCT, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ message: DeleteProductSuccessMessage.PRODUCT_DELETED_SUCCESSFUL }, HttpStatus.OK);
  }

  async updateProduct(product: UpdateProduct, productId: string): Promise<UpdateProductResponse> {
    const skuMatch = product.info?.sku && await this.productRepo.findProduct({ 'info.sku': product.info.sku, id: { $ne: productId } });
    if (skuMatch) return this.helper.serviceResponse.errorResponse(UpdateProductErrorMessages.PRODUCT_SKU_MATCH, null, HttpStatus.BAD_REQUEST);

    const friendlyPageNameMatch = product.meta?.friendlyPageName && await this.productRepo.findProduct({ 'meta.friendlyPageName': product.meta.friendlyPageName, id: { $ne: productId } });
    if (friendlyPageNameMatch) return this.helper.serviceResponse.errorResponse(UpdateProductErrorMessages.PRODUCT_FRIENDLY_PAGE_NAME_MATCH, null, HttpStatus.BAD_REQUEST);

    let getProduct: any = await this.productRepo.findProduct({ id: productId });
    if (!getProduct) return this.helper.serviceResponse.errorResponse(GetProductErrorMessages.CAN_NOT_GET_PRODUCT, null, HttpStatus.BAD_REQUEST);

    getProduct = {
      ...getProduct,
      info: {
        ...getProduct.info,
        ...product?.info
      },
      meta: {
        ...getProduct.meta,
        ...product?.meta
      },
      brands: [
        ...getProduct.brands || [],
        ...product?.brands || []
      ],
      tags: [
        ...getProduct.tags || [],
        ...product?.tags || []
      ],
      categories: [
        ...getProduct.categories || [],
        ...product?.categories || []
      ]
    }

    const updatedProduct = await this.productRepo.updateProduct(getProduct, productId);
    if (!updatedProduct) return this.helper.serviceResponse.errorResponse(UpdateProductErrorMessages.CAN_NOT_UPDATE_PRODUCT, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(updatedProduct, HttpStatus.OK);
  }

  async updateProductsForBrand(productIds: string[], brandId: string): Promise<UpdateProductsForBrandResponse> {
    const products = await this.productRepo.updateProductsForBrand(productIds, brandId);
    if (products.length <= 0) return this.helper.serviceResponse.errorResponse(UpdateProductsForBrandErrorMessages.CAN_NOT_UPDATE_PRODUCTS, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(products);
  }

  async getProductsByCondition(condition: SearchCondition): Promise<GetProductsByConditionResponse> {
    const { skip, limit, slug } = condition;
    const query: Record<string, any> = this.generateSearchQuery(condition);
    if (slug) {
      //dependent on category module
    }
    const [products, count] = await Promise.all([await this.productRepo.findProductsByCondition(query, skip, limit), await this.productRepo.getProductCount(query)]);
    if (products.length <= 0 || !count) return this.helper.serviceResponse.errorResponse(GetProductsByConditionErrorMessages.CAN_NOT_GET_PRODUCTS, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse({ products, count });
  }

  generateSearchQuery(condition: SearchCondition): object {
    const { brandId, categoryId, productName, isFeatured } = condition;
    let query: Record<string, any> = {};
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

  //Customer
  async getCustomerProduct(productId: string,): Promise<GetCustomerProductResponse> {
    const product = await this.productRepo.findProduct({ id: productId, published: true });
    if (!product) return this.helper.serviceResponse.errorResponse(GetProductErrorMessages.CAN_NOT_GET_PRODUCT, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(product, HttpStatus.OK);
  }

  async getCustomerAllProducts(condition: SearchCondition): Promise<GetCustomerAllProductsResponse> {
    const { skip, limit, ...rest } = condition;
    const products = await this.productRepo.findAllProducts({ ...rest, published: true }, skip, limit);
    if (!products?.length) return this.helper.serviceResponse.errorResponse(GetAllProductsErrorMessages.CAN_NOT_GET_ALL_PRODUCTS, null, HttpStatus.BAD_REQUEST);
    return this.helper.serviceResponse.successResponse(products, HttpStatus.OK);
  }
}
