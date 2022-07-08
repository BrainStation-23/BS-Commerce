import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from 'src/entity/product';
import { RolesGuard } from 'src/guards/auth.guard';
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
  @UseGuards(new RolesGuard(['admin']))
  @Query()
  async getProduct(@Args('params') params: GetProductParamsDto) {
    return await this.productService.getProduct(params.productId)
  }

  @Query()
  @UseGuards(new RolesGuard(['admin']))
  async getAllProducts(@Args('query') query: GetAllProductsQueryDto) {
    return await this.productService.getAllProducts(query);
  }

  @Query()
  @UseGuards(new RolesGuard(['admin']))
  async getProductCount() {
    return await this.productService.getProductCount();
  }

  @Query()
  @UseGuards(new RolesGuard(['admin']))
  async getProductBySKU(@Args('params') params: GetProductBySKUParamsDto) {
    return await this.productService.getProductBySKU(params.sku)
  }

  @Query()
  @UseGuards(new RolesGuard(['admin']))
  async getProductsByCondition(@Args('condition') condition: GetProductsByConditionQueryDto) {
    return await this.productService.getProductsByCondition(condition);
  }

  @Mutation()
  @UseGuards(new RolesGuard(['admin']))
  async addProduct(@Args('product') product: CreateProductDto) {
    return await this.productService.createProduct(product);
  }

  @Mutation()
  @UseGuards(new RolesGuard(['admin']))
  async deleteProduct(@Args('params') params: DeleteProductParamsDto) {
    return await this.productService.deleteProduct(params.productId);
  }

  @Mutation()
  @UseGuards(new RolesGuard(['admin']))
  async updateProduct(@Args('product') product: Product, @Args('params') params: UpdateProductParamsDto) {
    return await this.productService.updateProduct(product, params.productId);
  }

  @Mutation()
  @UseGuards(new RolesGuard(['admin']))
  async updateProductsForBrand(@Args('data') data: updateProductsForBrandRequestDto) {
    return await this.productService.updateProductsForBrand(data.productIds, data.brandId);
  }
}
