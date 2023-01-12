import { CustomerInformationDto } from './customer.dto';
import { AddCustomerNewAddressErrorResponse, AddCustomerNewAddressSuccessResponse, AddCustomerNewAddressErrorMessages } from '@bs-commerce/models';
export declare class AddCustomerNewAddressErrorResponseDto implements AddCustomerNewAddressErrorResponse {
    code: number;
    error: AddCustomerNewAddressErrorMessages;
    errors: string[];
}
export declare class AddCustomerNewAddressSuccessResponseDto implements AddCustomerNewAddressSuccessResponse {
    code: number;
    data: CustomerInformationDto;
}
