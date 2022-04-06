import { Injectable } from "@nestjs/common";
import { APIResponse } from "./apiResponse";
import { Helper } from "./helper.interface"
@Injectable()
export class HelperService implements Helper {
    constructor(
        public apiResponse: APIResponse
    ) { }
}