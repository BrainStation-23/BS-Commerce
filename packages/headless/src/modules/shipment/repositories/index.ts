import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

import { Shipment } from 'src/entity/shipment';
import { IShipmentDatabase } from './shipment.database.interface';

@Injectable()
export class ShipmentRepository {
    constructor( private readonly db: IShipmentDatabase ){}

    async createShipment(shipmentRequest: Shipment): Promise<Shipment | null>{
        const shipmentId = crypto.randomUUID();
        const newShipment = {...shipmentRequest, shipmentId};
        return await this.db.createShipment(newShipment);
    }

}