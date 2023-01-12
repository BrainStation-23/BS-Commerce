import { GetTagsErrorMessages, GetTagsErrorResponse, GetTagsSuccessResponse } from '@bs-commerce/models';
import { TagDto } from './tags.dto';
export declare class GetTagsErrorResponseDto implements GetTagsErrorResponse {
    code: number;
    error: GetTagsErrorMessages;
    errors: string[];
}
export declare class GetTagsSuccessResponseDto implements GetTagsSuccessResponse {
    code: number;
    data: [TagDto];
}
