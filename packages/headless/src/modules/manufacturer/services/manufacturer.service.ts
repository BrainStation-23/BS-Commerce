import {
  GetManufacturersResponse,
  GetManufacturersSuccessMessages,
  GetManufacturersSuccessResponse,
  GetManufacturersErrorMessages,
  UpdateManufacturerResponse,
  UpdateManufacturerErrorMessages,
  UpdateManufacturerSuccessMessages,
  UpdateManufacturerSuccessResponse,
  DeleteManufacturerResponse,
  DeleteManufacturerErrorMessages,
  DeleteManufacturerSuccessMessages,
  GetManufacturerResponse,
  GetManufacturerSuccessMessages,
  GetManufacturerSuccessResponse,
  GetManufacturerErrorMessages,
  CreateManufacturerResponse,
  CreateManufacturerSuccessMessages,
  CreateManufacturerSuccessResponse,
  CreateManufacturerErrorMessages,
} from '@bs-commerce/models';
import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { ManufacturerRepository } from '../repositories';
import { Manufacturer, ManufacturersQuery } from 'src/entity/manufacturer';

@Injectable()
export class ManufacturerService {
  constructor(
    private manufacturerRepo: ManufacturerRepository,
    private helper: Helper,
  ) {}

  /**
   * The addManufacturer function checks firstly if it already exists or not
   * by searching in db with manufacturer name
   * then calls the createManufacturer from manufacturerRepo
   * @param manufacturer
   * @returns { Promise<Object> } Object of Success or Error
   *
   */
  async addManufacturer(
    manufacturer: Manufacturer,
  ): Promise<CreateManufacturerResponse> {
    const isManufacturerExist = await this.manufacturerRepo.getManufacturer({
      name: manufacturer.name,
    });

    if (isManufacturerExist) {
      return this.helper.serviceResponse.errorResponse(
        CreateManufacturerErrorMessages.MANUFACTURER_ALREADY_EXISTS,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }

    const newManufacturer = await this.manufacturerRepo.createManufacturer(
      manufacturer,
    );
    if (!newManufacturer) {
      return this.helper.serviceResponse.errorResponse(
        CreateManufacturerErrorMessages.MANUFACTURER_NOT_CREATED_SUCCESSFULLY,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.helper.serviceResponse.successResponse(
      {
        manufacturer: newManufacturer,
        message:
          CreateManufacturerSuccessMessages.MANUFACTURER_CREATED_SUCCESSFULLY,
      },
      HttpStatus.OK,
    ) as CreateManufacturerSuccessResponse;
  }

  /**
   * The getAllManufacturers function calls getAllManufacturers from manufacturerRepo
   * then calls the getManufacturersCount from manufacturerRepo to get the total count
   * @param skip Optional
   * @param limit Optional
   * @returns { Promise<Object> } Object of Success or Error
   */
  async getAllManufacturers(
    query: ManufacturersQuery,
  ): Promise<GetManufacturersResponse> {
    const { skip, limit } = query;
    const foundManufacturers = await this.manufacturerRepo.getAllManufacturers(
      skip,
      limit,
    );

    if (!foundManufacturers) {
      return this.helper.serviceResponse.errorResponse(
        GetManufacturersErrorMessages.MANUFACTURERS_NOT_FOUND,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }

    let allManufacturersResponse = {
      manufacturers: [],
      total: 0,
      message: GetManufacturersSuccessMessages.MANUFACTURER_IS_EMPTY,
    };

    if (foundManufacturers.length === 0) {
      return this.helper.serviceResponse.successResponse(
        allManufacturersResponse,
        HttpStatus.OK,
      ) as GetManufacturersSuccessResponse;
    } else {
      allManufacturersResponse = {
        manufacturers: foundManufacturers,
        total: foundManufacturers.length,
        message:
          GetManufacturersSuccessMessages.MANUFACTURERS_LOADED_SUCCESSFULLY,
      };

      return this.helper.serviceResponse.successResponse(
        allManufacturersResponse,
        HttpStatus.OK,
      ) as GetManufacturersSuccessResponse;
    }
  }

  /**
   * The getManufacturer function calls getManufacturer() function from manufacturerRepo
   * @param manufacturerId
   * @returns { Promise<Object> } Object of Success or Error
   */
  async getManufacturer(
    manufacturerId: string,
  ): Promise<GetManufacturerResponse> {
    const foundManufacturer = await this.manufacturerRepo.getManufacturer({
      id: manufacturerId,
    });

    if (!foundManufacturer) {
      return this.helper.serviceResponse.errorResponse(
        GetManufacturerErrorMessages.MANUFACTURER_NOT_FOUND,
        null,
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.helper.serviceResponse.successResponse(
      {
        manufacturer: foundManufacturer,
        message:
          GetManufacturerSuccessMessages.MANUFACTURER_LOADED_SUCCESSFULLY,
      },
      HttpStatus.OK,
    ) as GetManufacturerSuccessResponse;
  }

  /**
   * The updateManufacturer function checks firstly if it already exists or not
   * then calls the updateManufacturerById() from manufacturerRepo
   * @param manufacturerId
   * @param manufacturer
   * @returns { Promise<Object> } Object of Success or Error
   */
  async updateManufacturer(
    manufacturerId: string,
    manufacturer: Manufacturer,
  ): Promise<UpdateManufacturerResponse> {
    const foundManufacturer = await this.manufacturerRepo.getManufacturer({
      id: manufacturerId,
    });

    const isManufacturerExist = await this.manufacturerRepo.getManufacturer({
      name: manufacturer.name,
    });

    if (!foundManufacturer) {
      return this.helper.serviceResponse.errorResponse(
        UpdateManufacturerErrorMessages.MANUFACTURER_NOT_FOUND,
        null,
        HttpStatus.BAD_REQUEST,
      );
    } else if (isManufacturerExist) {
      return this.helper.serviceResponse.errorResponse(
        UpdateManufacturerErrorMessages.THE_SAME_NAME_MANUFACTURER_ALREADY_EXISTS,
        null,
        HttpStatus.BAD_REQUEST,
      );
    } else {
      const savedManufacturer = await this.manufacturerRepo.updateManufacturer(
        manufacturerId,
        manufacturer,
      );

      if (!savedManufacturer) {
        return this.helper.serviceResponse.errorResponse(
          UpdateManufacturerErrorMessages.MANUFACTURER_NOT_UPDATED,
          null,
          HttpStatus.BAD_REQUEST,
        );
      }

      return this.helper.serviceResponse.successResponse(
        {
          manufacturer: savedManufacturer,
          message:
            UpdateManufacturerSuccessMessages.MANUFACTURER_UPDATED_SUCCESSFULLY,
        },
        HttpStatus.OK,
      ) as UpdateManufacturerSuccessResponse;
    }
  }

  /**
   * The deleteManufacturer function checks firstly if it already exists or not
   * then calls the deleteManufacturerById() from manufacturerRepo
   * @param manufacturerId
   * @returns { Promise<Object> } Object of Success or Error
   */
  async deleteManufacturer(
    manufacturerId: string,
  ): Promise<DeleteManufacturerResponse> {
    const foundManufacturer = await this.manufacturerRepo.getManufacturer({
      id: manufacturerId,
    });

    if (!foundManufacturer) {
      return this.helper.serviceResponse.errorResponse(
        DeleteManufacturerErrorMessages.MANUFACTURER_NOT_FOUND,
        null,
        HttpStatus.BAD_REQUEST,
      );
    } else {
      const manufacturer = await this.manufacturerRepo.deleteManufacturer(
        manufacturerId,
      );

      if (!manufacturer) {
        return this.helper.serviceResponse.errorResponse(
          DeleteManufacturerErrorMessages.MANUFACTURER_NOT_DELETED,
          null,
          HttpStatus.BAD_REQUEST,
        );
      }

      return this.helper.serviceResponse.successResponse(
        {
          manufacturer,
          message:
            DeleteManufacturerSuccessMessages.MANUFACTURER_DELETED_SUCCESSFULLY,
        },
        HttpStatus.OK,
      ) as DeleteManufacturerResponse;
    }
  }
}
