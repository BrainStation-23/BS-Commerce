import { Module } from "@nestjs/common";

import { ResolveDatabaseDependency } from "src/database/database.resolver";
import { CustomerOrderResolver } from "./graphql/order.customer.resolver";
import { OrderRepository } from "./repositories";
import { IOrderDatabase } from "./repositories/order.db.interface";
import { OrderCustomerService } from "./services/customer.service";

@Module({
    controllers: [],
    providers: [
        CustomerOrderResolver,
        OrderCustomerService,
        OrderRepository,
        { 
            provide: IOrderDatabase, 
            useClass: ResolveDatabaseDependency('ORDER') 
        }
    ]
})

export class OrderModule{};