import { IMailService } from './mailService/mail.service.interface';
import { IServiceResponse } from './serviceResponse/service.response.interface';
export declare abstract class Helper {
    serviceResponse: IServiceResponse;
    mailService: IMailService;
}
