import { UserDto } from './user.dto';
import { GetUserErrorResponse, GetUserSuccessResponse, GetUserErrorMessages } from '@bs-commerce/models';
export declare class GetUserErrorResponseDto implements GetUserErrorResponse {
    code: number;
    error: GetUserErrorMessages;
    errors: string[];
}
export declare class GetUserSuccessResponseDto implements GetUserSuccessResponse {
    code: number;
    data: UserDto;
}
