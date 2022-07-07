import { Injectable } from "@nestjs/common";

import { Shipment } from "src/entity/shipment";

@Injectable()
export abstract class IShipmentDatabase{
    abstract createShipment:(newShipmentRequest: Shipment) => Promise<Shipment | null>;   
}