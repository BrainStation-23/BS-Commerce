import {
    CreateCustomerDto,
    CustomerSignInDto,
    SendOtpDto,
} from 'src/modules/customer-auth/rest/dto';
import { CustomerDto } from 'src/modules/customer-auth/rest/dto/customer.dto';

export const sendOtpRequestWithEmail: SendOtpDto = {
    email: 'james@gmail.com'
}

export const existingCustomerSendOtpRequest: SendOtpDto = {
    email: 'robert@gmail.com'
}

export const invalidSendOtpRequestWithEmail: SendOtpDto = {
    email: 'james@gm'
}

export const customer: CustomerDto = {
    id: '574c0c31-e4cd-470b-a652-f964fb437b49',
    name: 'james Ben',
    email: 'james@gmail.com'
}

export const createCustomerRequestWithEmail: Partial<CreateCustomerDto> = {
    email: 'james@gmail.com',
    name: 'James Ben',
    password: 'customer@123'
};

export const invalidCreateCustomerRequestWithoutPassword: Partial<CreateCustomerDto> = {
    email: 'james@gmail.com',
    name: 'James Ben',
}

export const invalidCreateCustomerRequestWithLessThanSixCharactersPassword: Partial<CreateCustomerDto> = {
    email: 'james@gmail.com',
    name: 'James Ben',
    password: 'cus',
}

export const validCustomerSignInDataWithEmail: CustomerSignInDto = {
    email: 'james@gmail.com',
    password: 'customer@123'
};

export const invalidCustomerSignInDataWithEmail: CustomerSignInDto = {
    email: 'is6526@gmail.com',
    password: 'customer@123'
};

export const invalidCustomerSignInDataWithPhone: CustomerSignInDto = {
    phone: '01770964627',
    password: 'customer@123'
};

export const invalidCustomerSignInDataWithoutPhoneAndEmail = {
    password: 'customer@123'
}