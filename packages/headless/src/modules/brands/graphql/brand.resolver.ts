import { BrandService } from '../services';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  BrandInput,
  BrandModel,
  BrandResponse,
  SingleBrandResponse,
} from './brand.model';

@Resolver(() => BrandModel)
export class BrandResolver {
  constructor(private brandService: BrandService) {}

  @Query(() => SingleBrandResponse)
  async getBrand(
    @Args('brandId', { type: () => String, nullable: false }) BrandId: string,
  ) {
    return await this.brandService.getBrandById(BrandId);
  }

  @Query(() => BrandResponse)
  async getAllBrands(
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
  ) {
    return await this.brandService.getAllBrands(skip, limit);
  }

  @Mutation(() => SingleBrandResponse)
  async addNewBrand(
    @Args('brand', { type: () => BrandInput, nullable: false })
    brand: BrandInput,
  ) {
    return await this.brandService.createBrand(brand);
  }

  @Mutation(() => SingleBrandResponse)
  async deleteBrandById(
    @Args('brandId', { type: () => String, nullable: false }) brandId: string,
  ) {
    return await this.brandService.deleteBrandById(brandId);
  }

  @Mutation(() => SingleBrandResponse)
  async updateBrandById(
    @Args('brandId', { type: () => String, nullable: false }) brandId: string,
    @Args('brand', { type: () => BrandInput, nullable: false })
    brand: BrandInput,
  ) {
    return await this.brandService.updateBrandById(brandId, brand);
  }
}
