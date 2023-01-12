export interface IServiceSuccessResponse<T> {
    data: T;
    code?: number;
}
export interface DescriptiveError {
    [key: string]: string[];
}
export interface IServiceErrorResponse {
    errors: DescriptiveError;
    error: string;
    code?: number;
}
export declare type IServiceResponse<T> = IServiceSuccessResponse<T> | IServiceErrorResponse;
