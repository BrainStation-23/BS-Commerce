import { Injectable } from '@nestjs/common';
import { Helper } from './helper.interface';
import { IMailService } from './mailService/mail.service.interface';
import { IServiceResponse } from './serviceResponse/service.response.interface';
import { ISmsService } from './smsService/sms.service.interface';
@Injectable()
export class HelperService implements Helper {
  constructor(
    public serviceResponse: IServiceResponse,
    public mailService: IMailService,
    public smsService: ISmsService,
  ) {}
}
