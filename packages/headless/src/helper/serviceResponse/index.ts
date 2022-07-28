import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { GraphQLError } from "graphql";
import { DescriptiveError, IServiceResponse, ServiceErrorResponse, ServiceSuccessResponse } from "./service.response.interface";

@Injectable()
export class ServiceResponse implements IServiceResponse {
    successResponse(data: object, code: number = HttpStatus.OK): ServiceSuccessResponse {
        return ({ data, code });
    }

    errorResponse(error: string, errors: DescriptiveError | null, code: number = HttpStatus.NOT_FOUND): ServiceErrorResponse {
        return ({ error, errors, code });
    }

    graphqlResponse(res: any): object {
        if (res?.error) { return new HttpException(res.error, res?.code); }
        return res;
    }
}