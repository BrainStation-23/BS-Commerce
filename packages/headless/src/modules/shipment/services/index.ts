import { HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";
import * as crypto from 'crypto';

import { Shipment } from "src/entity/shipment";
import { ShipmentRepository } from "../repositories";

@Injectable()

export class ShipmentService{
    constructor( private shipmentRepo: ShipmentRepository){}

    async createShipment(newShipmentRequest: Shipment): Promise<any>{
        try{
            const newShipment = await this.shipmentRepo.createShipment(newShipmentRequest);
            if(!newShipment) return {error: 'CANNOT_CREATE_SHIPMENT', errors: null, code: HttpStatus.INTERNAL_SERVER_ERROR}
            
            return { code: HttpStatus.CREATED, data: newShipment };
        }catch(err){
            console.log(err);
            return {error: 'CANNOT_CREATE_SHIPMENT', errors: null, code: HttpStatus.BAD_REQUEST};
        }
    }
}