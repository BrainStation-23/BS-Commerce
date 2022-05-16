
export interface EmailServiceSuccessResponse {
    /** Response object from service layer */
    data: object;
    /** Http code, but has no relation or dependency with http requests.
     * The code here is used as a standard for communicating with the
     * outer layer of service.
     */
    code: number;
}

/**
 * Service layer response structure
 */
export abstract class IEmailService {
    abstract senEmail: (data: object, code: number) => EmailServiceSuccessResponse;
}