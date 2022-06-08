import { Global, Module } from "@nestjs/common";
import { Helper } from "./helper.interface";
import { HelperService } from "./helper.service";
import { MailService } from "./mailService";
import { IMailService } from "./mailService/mail.service.interface";

@Global()
@Module({
    providers: [
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