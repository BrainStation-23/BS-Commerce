import { UploadFileErrorMessages, UploadFileErrorResponse, UploadFileSuccessResponse } from '@bs-commerce/models';
export declare class UploadFileErrorResponseDto implements UploadFileErrorResponse {
    code: number;
    error: UploadFileErrorMessages;
    errors: string[];
}
export declare class UploadFileDto {
    url: string;
}
export declare class UploadFileSuccessResponseDto implements UploadFileSuccessResponse {
    code: number;
    data: UploadFileDto;
}
