import { Global, Module } from "@nestjs/common";
import { Helper } from "./helper.interface";
import { HelperService } from "./helper.service";
import { MailService } from "./mailService";
import { IMailService } from "./mailService/mail.service.interface";
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
        },
        {
            provide: IMailService,
            useClass: MailService
        },
    ],
    exports: [Helper]
})

export class HelperModule { }