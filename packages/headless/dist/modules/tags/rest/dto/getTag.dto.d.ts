import { GetTagParams, GetTagErrorMessages, GetTagErrorResponse, GetTagSuccessResponse } from '@bs-commerce/models';
import { TagDto } from './tags.dto';
export declare class GetTagParamsDto implements GetTagParams {
    tagId: string;
}
export declare class GetTagErrorResponseDto implements GetTagErrorResponse {
    code: number;
    error: GetTagErrorMessages;
    errors: string[];
}
export declare class GetTagSuccessResponseDto implements GetTagSuccessResponse {
    code: number;
    data: TagDto;
}
