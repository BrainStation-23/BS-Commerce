import { HttpException } from '@nestjs/common';
export interface ServiceSuccessResponse {
    data: any;
    code: number;
}
export interface DescriptiveError {
    [key: string]: [string];
}
export interface ServiceErrorResponse {
    errors: DescriptiveError;
    error: any;
    code?: number;
}
export declare abstract class IServiceResponse {
    abstract successResponse: (data: object, code?: number) => ServiceSuccessResponse;
    abstract errorResponse: (error: string, errors: DescriptiveError | null, code?: number) => ServiceErrorResponse;
    abstract graphqlResponse: (res: ServiceSuccessResponse | ServiceErrorResponse) => ServiceSuccessResponse | ServiceErrorResponse | HttpException;
}
