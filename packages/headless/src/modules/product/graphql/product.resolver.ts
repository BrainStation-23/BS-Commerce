import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from 'src/entity/product';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
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

@UseGuards(JwtAuthGuard)
@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) { }

  @Query()
  async getProduct(@Args('params') params: GetProductParamsDto) {
    return await this.productService.getProduct(params.productId)
  }

  @Query()
  async getAllProducts(@Args('query') query: GetAllProductsQueryDto) {
    return await this.productService.getAllProducts(query);
  }

  @Query()
  async getProductCount() {
    return await this.productService.getProductCount();
  }

  @Query()
  async getProductBySKU(@Args('params') params: GetProductBySKUParamsDto) {
    return await this.productService.getProductBySKU(params.sku)
  }

  @Query()
  async getProductsByCondition(@Args('condition') condition: GetProductsByConditionQueryDto) {
    return await this.productService.getProductsByCondition(condition);
  }

  @Mutation()
  async addProduct(@Args('product') product: CreateProductDto) {
    return await this.productService.createProduct(product);
  }

  @Mutation()
  async deleteProduct(@Args('params') params: DeleteProductParamsDto) {
    return await this.productService.deleteProduct(params.productId);
  }

  @Mutation()
  async updateProduct(@Args('product') product: Product, @Args('params') params: UpdateProductParamsDto) {
    return await this.productService.updateProduct(product, params.productId);
  }

  @Mutation()
  async updateProductsForBrand(@Args('data') data: updateProductsForBrandRequestDto) {
    return await this.productService.updateProductsForBrand(data.productIds, data.brandId);
  }
}
