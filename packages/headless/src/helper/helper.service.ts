import { Injectable } from "@nestjs/common";
import { Helper } from "./helper.interface"
import { IMailService } from "./mailService/mail.service.interface";
@Injectable()
export class HelperService implements Helper {
    constructor(
        public mailService: IMailService
    ) { }
}