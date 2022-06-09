import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product, SearchCondition } from 'src/entity/product';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
import { CreateProductDto } from '../dto/createProduct.dto';
import { ProductService } from '../services';

@UseGuards(JwtAuthGuard)
@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) { }

  @Query()
  async getProduct(@Args('productId') productId: string) {
    return await this.productService.getProduct(productId)
  }

  @Query()
  async getAllProducts(@Args('condition') condition: SearchCondition) {
    return await this.productService.getAllProducts(condition);
  }

  @Query()
  async getProductCount() {
    return await this.productService.getProductCount();
  }

  @Query()
  async getProductBySKU(@Args('sku') sku: string) {
    return await this.productService.getProductBySKU(sku)
  }

  @Query()
  async getProductsByCondition(@Args('condition') condition: SearchCondition) {
    return await this.productService.getProductsByCondition(condition);
  }

  @Query()
  async getProductsByBrand(@Args('brandId') brandId: string) {
    return await this.productService.getProductsByBrand(brandId);
  }

  @Query()
  async getProductsList(@Args('condition') condition: SearchCondition) {
    return await this.productService.getProductsList(condition);
  }

  @Mutation()
  async createProduct(@Args('product') product: CreateProductDto) {
    return await this.productService.createProduct(product);
  }

  @Mutation()
  async deleteProduct(@Args('productId') productId: string) {
    return await this.productService.deleteProduct(productId);
  }

  @Mutation()
  async updateProduct(@Args('product') product: Product, @Args('productId') productId: string) {
    return await this.productService.updateProduct(product, productId);
  }

  @Mutation()
  async updateProductsForBrand(@Args('productIds') productIds: string[], @Args('brandId') brandId: string) {
    return await this.productService.updateProductsForBrand(productIds, brandId);
  }
}
