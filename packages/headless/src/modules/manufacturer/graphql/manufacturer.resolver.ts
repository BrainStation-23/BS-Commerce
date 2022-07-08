import { UpdateManufacturerDto } from './../dto/updateManufacturer.dto';
import { GetManufacturersQueryDto } from './../dto/getManufacturers.dto';
import { CreateManufacturerDto } from '../dto/createManufacturer.dto';
import { Manufacturer } from 'src/entity/manufacturer';
import { ManufacturerService } from './../services/manufacturer.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/auth.guard';

@UseGuards(new RolesGuard(['admin']))
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
  async getAllManufacturers(@Args() query: GetManufacturersQueryDto) {
    return await this.manufacturerService.getAllManufacturers(query);
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
  async addManufacturer(@Args('manufacturer') manufacturer: CreateManufacturerDto) {
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
  async updateManufacturer(@Args('manufacturerId') manufacturerId: string, @Args('manufacturer') manufacturer: UpdateManufacturerDto) {
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
