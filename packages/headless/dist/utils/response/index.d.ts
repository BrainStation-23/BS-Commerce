import { DescriptiveError, IServiceErrorResponse, IServiceSuccessResponse } from './service.response.interface';
export declare function successResponse<T>(dataType: {
    new (): T;
}, data: T, code?: number): IServiceSuccessResponse<T>;
export declare function errorResponse(error: string, errors?: DescriptiveError | null, code?: number): IServiceErrorResponse;
