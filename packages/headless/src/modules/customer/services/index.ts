import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import { CustomerRepository } from '../repositories';
import {
    GetCustomerInformationErrorMessages,
    GetCustomerInformationResponse,
    AddCustomerNewAddressResponse,
    AddCustomerNewAddressErrorMessages,
    UpdateCustomerAddressResponse,
    UpdateCustomerAddressErrorMessages,
    DeleteCustomerAddressResponse,
    DeleteCustomerAddressErrorMessages,
    UpdateCustomerRequestBody,
    UpdateCustomerResponse,
    UpdateCustomerErrorMessages,
    SendOtpRequest,
    SendOtpResponse,
    VerifyOtpRequest,
    VerifyOtpResponse,
    SendOtpErrorMessages,
    VerifyOtpErrorMessages,
    VerifyOtpSuccessMessages,
} from 'models';
import { CustomerAddress } from 'src/entity/customer';
const FIVE_MINUTES = 5 * 60 * 1000;

@Injectable()
export class CustomerService {
    constructor(private customerRepo: CustomerRepository, private helper: Helper) { }

    async getCustomer(customerId: string): Promise<GetCustomerInformationResponse> {
        const customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse(GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(customer, HttpStatus.OK);
    }

    async updateProfileSendOTP(data: SendOtpRequest, customerId: string): Promise<SendOtpResponse> {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse(GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND, null, HttpStatus.BAD_REQUEST);
        if (customer && customer.phone && data.phone) return this.helper.serviceResponse.errorResponse(UpdateCustomerErrorMessages.CAN_NOT_CHANGE_EXISTING_PHONE, null, HttpStatus.BAD_REQUEST);
        if (customer && customer.email && data.email) return this.helper.serviceResponse.errorResponse(UpdateCustomerErrorMessages.CAN_NOT_CHANGE_EXISTING_EMAIL, null, HttpStatus.BAD_REQUEST);

        const emailMatch = data.email && await this.customerRepo.findCustomer({ email: data.email });
        if (emailMatch) return this.helper.serviceResponse.errorResponse(UpdateCustomerAddressErrorMessages.CUSTOMER_EMAIL_MATCH, null, HttpStatus.BAD_REQUEST);

        const phoneMatch = data.phone && await this.customerRepo.findCustomer({ phone: data.phone });
        if (phoneMatch) return this.helper.serviceResponse.errorResponse(UpdateCustomerAddressErrorMessages.CUSTOMER_PHONE_MATCH, null, HttpStatus.BAD_REQUEST);

        return this.sendOtp(data);
    }

    async sendOtp(data: SendOtpRequest): Promise<SendOtpResponse> {
        let otpExists = null;
        otpExists = data.email && await this.customerRepo.findOtp({ email: data.email });
        otpExists = (!otpExists && data.phone) ? await this.customerRepo.findOtp({ phone: data.phone }) : otpExists;
        const randomOtp = 100000 + Math.floor(Math.random() * 900000);

        if (otpExists && (data.email || data.phone)) {
            let otpUpdated = null;
            otpUpdated = data.phone && await this.customerRepo.updateOtp({ phone: data.phone }, { otp: randomOtp, otpExpireTime: Date.now() + FIVE_MINUTES, isVerified: false });
            otpUpdated = (!otpUpdated && data.email) ? await this.customerRepo.updateOtp({ email: data.email }, { otp: randomOtp, otpExpireTime: Date.now() + FIVE_MINUTES, isVerified: false }) : otpUpdated;
            if (!otpUpdated) return this.helper.serviceResponse.errorResponse(SendOtpErrorMessages.CAN_NOT_UPDATE_OTP, null, HttpStatus.BAD_REQUEST);
            return this.helper.serviceResponse.successResponse({ message: `Your Bs-Commerce OTP for Update Profile is ${randomOtp}` }, HttpStatus.OK);
        }
        const otpSend = (data.email || data.phone) && await this.customerRepo.sendOtp({ ...data, otp: randomOtp, otpExpireTime: Date.now() + FIVE_MINUTES });
        if (!otpSend) return this.helper.serviceResponse.errorResponse(SendOtpErrorMessages.CAN_NOT_SEND_OTP, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ message: `Your Bs-Commerce OTP is for Update Profile  ${randomOtp}` }, HttpStatus.OK);
    }

