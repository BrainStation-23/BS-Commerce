import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    Res,
    HttpStatus,
  } from '@nestjs/common';
  import { Response } from 'express';
  import { ApiResponse } from '@nestjs/swagger';

  import { Shipment } from 'src/entity/shipment';
import { ShipmentService } from '../services';



@Controller('shipment')
export class ShipmentController {
  constructor( private shipmentService: ShipmentService ) {}

    @Post('/create')
    async createShipment(
        @Body() shipmentRequest: Shipment,
        @Res({ passthrough: true }) res: Response
    ){
        const { code, ...response } = await this.shipmentService.createShipment(shipmentRequest);

        res.status(code);
        return response;
    }

}