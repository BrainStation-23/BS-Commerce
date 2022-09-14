import { IMailService } from "./mailService/mail.service.interface";
import { IServiceResponse } from "./serviceResponse/service.response.interface";
import { ISmsService } from "./smsService/sms.service.interface";

export abstract class Helper {
    serviceResponse: IServiceResponse;
    mailService: IMailService;
    smsService: ISmsService;
}