import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';

/**
 * API Path: /media/upload
 * method: POST
 * body: UploadFileRequest
 * response: UploadFileResponse
 */

export interface File {
    id: string;
    url: string;
}

export interface UploadFileSuccessResponse extends SuccessResponse {
    code: number;
    data: File;
}

export const enum UploadFileErrorMessages {
    CAN_NOT_UPLOAD_FILE = 'CAN_NOT_UPLOAD_FILE',
}

export interface UploadFileErrorResponse extends ErrorResponse {
    code?: number;
    error: UploadFileErrorMessages;
    errors: DescriptiveError;
}

export type UploadFileResponse = UploadFileSuccessResponse | UploadFileErrorResponse;