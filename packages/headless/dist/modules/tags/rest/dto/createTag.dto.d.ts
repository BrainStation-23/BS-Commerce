import { TagDto } from './tags.dto';
import { CreateTagRequestBody, CreateTagErrorResponse, CreateTagErrorMessages, CreateTagSuccessResponse } from '@bs-commerce/models';
export declare class CreateTagRequestBodyDto implements CreateTagRequestBody {
    name: string;
    isHomePageProductsTag?: boolean;
}
export declare class CreateTagErrorResponseDto implements CreateTagErrorResponse {
    code: number;
    error: CreateTagErrorMessages;
    errors: string[];
}
export declare class CreateTagSuccessResponseDto implements CreateTagSuccessResponse {
    code: number;
    data: TagDto;
}
