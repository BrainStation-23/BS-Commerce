import { Injectable } from "@nestjs/common";
import { IResponse } from "../helper.interface";

@Injectable()
export class APIResponse implements IResponse {
    successResponse(data) {
        return ({ data });
    }
    errorResponse(errors) {
        if (typeof errors === 'string') {
            return ({ error: errors });
        }
        else {
            return ({ errors });
        }
    }
}