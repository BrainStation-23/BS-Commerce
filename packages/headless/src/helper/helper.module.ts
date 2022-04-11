import { Global, Module } from "@nestjs/common";
import { Helper } from "./helper.interface";
import { HelperService } from "./helper.service";
import { ServiceResponse } from "./serviceResponse";
import { IServiceResponse } from "./serviceResponse/service.response.interface";

@Global()
@Module({
    providers: [
        {
            provide: IServiceResponse,
            useClass: ServiceResponse
        },
        {
            provide: Helper,
            useClass: HelperService
        }
    ],
    exports: [Helper]
})

export class HelperModule { }