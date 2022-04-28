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
  async getProduct(@Args('productId') productId: string){
    return await this.productService.getProduct(productId)
  }
  
  @Query()
  async getAllProducts(){
    return await this.productService.getAllProducts();
  }

  @Mutation()
  async createProduct(@Args('product') product: Product) {
    return await this.productService.createProduct(product);
  }

}
