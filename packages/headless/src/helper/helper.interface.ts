export interface IResponse {
    successResponse: (data: object | string) => ({ data: object });
    errorResponse: (errors: object | null | string) => ({ errors?: object, error?: string });
}

export abstract class Helper {
    apiResponse: IResponse
}