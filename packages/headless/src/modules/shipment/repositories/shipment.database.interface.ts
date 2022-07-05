import { Injectable } from "@nestjs/common";

import { Shipment } from "src/entity/shipment";

@Injectable()
export abstract class IShipmentDatabase{
    abstract createShipment:(shipmentRequest: Shipment) => Promise<Shipment | null>;   
}