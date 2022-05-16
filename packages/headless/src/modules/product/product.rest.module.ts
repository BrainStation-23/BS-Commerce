import { Module } from "@nestjs/common";
import { ResolveDatabaseDependency } from "src/database/database.resolver";
import { ProductController } from "./rest";
import { ProductRepository } from "./repositories";
import { IProductDatabase } from "./repositories/product.database.interface";
import { ProductService } from "./services";

@Module({
    controllers: [ProductController],
    providers: [
        ProductService,
        ProductRepository,
        {
            provide: IProductDatabase,
            useClass: ResolveDatabaseDependency('PRODUCT')
        },
    ]
})

export class ProductModule { }
