import { Manufacturer } from 'src/entity/manufacturer';
import { ManufacturerService } from './../services/manufacturer.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guards/auth.guard';

@UseGuards(JwtAuthGuard)
@Resolver()
export class ManufacturerResolver {
  constructor(private manufacturerService: ManufacturerService) { }

  /**
   * Query Start
   */

  @Query()
  async getAllManufacturers(@Args('skip') skip: number, @Args('limit') limit: number) {
    return await this.manufacturerService.getAllManufacturers(skip, limit);
  }

  @Query()
  async getSingleManufacturer(@Args('manufacturerId') manufacturerId: string) {
    return await this.manufacturerService.getManufacturer(manufacturerId);
  }

  /**
  * Query End
  */

  /**
  * Mutation Start
  */

  @Mutation()
  async addManufacturer(@Args('manufacturer') manufacturer: Manufacturer) {
    return await this.manufacturerService.createManufacturer(manufacturer);
  }

  @Mutation()
  async updateManufacturer(@Args('manufacturerId') manufacturerId: string, @Args('manufacturer') manufacturer: Manufacturer) {
    return await this.manufacturerService.updateManufacturer(manufacturerId, manufacturer)
  }

  @Mutation()
  async deleteManufacturer(@Args('manufacturerId') manufacturerId: string) {
    return await this.manufacturerService.deleteManufacturer(manufacturerId)
  }

  /**
   * Mutation End
   */
}
