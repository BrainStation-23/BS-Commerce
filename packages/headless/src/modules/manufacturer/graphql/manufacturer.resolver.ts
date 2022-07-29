import { ManufacturerService } from './../services/manufacturer.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/auth.guard';
import {
  AllManufacturersResponse,
  ManufacturerInput,
  ManufacturerResponse,
  ManufacturerSchemaGql,
  ManufacturersQuery,
} from './manufacturer.model';

@UseGuards(new RolesGuard(['admin']))
@Resolver((of) => ManufacturerSchemaGql)
export class ManufacturerResolver {
  constructor(private manufacturerService: ManufacturerService) {}

  @Query(() => AllManufacturersResponse, {
    name: 'getAllManufacturers',
    description:
      'Get all manufacturers passing with optional query as skip and limit',
  })
  async getAllManufacturers(
    @Args({
      name: 'query',
      type: () => ManufacturersQuery,
      nullable: true,
    })
    query?: ManufacturersQuery,
  ) {
    return await this.manufacturerService.getAllManufacturers(query);
  }

  @Query(() => ManufacturerResponse, {
    name: 'getManufacturer',
    description: 'Get single manufacturer by id',
  })
  async getManufacturer(
    @Args({ name: 'manufacturerId', type: () => String })
    manufacturerId: string,
  ) {
    return await this.manufacturerService.getManufacturer(manufacturerId);
  }

  @Mutation(() => ManufacturerResponse, {
    name: 'addManufacturer',
    description: 'Create a new manufacturer within the ManufacturerInput',
  })
  async addManufacturer(
    @Args({ name: 'manufacturer', type: () => ManufacturerInput })
    manufacturer: ManufacturerInput,
  ) {
    return await this.manufacturerService.addManufacturer(manufacturer);
  }

  @Mutation(() => ManufacturerResponse, {
    name: 'updateManufacturer',
    description: 'Update a manufacturer by its id',
  })
  async updateManufacturer(
    @Args({ name: 'manufacturerId', type: () => String })
    manufacturerId: string,
    @Args({ name: 'manufacturer', type: () => ManufacturerInput })
    manufacturer: ManufacturerInput,
  ) {
    return await this.manufacturerService.updateManufacturer(
      manufacturerId,
      manufacturer,
    );
  }

  @Mutation(() => ManufacturerResponse, {
    name: 'deleteManufacturer',
    description: 'Delete a manufacturer by its id',
  })
  async deleteManufacturer(
    @Args({ name: 'manufacturerId', type: () => String })
    manufacturerId: string,
  ) {
    return await this.manufacturerService.deleteManufacturer(manufacturerId);
  }
}
