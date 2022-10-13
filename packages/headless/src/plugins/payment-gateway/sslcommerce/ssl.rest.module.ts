import { Module } from "@nestjs/common";
import { ResolveDatabaseDependency } from "src/database/database.resolver";
import { SSLPaymentGatewayController } from "./rest/ssl.controller";
import { SSLPaymentGatewayService } from './service';

@Module({
    imports: [],
    controllers: [SSLPaymentGatewayController],
    providers:[SSLPaymentGatewayService]
})

export class SSLModule { }