import { UpdateTagRequest, UpdateTagErrorMessages, UpdateTagErrorResponse, UpdateTagSuccessResponse, UpdateTagParams } from '@bs-commerce/models';
import { TagDto } from './tags.dto';
export declare class UpdateTagParamDto implements UpdateTagParams {
    tagId: string;
}
export declare class UpdateTagRequestDto implements UpdateTagRequest {
    name?: string;
    isHomePageProductsTag?: boolean;
}
export declare class UpdateTagSuccessResponseDto implements UpdateTagSuccessResponse {
    code: number;
    data: TagDto;
}
export declare class UpdateTagErrorResponseDto implements UpdateTagErrorResponse {
    code: number;
    error: UpdateTagErrorMessages;
    errors: string[];
}
