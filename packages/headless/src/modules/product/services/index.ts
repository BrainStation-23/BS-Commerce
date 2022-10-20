import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { SearchCondition, UpdateProduct } from 'src/entity/product';
import { ProductRepository } from '../repositories';
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
  GetCustomerAllHomePageProductsResponse,
  GetCustomizedProductsQuery,
  GetCustomizedProductsTagsEnum,
  GetCustomizedProductsResponse,
  GetCustomizedProductsErrorMessages,
  CreateProductRequest,
} from 'models';
@Injectable()
export class ProductService {
  constructor(private productRepo: ProductRepository, private helper: Helper) {}

  async createProduct(
    product: CreateProductRequest,
    branchId: string,
  ): Promise<CreateProductResponse> {
    const skuMatch = await this.productRepo.findProduct({
      'info.sku': product.info.sku,
    });
    if (skuMatch)
      return this.helper.serviceResponse.errorResponse(
        CreateProductErrorMessages.PRODUCT_SKU_MATCH,
        null,
        HttpStatus.BAD_REQUEST,
      );

    product.meta.friendlyPageName = await this.urlGenerate(product.info.name);

    const friendlyPageNameMatch = await this.productRepo.findProduct({
      'meta.friendlyPageName': product.meta.friendlyPageName,
    });
    if (friendlyPageNameMatch)
      return this.helper.serviceResponse.errorResponse(
        CreateProductErrorMessages.PRODUCT_FRIENDLY_PAGE_NAME_MATCH,
        null,
        HttpStatus.BAD_REQUEST,
      );
    const { ...rest } = product;
    const productBody = {
      ...rest,
      branchId,
    };
    const newProduct = await this.productRepo.createProduct(productBody);
    if (!newProduct)
      return this.helper.serviceResponse.errorResponse(
        CreateProductErrorMessages.CAN_NOT_CREATE_NEW_PRODUCT,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(
      newProduct,
      HttpStatus.CREATED,
    );
  }

  async getProduct(
    branchId: string,
    productId: string,
  ): Promise<GetProductResponse> {
    const product = await this.productRepo.findProduct({
      branchId,
      id: productId,
    });
    if (!product)
      return this.helper.serviceResponse.errorResponse(
        GetProductErrorMessages.CAN_NOT_GET_PRODUCT,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(product, HttpStatus.OK);
  }

  async urlGenerate(productName: string): Promise<string> {
    return productName
      .toLowerCase()
      .trim() // remove white spaces at the start and end of string
      .replace(/\s+/g, '-') // Replace spaces with dash
      .replace(/&/g, '-and-') // ampersand to and
      .replace(/[^\w\-]+/g, '') // convert any on-alphanumeric character to a dash
      .replace(/\-\-+/g, '-') // Replace multiple dash with single dash
      .replace(/^-+/, '') // Trim dash from start of text
      .replace(/-+$/, ''); // Trim dash from end of text
  }

  async getAllProducts(
    branchId: string,
    condition: SearchCondition,
  ): Promise<GetAllProductsResponse> {
    const { skip, limit } = condition;
    const products = await this.productRepo.findAllProducts(
      { branchId },
      skip,
      limit,
    );
    if (!products)
      return this.helper.serviceResponse.errorResponse(
        GetAllProductsErrorMessages.CAN_NOT_GET_ALL_PRODUCTS,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(products, HttpStatus.OK);
  }

  async getProductCount(branchId: string): Promise<GetProductCountResponse> {
    const count = await this.productRepo.getProductCount({ branchId });
    if (!count)
      return this.helper.serviceResponse.errorResponse(
        GetProductCountErrorMessages.CAN_NOT_GET_PRODUCT_COUNT,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(
      { count },
      HttpStatus.OK,
    );
  }

  async getProductBySKU(
    branchId: string,
    sku: string,
  ): Promise<GetProductBySKUResponse> {
    const product = await this.productRepo.findProduct({
      branchId,
      'info.sku': sku,
    });
    if (!product)
      return this.helper.serviceResponse.errorResponse(
        GetProductBySKUErrorMessages.CAN_NOT_GET_PRODUCT,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(product, HttpStatus.OK);
  }

  async deleteProduct(
    branchId: string,
    productId: string,
  ): Promise<DeleteProductResponse> {
    const product = await this.productRepo.deleteProduct({
      branchId,
      id: productId,
    });
    if (!product)
      return this.helper.serviceResponse.errorResponse(
        DeleteProductErrorMessages.CAN_NOT_DELETE_PRODUCT,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(
      { message: DeleteProductSuccessMessage.PRODUCT_DELETED_SUCCESSFUL },
      HttpStatus.OK,
    );
  }

  async updateProduct(
    branchId: string,
    productId: string,
    product: UpdateProduct,
  ): Promise<UpdateProductResponse> {
    const getProduct = await this.productRepo.findProduct({
      branchId,
      id: productId,
    });
    if (!getProduct)
      return this.helper.serviceResponse.errorResponse(
        GetProductErrorMessages.CAN_NOT_GET_PRODUCT,
        null,
        HttpStatus.BAD_REQUEST,
      );

    product.info = { ...getProduct.info, ...product.info };
    product.meta = { ...getProduct.meta, ...product.meta };

    const skuMatch =
      product.info?.sku &&
      (await this.productRepo.findProduct({
        'info.sku': product.info.sku,
        id: { $ne: productId },
      }));
    if (skuMatch)
      return this.helper.serviceResponse.errorResponse(
        UpdateProductErrorMessages.PRODUCT_SKU_MATCH,
        null,
        HttpStatus.BAD_REQUEST,
      );

    product.info && product.info?.name
      ? (product.meta.friendlyPageName = await this.urlGenerate(
          product.info.name,
        ))
      : null;

    const friendlyPageNameMatch =
      product.meta?.friendlyPageName &&
      (await this.productRepo.findProduct({
        'meta.friendlyPageName': product.meta.friendlyPageName,
        id: { $ne: productId },
      }));
    if (friendlyPageNameMatch)
      return this.helper.serviceResponse.errorResponse(
        UpdateProductErrorMessages.PRODUCT_FRIENDLY_PAGE_NAME_MATCH,
        null,
        HttpStatus.BAD_REQUEST,
      );

    const updatedProduct = await this.productRepo.updateProduct(
      branchId,
      productId,
      product,
    );
    if (!updatedProduct)
      return this.helper.serviceResponse.errorResponse(
        UpdateProductErrorMessages.CAN_NOT_UPDATE_PRODUCT,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(
      updatedProduct,
      HttpStatus.OK,
    );
  }

  async updateProductsForBrand(
    branchId: string,
    productIds: string[],
    brandId: string,
  ): Promise<UpdateProductsForBrandResponse> {
    const products = await this.productRepo.updateProductsForBrand(branchId, {
      productIds,
      brandId,
    });
    if (!products)
      return this.helper.serviceResponse.errorResponse(
        UpdateProductsForBrandErrorMessages.CAN_NOT_UPDATE_PRODUCTS,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(products);
  }

  async getProductsByCondition(
    branchId: string,
    condition: SearchCondition,
  ): Promise<GetProductsByConditionResponse> {
    const { skip, limit, slug, orderBy } = condition;
    const query: Record<string, any> =
      !slug && this.generateSearchQuery(branchId, condition);
    const products = slug
      ? await this.productRepo.getAllConditionalProducts(
          { branchId },
          {},
          slug,
          orderBy,
          skip,
          limit,
        )
      : await this.productRepo.findAllProducts(query, skip, limit);
    if (!products)
      return this.helper.serviceResponse.errorResponse(
        GetProductsByConditionErrorMessages.CAN_NOT_GET_PRODUCTS,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse({
      products,
      count: products.length || 0,
    });
  }

  generateSearchQuery(branchId: string, condition: SearchCondition): object {
    const { brand, categoryId, productName, isFeatured, manufacturer } =
      condition;
    const query: Record<string, any> = {};
    if (branchId !== undefined && branchId !== '') {
      query.branchId = branchId;
    }
    if (brand !== undefined && brand !== '') {
      query.brands = brand;
    }
    if (categoryId !== undefined && categoryId !== '') {
      query['categories.id'] = categoryId;
    }
    if (manufacturer !== undefined && manufacturer !== '') {
      query['manufacturer.name'] = manufacturer;
    }
    if (productName !== undefined && productName !== '') {
      query['info.name'] = new RegExp(productName, 'i');
    }
    if (isFeatured !== undefined) {
      query['info.isFeatured'] = isFeatured;
    }
    return query;
  }

  generateCustomerSearchQuery(condition: SearchCondition): object {
    const { brand, categoryId, productName, isFeatured, manufacturer } =
      condition;
    const query: Record<string, any> = {};
    if (brand !== undefined && brand !== '') {
      query.brands = brand;
    }
    if (categoryId !== undefined && categoryId !== '') {
      query['categories.id'] = categoryId;
    }
    if (manufacturer !== undefined && manufacturer !== '') {
      query['manufacturer.name'] = manufacturer;
    }
    if (productName !== undefined && productName !== '') {
      query['info.name'] = new RegExp(productName, 'i');
    }
    if (isFeatured !== undefined) {
      query['info.isFeatured'] = isFeatured;
    }
    return query;
  }

  //Customer
  async getCustomerProduct(
    productId: string,
  ): Promise<GetCustomerProductResponse> {
    const product = await this.productRepo.findCustomerProduct({
      id: productId,
      'info.published': true,
    });
    if (!product)
      return this.helper.serviceResponse.errorResponse(
        GetProductErrorMessages.CAN_NOT_GET_PRODUCT,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(product, HttpStatus.OK);
  }

  async getCustomerProductByURL(
    url: string,
  ): Promise<GetCustomerProductResponse> {
    const product = await this.productRepo.findCustomerProduct({
      'meta.friendlyPageName': url,
      'info.published': true,
    });
    if (!product)
      return this.helper.serviceResponse.errorResponse(
        GetProductErrorMessages.CAN_NOT_GET_PRODUCT,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(product, HttpStatus.OK);
  }

  async getCustomerAllHomePageProducts(): Promise<GetCustomerAllHomePageProductsResponse> {
    const products = await this.productRepo.findCustomerAllProducts({
      'info.showOnHomePage': true,
      'info.published': true,
    });
    if (!products)
      return this.helper.serviceResponse.errorResponse(
        GetAllProductsErrorMessages.CAN_NOT_GET_ALL_PRODUCTS,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(products, HttpStatus.OK);
  }

  async getCustomerProductsByCondition(
    condition: SearchCondition,
  ): Promise<GetCustomerAllProductsResponse> {
    const { skip, limit, slug, orderBy, maxPrice, minPrice } = condition;
    const query: Record<string, any> =
      this.generateCustomerSearchQuery(condition);
    const products = slug
      ? await this.productRepo.getAllConditionalProducts(
          { ...query, 'info.published': true },
          { maxPrice, minPrice },
          slug,
          orderBy,
          skip,
          limit,
        )
      : await this.productRepo.findCustomerAllProducts(
          { ...query, 'info.published': true },
          skip,
          limit,
          { maxPrice, minPrice },
          orderBy,
        );
    const productsCount = slug
      ? await this.productRepo.getAllConditionalProducts(
          { ...query, 'info.published': true },
          { maxPrice, minPrice },
          slug,
          orderBy,
        )
      : await this.productRepo.findCustomerAllProducts(
          { ...query, 'info.published': true },
          null,
          null,
          { maxPrice, minPrice },
          orderBy,
        );
    if (!products)
      return this.helper.serviceResponse.errorResponse(
        GetProductsByConditionErrorMessages.CAN_NOT_GET_PRODUCTS,
        null,
        HttpStatus.BAD_REQUEST,
      );

    const manufacturers = new Set();
    const brands = new Set();
    products.length &&
      products.forEach((product) => {
        product?.manufacturer && manufacturers.add(product?.manufacturer?.name);
        product.brands?.length &&
          product.brands?.forEach((brand) => {
            brands.add(brand);
          });
      });

    return this.helper.serviceResponse.successResponse(
      {
        products,
        manufacturers: new Array(...manufacturers),
        brands: new Array(...brands),
        totalProducts: productsCount.length,
      },
      HttpStatus.OK,
    );
  }

  async getCustomizedProducts(
    condition: GetCustomizedProductsQuery,
  ): Promise<GetCustomizedProductsResponse> {
    const { skip, limit, tag } = condition;
    const doesTagMatch = await this.productRepo.getTag({
      name: tag,
      isHomePageProductsTag: true,
    });
    if (!doesTagMatch)
      return this.helper.serviceResponse.errorResponse(
        GetCustomizedProductsErrorMessages.INVALID_TAG_NAME,
        null,
        HttpStatus.BAD_REQUEST,
      );

    const product = await this.getProductByTags(skip, limit, tag);
    if (!product)
      return this.helper.serviceResponse.errorResponse(
        GetCustomizedProductsErrorMessages.CAN_NOT_GET_CUSTOMIZED_PRODUCTS,
        null,
        HttpStatus.BAD_REQUEST,
      );
    return this.helper.serviceResponse.successResponse(product, HttpStatus.OK);
  }

  async getProductByTags(skip: number, limit: number, tag: string) {
    switch (tag) {
      case GetCustomizedProductsTagsEnum.TOP_SELLING_PRODUCTS:
        return await this.productRepo.getTopSellingProducts(skip, limit);
      case GetCustomizedProductsTagsEnum.NEW_ARRIVAL:
        return await this.productRepo.getNewArrivalProducts(skip, limit);
      default:
        return [];
    }
  }
}
