import { Injectable } from '@nestjs/common';
import { Helper } from './helper.interface';
import { IServiceResponse } from './serviceResponse/service.response.interface';
@Injectable()
export class HelperService implements Helper {
  constructor(public serviceResponse: IServiceResponse) {}
}
