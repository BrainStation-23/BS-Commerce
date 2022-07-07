import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

import { Shipment } from 'src/entity/shipment';
import { IShipmentDatabase } from './shipment.database.interface';

@Injectable()
export class ShipmentRepository {
    constructor( private readonly db: IShipmentDatabase ){}

    async createShipment(newShipmentRequest: Shipment): Promise<Shipment | null>{
        const shipmentId = crypto.randomUUID();
        const newShipment = {...newShipmentRequest, shipmentId};
        return await this.db.createShipment(newShipment);
    }

}