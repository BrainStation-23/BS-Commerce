import { Module } from "@nestjs/common";

import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { OrderRepository } from './repositories/index';
import { IOrderDatabase } from "./repositories/order.db.interface";
import { OrderAdminService } from "./services/admin.service";
import { OrderCustomerService } from "./services/customer.service";

@Module({
    controllers: [],
    providers: [
        OrderCustomerService,
        OrderAdminService,
        OrderRepository,
        { 
            provide: IOrderDatabase, 
            useClass: ResolveDatabaseDependency('ORDER') 
        }
    ]
})

export class OrderModule{};