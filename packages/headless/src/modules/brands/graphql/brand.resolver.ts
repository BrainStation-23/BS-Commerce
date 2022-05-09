import { Brand } from 'src/entity/brand';
import { Item } from 'src/entity/wishList';
import { BrandService } from '../services';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class BrandResolver {
  constructor(private BrandService: BrandService) { }
  
  @Query()
  async getBrand(@Args('id') BrandId: string) {
    return await this.BrandService.getBrandById(BrandId);
  }

  @Query()
  async getAllBrands() {
    return await this.BrandService.getAllBrands();
  }

  @Mutation()
  async addNewBrand(
    @Args() brand: Brand,
  ) {
    return await this.BrandService.createBrand(brand);
  }

  @Mutation()
  async deleteBrandById(@Args('id') brandId: string) {
    return await this.BrandService.deleteBrandById(brandId);
  }

  @Mutation()
  async updateBrandById(
    @Args('id') brandId: string,
    @Args() brand: Brand
  ) {
    return await this.BrandService.updateBrandById(brandId, brand);
  }

}
