import { HttpStatus, Injectable } from "@nestjs/common";
import { EmailServiceSuccessResponse, IEmailService } from "./email.service.interface";

@Injectable()
export class ServiceResponse implements IEmailService {
    senEmail(data: object, code: number = HttpStatus.OK): EmailServiceSuccessResponse {
        return ({ data, code });
    }
}