import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesGuard } from 'src/guards/auth.guard';
import { Helper } from 'src/helper/helper.interface';
import { ProductService } from '../services';
import {
  BranchIdParamsInput,
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
  async getProduct(
    @Args() params: BranchIdParamsInput,
    @Args('productId') productId: string,
  ) {
    const res = await this.productService.getProduct(
      params.branchId,
      productId,
    );
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => ProductArrayResponse)
  @UseGuards(new RolesGuard(['admin']))
  async getAllProducts(
    @Args('query') query: GetAllProductsQueryInput,
    @Args() params: BranchIdParamsInput,
  ) {
    const res = await this.productService.getAllProducts(
      params.branchId,
      query,
    );
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => ProductCount)
  @UseGuards(new RolesGuard(['admin']))
  async getProductCount(@Args() params: BranchIdParamsInput) {
    const res = await this.productService.getProductCount(params.branchId);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => ProductResponse)
  @UseGuards(new RolesGuard(['admin']))
  async getProductBySKU(
    @Args() params: BranchIdParamsInput,
    @Args('sku') sku: string,
  ) {
    const res = await this.productService.getProductBySKU(params.branchId, sku);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => ProductArrayWithCountResponse)
  @UseGuards(new RolesGuard(['admin']))
  async getProductsByCondition(
    @Args() params: BranchIdParamsInput,
    @Args('condition') condition: SearchConditionInput,
  ) {
    const res = await this.productService.getProductsByCondition(
      params.branchId,
      condition,
    );
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
  async deleteProduct(
    @Args() params: BranchIdParamsInput,
    @Args('productId') productId: string,
  ) {
    const res = await this.productService.deleteProduct(
      params.branchId,
      productId,
    );
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => ProductResponse)
  @UseGuards(new RolesGuard(['admin']))
  async updateProduct(
    @Args() params: BranchIdParamsInput,
    @Args('productId') productId: string,
    @Args('product') product: UpdateProductInput,
  ) {
    const res = await this.productService.updateProduct(
      params.branchId,
      productId,
      product,
    );
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => ProductArrayResponse)
  @UseGuards(new RolesGuard(['admin']))
  async updateProductsForBrand(
    @Args() params: BranchIdParamsInput,
    @Args('data') data: UpdateProductsForBrandBody,
  ) {
    const res = await this.productService.updateProductsForBrand(
      params.branchId,
      data.productIds,
      data.brandId,
    );
    return this.helper.serviceResponse.graphqlResponse(res);
  }
}
