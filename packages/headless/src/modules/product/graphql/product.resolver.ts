import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Product } from 'src/entity/product';
import { ProductService } from '../services';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) { }

  /**
  * Mutation Start
  */

  @Mutation()
  async createProduct(@Args('product') product: Product) {
    return await this.productService.createProduct(product);
  }

  /**
   * Mutation End
   */
}
