import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from 'src/entity/product';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';
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
  async getAllProducts(@Args('pagination') pagination: { limit?: number, skip?: number }) {
    const { limit, skip } = pagination;
    return await this.productService.getAllProducts(limit, skip);
  }

  @Query()
  async getProductCount() {
    return await this.productService.getProductCount();
  }

  @Query()
  async getProductBySKU(@Args('sku') sku: string) {
    return await this.productService.getProductBySKU(sku)
  }

  @Mutation()
  async createProduct(@Args('product') product: Product) {
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
}
