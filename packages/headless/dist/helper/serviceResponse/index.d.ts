import { HttpException } from '@nestjs/common';
import { DescriptiveError, IServiceResponse, ServiceErrorResponse, ServiceSuccessResponse } from './service.response.interface';
export declare class ServiceResponse implements IServiceResponse {
    successResponse(data: object, code?: number): ServiceSuccessResponse;
    errorResponse(error: string, errors: DescriptiveError | null, code?: number): ServiceErrorResponse;
    graphqlResponse(res: ServiceSuccessResponse | ServiceErrorResponse): ServiceSuccessResponse | ServiceErrorResponse | HttpException;
}
