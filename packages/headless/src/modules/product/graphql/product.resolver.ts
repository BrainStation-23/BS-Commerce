import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from 'src/entity/product';
import { JwtAuthGuard } from 'src/modules/admin-auth/guards/auth.guard';
import {
  DeleteProductParamsDto,
  GetAllProductsQueryDto,
  GetProductBySKUParamsDto,
  GetProductParamsDto,
  GetProductsByConditionQueryDto,
  UpdateProductParamsDto,
  updateProductsForBrandRequestDto
} from '../dto';
import { CreateProductDto } from '../dto/createProduct.dto';
import { ProductService } from '../services';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) { }

  // Customer
  @Query()
  async getCustomerProduct(@Args('params') params: GetProductParamsDto) {
    return await this.productService.getCustomerProduct(params.productId)
  }

  @Query()
  async getCustomerAllProducts(@Args('query') query: GetAllProductsQueryDto) {
    return await this.productService.getCustomerAllProducts(query);
  }

  // Admin
  @UseGuards(JwtAuthGuard)
  @Query()
  async getProduct(@Args('params') params: GetProductParamsDto) {
    return await this.productService.getProduct(params.productId)
  }

  @Query()
  @UseGuards(JwtAuthGuard)
  async getAllProducts(@Args('query') query: GetAllProductsQueryDto) {
    return await this.productService.getAllProducts(query);
  }

  @Query()
  @UseGuards(JwtAuthGuard)
  async getProductCount() {
    return await this.productService.getProductCount();
  }

  @Query()
  @UseGuards(JwtAuthGuard)
  async getProductBySKU(@Args('params') params: GetProductBySKUParamsDto) {
    return await this.productService.getProductBySKU(params.sku)
  }

  @Query()
  @UseGuards(JwtAuthGuard)
  async getProductsByCondition(@Args('condition') condition: GetProductsByConditionQueryDto) {
    return await this.productService.getProductsByCondition(condition);
  }

  @Mutation()
  @UseGuards(JwtAuthGuard)
  async addProduct(@Args('product') product: CreateProductDto) {
    return await this.productService.createProduct(product);
  }

  @Mutation()
  @UseGuards(JwtAuthGuard)
  async deleteProduct(@Args('params') params: DeleteProductParamsDto) {
    return await this.productService.deleteProduct(params.productId);
  }

  @Mutation()
  @UseGuards(JwtAuthGuard)
  async updateProduct(@Args('product') product: Product, @Args('params') params: UpdateProductParamsDto) {
    return await this.productService.updateProduct(product, params.productId);
  }

  @Mutation()
  @UseGuards(JwtAuthGuard)
  async updateProductsForBrand(@Args('data') data: updateProductsForBrandRequestDto) {
    return await this.productService.updateProductsForBrand(data.productIds, data.brandId);
  }
}
