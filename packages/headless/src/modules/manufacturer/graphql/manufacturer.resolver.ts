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
import { Helper } from 'src/helper/helper.interface';

@UseGuards(new RolesGuard(['admin']))
@Resolver((of) => ManufacturerSchemaGql)
export class ManufacturerResolver {
  constructor(
    private manufacturerService: ManufacturerService,
    private helper: Helper,
  ) {}

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
    const res = await this.manufacturerService.getAllManufacturers(query);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Query(() => ManufacturerResponse, {
    name: 'getManufacturer',
    description: 'Get single manufacturer by id',
  })
  async getManufacturer(
    @Args({ name: 'manufacturerId', type: () => String })
    manufacturerId: string,
  ) {
    const res = await this.manufacturerService.getManufacturer(manufacturerId);
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => ManufacturerResponse, {
    name: 'addManufacturer',
    description: 'Create a new manufacturer within the ManufacturerInput',
  })
  async addManufacturer(
    @Args({ name: 'manufacturer', type: () => ManufacturerInput })
    manufacturer: ManufacturerInput,
  ) {
    const res = await this.manufacturerService.addManufacturer(manufacturer);
    return this.helper.serviceResponse.graphqlResponse(res);
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
    const res = await this.manufacturerService.updateManufacturer(
      manufacturerId,
      manufacturer,
    );
    return this.helper.serviceResponse.graphqlResponse(res);
  }

  @Mutation(() => ManufacturerResponse, {
    name: 'deleteManufacturer',
    description: 'Delete a manufacturer by its id',
  })
  async deleteManufacturer(
    @Args({ name: 'manufacturerId', type: () => String })
    manufacturerId: string,
  ) {
    const res = await this.manufacturerService.deleteManufacturer(
      manufacturerId,
    );
    return this.helper.serviceResponse.graphqlResponse(res);
  }
}