    async verifyOtp(data: VerifyOtpRequest): Promise<VerifyOtpResponse> {
        const verifyOtp = (data.email || data.phone) && await this.customerRepo.verifyOtp({ ...data, otpExpireTime: { $gt: Date.now() } });
        if (!verifyOtp) return this.helper.serviceResponse.errorResponse(VerifyOtpErrorMessages.OTP_EXPIRED_OR_INVALID_OTP, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ message: VerifyOtpSuccessMessages.OTP_VERIFIED_SUCCESSFUL }, HttpStatus.OK);
    }

    async updateProfileVerifyOTP(data: VerifyOtpRequest, customerId: string): Promise<VerifyOtpResponse> {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse(GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND, null, HttpStatus.BAD_REQUEST);
        if (customer && customer.phone && data.phone) return this.helper.serviceResponse.errorResponse(UpdateCustomerErrorMessages.CAN_NOT_CHANGE_EXISTING_PHONE, null, HttpStatus.BAD_REQUEST);
        if (customer && customer.email && data.email) return this.helper.serviceResponse.errorResponse(UpdateCustomerErrorMessages.CAN_NOT_CHANGE_EXISTING_EMAIL, null, HttpStatus.BAD_REQUEST);

        const emailMatch = data.email && await this.customerRepo.findCustomer({ email: data.email });
        if (emailMatch) return this.helper.serviceResponse.errorResponse(UpdateCustomerAddressErrorMessages.CUSTOMER_EMAIL_MATCH, null, HttpStatus.BAD_REQUEST);

        const phoneMatch = data.phone && await this.customerRepo.findCustomer({ phone: data.phone });
        if (phoneMatch) return this.helper.serviceResponse.errorResponse(UpdateCustomerAddressErrorMessages.CUSTOMER_PHONE_MATCH, null, HttpStatus.BAD_REQUEST);

        return this.verifyOtp(data);
    }

    async updateCustomer(customerId: string, data: UpdateCustomerRequestBody): Promise<UpdateCustomerResponse> {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse(GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND, null, HttpStatus.BAD_REQUEST);
        if (customer && customer.phone && data.phone) return this.helper.serviceResponse.errorResponse(UpdateCustomerErrorMessages.CAN_NOT_CHANGE_EXISTING_PHONE, null, HttpStatus.BAD_REQUEST);
        if (customer && customer.email && data.email) return this.helper.serviceResponse.errorResponse(UpdateCustomerErrorMessages.CAN_NOT_CHANGE_EXISTING_EMAIL, null, HttpStatus.BAD_REQUEST);

        const emailMatch = data.email && await this.customerRepo.findCustomer({ email: data.email });
        if (emailMatch) return this.helper.serviceResponse.errorResponse(UpdateCustomerAddressErrorMessages.CUSTOMER_EMAIL_MATCH, null, HttpStatus.BAD_REQUEST);

        const phoneMatch = data.phone && await this.customerRepo.findCustomer({ phone: data.phone });
        if (phoneMatch) return this.helper.serviceResponse.errorResponse(UpdateCustomerAddressErrorMessages.CUSTOMER_PHONE_MATCH, null, HttpStatus.BAD_REQUEST);

        let otpVerified = null;
        otpVerified = data.phone && await this.customerRepo.findOtp({ isVerified: true, phone: data.phone });
        otpVerified = (!otpVerified && data.email) ? await this.customerRepo.findOtp({ isVerified: true, email: data.email }) : otpVerified;
        if (!otpVerified || (otpVerified.otpVerifiedAt + FIVE_MINUTES) < Date.now()) return this.helper.serviceResponse.errorResponse(UpdateCustomerErrorMessages.TIME_LIMIT_EXCEED_OR_UNVERIFIED_CUSTOMER, null, HttpStatus.BAD_REQUEST,);

        customer = Object.assign(customer, data);

        const updatedCustomer = await this.customerRepo.updateCustomer(customerId, customer);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse(UpdateCustomerErrorMessages.CAN_NOT_UPDATE_CUSTOMER_INFORMATION, null, HttpStatus.BAD_REQUEST);

        customer.email && await this.customerRepo.deleteOtp({ email: customer.email });
        customer.phone && await this.customerRepo.deleteOtp({ phone: customer.phone });
        return this.helper.serviceResponse.successResponse(updatedCustomer, HttpStatus.OK);
    }

    async addCustomerNewAddress(customerId: string, address: CustomerAddress): Promise<AddCustomerNewAddressResponse> {
        const updatedCustomer = await this.customerRepo.addCustomerNewAddress(customerId, address);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse(AddCustomerNewAddressErrorMessages.CAN_NOT_ADD_CUSTOMER_NEW_ADDRESS, null, HttpStatus.BAD_REQUEST);

        if (address.isDefault && updatedCustomer.addresses.length && updatedCustomer.addresses.length > 1) {
            let check = false;
            updatedCustomer.addresses.forEach(address => {
                if (address.isDefault && updatedCustomer.addresses[updatedCustomer.addresses.length - 1].id !== address.id) {
                    address.isDefault = false;
                    check = true;
                }
            })
            check && await this.customerRepo.updateCustomer(customerId, updatedCustomer);
        }
        return this.helper.serviceResponse.successResponse(updatedCustomer, HttpStatus.OK);
    }

    async updateCustomerAddress(customerId: string, addressId: string, address: CustomerAddress): Promise<UpdateCustomerAddressResponse> {
        const updatedCustomer = await this.customerRepo.updateCustomerAddress(customerId, addressId, address);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse(UpdateCustomerAddressErrorMessages.CAN_NOT_UPDATE_CUSTOMER_ADDRESS, null, HttpStatus.BAD_REQUEST);

        if (address.isDefault && updatedCustomer.addresses.length && updatedCustomer.addresses.length > 1) {
            let check = false;
            updatedCustomer.addresses.forEach(address => {
                if (address.isDefault && addressId !== address.id) {
                    address.isDefault = false;
                    check = true;
                }
            })
            check && await this.customerRepo.updateCustomer(customerId, updatedCustomer);
        }

        return this.helper.serviceResponse.successResponse(updatedCustomer, HttpStatus.OK);
    }

    async deleteCustomerAddress(customerId: string, addressId: string): Promise<DeleteCustomerAddressResponse> {
        let customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse(GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND, null, HttpStatus.BAD_REQUEST);

        const updatedCustomer = await this.customerRepo.deleteCustomerAddress(customerId, addressId);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse(DeleteCustomerAddressErrorMessages.CAN_NOT_DELETE_CUSTOMER_ADDRESS, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedCustomer, HttpStatus.OK);
    }
}