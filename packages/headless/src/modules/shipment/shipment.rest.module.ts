import { Module } from "@nestjs/common";

import { ShipmentController } from "./rest/shipment.controller";
import { IShipmentDatabase } from 'src/modules/shipment/repositories/shipment.database.interface';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { ShipmentService } from "./services";
import { ShipmentRepository } from "./repositories";

@Module({
    controllers: [ShipmentController],
    providers: [
        ShipmentService,
        ShipmentRepository,
        { provide: IShipmentDatabase, useClass: ResolveDatabaseDependency('SHIPMENT') }
    ]
})

export class ShipmentModule{};