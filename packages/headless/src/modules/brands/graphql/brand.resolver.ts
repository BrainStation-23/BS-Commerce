import { Brand } from 'src/entity/brand';
import { BrandService } from '../services';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class BrandResolver {
  constructor(private brandService: BrandService) { }
  
  @Query()
  async getBrand(@Args('brandId') BrandId: string) {
    return await this.brandService.getBrandById(BrandId);
  }

  @Query()
  async getAllBrands(
    @Args('skip') skip: number,
    @Args('limit') limit: number
    ) {
      return await this.brandService.getAllBrands();
  }

  @Mutation()
  async addNewBrand(@Args('brand') brand: Brand) {
    return await this.brandService.createBrand(brand);
  }

  @Mutation()
  async deleteBrandById(@Args('brandId') brandId: string) {
    return await this.brandService.deleteBrandById(brandId);
  }

  @Mutation()
  async updateBrandById(
    @Args('brandId') brandId: string,
    @Args('brand') brand: Brand
  ) {
      return await this.brandService.updateBrandById(brandId, brand);
  }
}
