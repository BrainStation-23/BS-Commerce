import { Injectable } from '@nestjs/common';

import { Shipment } from 'src/entity/shipment';
import { IShipmentDatabase } from 'src/modules/shipment/repositories/shipment.database.interface';
import { ShipmentModel } from './shipment.model';

@Injectable()
export class ShipmentDatabase implements IShipmentDatabase {
    async createShipment(newShipmentRequest: Shipment): Promise<Shipment | null>{
        return await ShipmentModel.create(newShipmentRequest);
    }

}