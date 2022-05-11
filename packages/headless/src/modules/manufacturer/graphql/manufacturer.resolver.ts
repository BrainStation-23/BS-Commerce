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
   * @Graphql
   * Query getAllManufacturers calls form manufacturer.graphql file
   * @param skip Optional
   * @param limit Optional
   * @returns {Object} Object { error code data}
   */
  @Query()
  async getAllManufacturers(@Args('skip') skip: number, @Args('limit') limit: number) {
    return await this.manufacturerService.getAllManufacturers(skip, limit);
  }

  /**
   * @Graphql
   * Query getManufacturer calls form manufacturer.graphql file
   * @param manufacturerId 
   * @returns {Object} Object { error code data}
   */
  @Query()
  async getManufacturer(@Args('manufacturerId') manufacturerId: string) {
    return await this.manufacturerService.getManufacturer(manufacturerId);
  }

  /**
   * @Graphql
   * Mutation addManufacturer calls form manufacturer.graphql file
   * @param manufacturer 
   * @returns {Object} Object { error code data}
   */
  @Mutation()
  async addManufacturer(@Args('manufacturer') manufacturer: Manufacturer) {
    return await this.manufacturerService.addManufacturer(manufacturer);
  }

  /**
   * @Graphql
   * Mutation updateManufacturer calls form manufacturer.graphql file
   * @param manufacturerId 
   * @param manufacturer 
   * @returns {Object} Object { error code data}
   */
  @Mutation()
  async updateManufacturer(@Args('manufacturerId') manufacturerId: string, @Args('manufacturer') manufacturer: Manufacturer) {
    return await this.manufacturerService.updateManufacturer(manufacturerId, manufacturer)
  }

  /**
   * @Graphql
   * Mutation updateManufacturer calls form manufacturer.graphql file
   * @param manufacturerId 
   * @returns {Object} Object { error code data}
   */
  @Mutation()
  async deleteManufacturer(@Args('manufacturerId') manufacturerId: string) {
    return await this.manufacturerService.deleteManufacturer(manufacturerId)
  }
}
