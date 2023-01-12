import { CustomerInformationDto } from './customer.dto';
import { UpdateCustomerAddressErrorResponse, UpdateCustomerAddressSuccessResponse, UpdateCustomerAddressErrorMessages, UpdateCustomerAddressParams } from '@bs-commerce/models';
export declare class UpdateCustomerAddressParamsDto implements UpdateCustomerAddressParams {
    addressId: string;
}
export declare class UpdateCustomerAddressErrorResponseDto implements UpdateCustomerAddressErrorResponse {
    code: number;
    error: UpdateCustomerAddressErrorMessages;
    errors: string[];
}
export declare class UpdateCustomerAddressSuccessResponseDto implements UpdateCustomerAddressSuccessResponse {
    code: number;
    data: CustomerInformationDto;
}
