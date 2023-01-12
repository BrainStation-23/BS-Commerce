import { CustomerInformationDto } from './customer.dto';
import { DeleteCustomerAddressErrorResponse, DeleteCustomerAddressSuccessResponse, DeleteCustomerAddressErrorMessages, DeleteCustomerAddressParams } from '@bs-commerce/models';
export declare class DeleteCustomerAddressParamsDto implements DeleteCustomerAddressParams {
    addressId: string;
}
export declare class DeleteCustomerAddressErrorResponseDto implements DeleteCustomerAddressErrorResponse {
    code: number;
    error: DeleteCustomerAddressErrorMessages;
    errors: string[];
}
export declare class DeleteCustomerAddressSuccessResponseDto implements DeleteCustomerAddressSuccessResponse {
    code: number;
    data: CustomerInformationDto;
}
