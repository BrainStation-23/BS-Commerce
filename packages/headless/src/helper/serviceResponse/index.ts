import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DescriptiveError, IServiceResponse, ServiceErrorResponse, ServiceSuccessResponse } from "./service.response.interface";

@Injectable()
export class ServiceResponse implements IServiceResponse {
    successResponse(data: object, code: number = HttpStatus.OK): ServiceSuccessResponse {
        return ({ data, code });
    }

    errorResponse(error: string, errors: DescriptiveError | null, code: number = HttpStatus.NOT_FOUND): ServiceErrorResponse {
        return ({ error, errors, code });
    }

    graphqlResponse(res: ServiceSuccessResponse | ServiceErrorResponse): ServiceSuccessResponse | ServiceErrorResponse | HttpException {
        const errObj = (res as ServiceErrorResponse).error;
        if (errObj) { return new HttpException(errObj, res?.code); }
        return res;
    }
}