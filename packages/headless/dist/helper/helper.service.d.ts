import { Helper } from './helper.interface';
import { IMailService } from './mailService/mail.service.interface';
import { IServiceResponse } from './serviceResponse/service.response.interface';
export declare class HelperService implements Helper {
    serviceResponse: IServiceResponse;
    mailService: IMailService;
    constructor(serviceResponse: IServiceResponse, mailService: IMailService);
}
