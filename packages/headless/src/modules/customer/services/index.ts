import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper } from 'src/helper/helper.interface';
import * as bcrypt from 'bcrypt';
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
    CustomerChangePasswordResponse,
    CustomerChangePasswordErrorMessages,
    CustomerChangePasswordSuccessMessage,
    SendOtpRequest,
    SendOtpResponse,
    SendOtpErrorMessages,
    VerifyOtpErrorMessages,
} from 'models';
import { CustomerAddress } from 'src/entity/customer';
import { ChangePassword } from 'src/entity/user';
import { authConfig } from 'config/auth';
const FIVE_MINUTES = 5 * 60 * 1000;

@Injectable()
export class CustomerService {
    constructor(private customerRepo: CustomerRepository, private helper: Helper) { }

    async getCustomer(customerId: string): Promise<GetCustomerInformationResponse> {
        const customer = await this.customerRepo.findCustomer({ id: customerId });
        if (!customer) return this.helper.serviceResponse.errorResponse(GetCustomerInformationErrorMessages.CUSTOMER_NOT_FOUND, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(customer, HttpStatus.OK);
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

        customer = Object.assign(customer, data);

        const updatedCustomer = await this.customerRepo.updateCustomer(customerId, customer);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse(UpdateCustomerErrorMessages.CAN_NOT_UPDATE_CUSTOMER_INFORMATION, null, HttpStatus.BAD_REQUEST);
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

    async changePassword(customerId: string, data: ChangePassword): Promise<CustomerChangePasswordResponse> {
        const { currentPassword, newPassword } = data;
        let customer = null;
        customer = data.email && await this.customerRepo.getCustomerPassword({ email: data.email, id: customerId });
        customer = data.phone && await this.customerRepo.getCustomerPassword({ phone: data.phone, id: customerId }) || customer;
        if (!customer) return this.helper.serviceResponse.errorResponse(CustomerChangePasswordErrorMessages.INVALID_USER_OR_PASSWORD, null, HttpStatus.BAD_REQUEST);

        const verifyOtp = (data.email || data.phone) && await this.customerRepo.findOtp({ ...data, otpExpireTime: { $gt: Date.now() } });
        if (!verifyOtp) return this.helper.serviceResponse.errorResponse(VerifyOtpErrorMessages.OTP_EXPIRED_OR_INVALID_OTP, null, HttpStatus.BAD_REQUEST);

        const doesPasswordMatch = await bcrypt.compare(currentPassword, customer.password);
        if (!doesPasswordMatch) return this.helper.serviceResponse.errorResponse(CustomerChangePasswordErrorMessages.CURRENT_PASSWORD_IS_INCORRECT, null, HttpStatus.BAD_REQUEST,);

        customer.password = await bcrypt.hash(newPassword, authConfig.salt!);

        const updatedCustomer = await this.customerRepo.updateCustomer(customer.id, customer);
        if (!updatedCustomer) return this.helper.serviceResponse.errorResponse(CustomerChangePasswordErrorMessages.CAN_NOT_CHANGE_PASSWORD, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ message: CustomerChangePasswordSuccessMessage.CHANGE_PASSWORD_SUCCESSFUL }, HttpStatus.OK);
    }

    async changePasswordSendOTP(customerId: string, data: SendOtpRequest): Promise<SendOtpResponse> {
        let customer = null;
        customer = data.email && await this.customerRepo.findCustomer({ email: data.email, id: customerId });
        customer = data.phone && await this.customerRepo.findCustomer({ phone: data.phone, id: customerId }) || customer;
        if (!customer) return this.helper.serviceResponse.errorResponse(CustomerChangePasswordErrorMessages.INVALID_USER_OR_PASSWORD, null, HttpStatus.BAD_REQUEST);

        return await this.sendOtp(data);
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
            return this.helper.serviceResponse.successResponse({ message: `Your Bs-Commerce OTP is ${randomOtp}` }, HttpStatus.OK);
        }
        const otpSend = (data.email || data.phone) && await this.customerRepo.sendOtp({ ...data, otp: randomOtp, otpExpireTime: Date.now() + FIVE_MINUTES });
        if (!otpSend) return this.helper.serviceResponse.errorResponse(SendOtpErrorMessages.CAN_NOT_SEND_OTP, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ message: `Your Bs-Commerce OTP is ${randomOtp}` }, HttpStatus.OK);
    }
}