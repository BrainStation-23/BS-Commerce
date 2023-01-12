import { AddressDto, UserDto } from './user.dto';
import { UpdatedUserRequest, UpdateUserErrorResponse, UpdateUserSuccessResponse, UpdateUserErrorMessages } from '@bs-commerce/models';
export declare class UpdatedUserDto implements UpdatedUserRequest {
    firstName?: string;
    lastName?: string;
    provider?: string;
    providerData?: object;
    additionalProviderData?: object;
    phone?: string;
    address?: AddressDto;
    active?: boolean;
    gender?: string;
    status?: string;
}
export declare class UpdateUserErrorResponseDto implements UpdateUserErrorResponse {
    code: number;
    error: UpdateUserErrorMessages;
    errors: string[];
}
export declare class UpdateUserSuccessResponseDto implements UpdateUserSuccessResponse {
    code: number;
    data: UserDto;
}
