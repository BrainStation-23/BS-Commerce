import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesGuard } from 'src/guards/auth.guard';
import { Helper } from 'src/helper/helper.interface';
import { ProductService } from '../services';
import {
  GetAllProductsQueryInput,
  GetCustomerAllProductsQueryInput,
  GraphqlProductInput,
  ProductArrayResponse,
  ProductArrayWithBrandAndManufacturersResponse,
  ProductArrayWithCountResponse,
  ProductCount,
  ProductDeletedResponse,
  ProductResponse,
  SearchConditionInput,
  UpdateProductInput,
  UpdateProductsForBrandBody,
} from './product.model';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService, private helper: Helper) {}

  // Customer
  @Query(() => ProductResponse)
  async getCustomerProduct(@Args('productId') productId: string) {
    const res = await this.productService.getCustomerProduct(productId);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => ProductResponse)
  async getCustomerProductByURL(@Args('url') url: string) {
    const res = await this.productService.getCustomerProductByURL(url);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => ProductArrayWithBrandAndManufacturersResponse)
  async getCustomerAllProducts(
    @Args('condition') condition: GetCustomerAllProductsQueryInput,
  ) {
    const res = await this.productService.getCustomerProductsByCondition(
      condition,
    );
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => ProductArrayResponse)
  async getCustomerHomePageProducts() {
    const res = await this.productService.getCustomerAllHomePageProducts();
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  // Admin
  @Query(() => ProductResponse)
  @UseGuards(new RolesGuard(['admin']))
  async getProduct(@Args('productId') productId: string) {
    const res = await this.productService.getProduct(productId);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => ProductArrayResponse)
  @UseGuards(new RolesGuard(['admin']))
  async getAllProducts(@Args('query') query: GetAllProductsQueryInput) {
    const res = await this.productService.getAllProducts(query);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => ProductCount)
  @UseGuards(new RolesGuard(['admin']))
  async getProductCount() {
    const res = await this.productService.getProductCount();
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => ProductResponse)
  @UseGuards(new RolesGuard(['admin']))
  async getProductBySKU(@Args('sku') sku: string) {
    const res = await this.productService.getProductBySKU(sku);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => ProductArrayWithCountResponse)
  @UseGuards(new RolesGuard(['admin']))
  async getProductsByCondition(
    @Args('condition') condition: SearchConditionInput,
  ) {
    const res = await this.productService.getProductsByCondition(condition);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => ProductResponse)
  @UseGuards(new RolesGuard(['admin']))
  async createProduct(
    @Args('product') product: GraphqlProductInput,
    @Args('branchId') branchId: string,
  ) {
    const res = await this.productService.createProduct(product, branchId);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => ProductDeletedResponse)
  @UseGuards(new RolesGuard(['admin']))
  async deleteProduct(@Args('productId') productId: string) {
    const res = await this.productService.deleteProduct(productId);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => ProductResponse)
  @UseGuards(new RolesGuard(['admin']))
  async updateProduct(
    @Args('product') product: UpdateProductInput,
    @Args('productId') productId: string,
  ) {
    const res = await this.productService.updateProduct(product, productId);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => ProductArrayResponse)
  @UseGuards(new RolesGuard(['admin']))
  async updateProductsForBrand(@Args('data') data: UpdateProductsForBrandBody) {
    const res = await this.productService.updateProductsForBrand(
      data.productIds,
      data.brandId,
    );
    return this.helper.serviceResponse.graphqlResponse(res);
  }
}
