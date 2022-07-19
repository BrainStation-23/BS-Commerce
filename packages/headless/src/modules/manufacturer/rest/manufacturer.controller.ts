import {
  DeleteManufacturerSuccessResponseDto,
  DeleteManufacturerErrorResponseDto,
} from './../dto/deleteManufacturer.dto';
import {
  UpdateManufacturerDto,
  UpdateManufacturerErrorResponseDto,
  UpdateManufacturerSuccessResponseDto,
} from './../dto/updateManufacturer.dto';
import {
  CreateManufacturerSuccessResponseDto,
  CreateManufacturerErrorResponseDto,
} from './../dto/createManufacturer.dto';
import { CreateManufacturerDto } from '../dto/createManufacturer.dto';
import { ManufacturerService } from './../services/manufacturer.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import {
  GetManufacturersErrorResponseDto,
  GetManufacturersQueryDto,
  GetManufacturersSuccessResponseDto,
} from '../dto/getManufacturers.dto';
import {
  GetManufacturerErrorResponseDto,
  GetManufacturerSuccessResponseDto,
} from '../dto/getManufacturer.dto';
import { RolesGuard } from 'src/guards/auth.guard';
@Controller('manufacturers')
@ApiTags('Manufacturer API')
@ApiBearerAuth()
@UseGuards(new RolesGuard(['admin']))
export class ManufacturerController {
  constructor(private manufacturerService: ManufacturerService) {}

  /**
   * @GET
   * The getAllManufacturers function executes when manufacturers/ api is called
   * for getting all manufacturers
   * @param skip Optional
   * @param limit Optional
   * @param res res is used for sending status code
   * @returns {Object} Object of {data} | Object of {errors, error}
   */
  @Get('/')
  @ApiResponse({
    description: 'Get Manufacturers Success Response',
    type: GetManufacturersSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get Manufacturers Error Response',
    type: GetManufacturersErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getAllManufacturers(
    @Query() query: GetManufacturersQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.manufacturerService.getAllManufacturers(query);
    res.status(code);
    return response;
  }

  /**
   * @POST
   * The addManufacturer function executes when manufacturers/create api is called
   * for creating/adding a manufacturer newly
   * @param manufacturer manufacturer comes through JSON body
   * @param res res is used for sending status code
   * @returns {Object} Object of {data} | Object of {errors, error}
   */
  @Post('create')
  @ApiResponse({
    description: 'Create Manufacturer Success Response',
    type: CreateManufacturerSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Create Manufacturer Error Response',
    type: CreateManufacturerErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async addManufacturer(
    @Body() manufacturer: CreateManufacturerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.manufacturerService.addManufacturer(manufacturer);
    res.status(code);
    return response;
  }

  /**
   * @GET
   * The getManufacturer function executes when manufacturers/:manufacturerId api is called
   * for getting a specific manufacturer
   * @param manufacturerId
   * @param res res is used for sending status code
   * @returns {Object} Object of {data} | Object of {errors, error}
   */
  @Get('/:manufacturerId')
  @ApiResponse({
    description: 'Get Manufacturer Success Response',
    type: GetManufacturerSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Get Manufacturer Error Response',
    type: GetManufacturerErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async getManufacturer(
    @Param('manufacturerId') manufacturerId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.manufacturerService.getManufacturer(manufacturerId);
    res.status(code);
    return response;
  }

  /**
   * @PATCH
   * The updateManufacturer function executes when manufacturers/:manufacturerId api is called
   * for updating the specific manufacturer by id
   * @param manufacturerId
   * @param manufacturer manufacturer comes through JSON body
   * @param res res is used for sending status code
   * @returns {Object} Object of {data} | Object of {errors, error}
   */
  @Patch('/:manufacturerId')
  @ApiResponse({
    description: 'Update Manufacturer Success Response',
    type: UpdateManufacturerSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Update Manufacturer Error Response',
    type: UpdateManufacturerErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async updateManufacturer(
    @Param('manufacturerId') manufacturerId: string,
    @Body() manufacturer: UpdateManufacturerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.manufacturerService.updateManufacturer(
        manufacturerId,
        manufacturer,
      );
    res.status(code);
    return response;
  }

  /**
   * @DELETE
   * The deleteManufacturer function executes when manufacturers/:manufacturerId api is called
   * for deleting the specific manufacturer by id
   * @param manufacturerId
   * @param res res is used for sending status code
   * @returns {Object} Object of {data} | Object of {errors, error}
   */
  @Delete('/:manufacturerId')
  @ApiResponse({
    description: 'Delete Manufacturer Success Response',
    type: DeleteManufacturerSuccessResponseDto,
    status: HttpStatus.OK,
  })
  @ApiResponse({
    description: 'Delete Manufacturer Error Response',
    type: DeleteManufacturerErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  async deleteManufacturer(
    @Param('manufacturerId') manufacturerId: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { code, ...response } =
      await this.manufacturerService.deleteManufacturer(manufacturerId);
    res.status(code);
    return response;
  }
}
