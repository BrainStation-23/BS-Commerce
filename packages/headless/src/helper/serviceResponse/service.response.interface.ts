
export interface ServiceSuccessResponse {
    /** Response object from service layer */
    data: any;
    /** Http code, but has no relation or dependency with http requests.
     * The code here is used as a standard for communicating with the
     * outer layer of service.
     */
    code: number;
}

export interface DescriptiveError {
    /** Key: value pair, where key is the property name 
     * and value is an array of errors of that property
     */
    [key: string]: [string]
}

export interface ServiceErrorResponse {
    /** Descriptive error from a service layer */
    errors: DescriptiveError;
    /**Single string as summary of descriptive errors */
    error: any;
    /** Http code, but has no relation or dependency with http requests.
     * The code here is used as a standard for communicating with the
     * outer layer of service.
     */
    code?: number;
}

/**
 * Service layer response structure
 */
export abstract class IServiceResponse {
    abstract successResponse: (data: object, code?: number) => ServiceSuccessResponse;

    abstract errorResponse: (error: string, errors: DescriptiveError | null, code?: number) => ServiceErrorResponse;

    abstract graphqlResponse: (res: object) => object;
}