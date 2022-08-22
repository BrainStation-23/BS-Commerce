import { CreateCustomerDto, CustomerSignInDto } from 'src/modules/customer-auth/rest/dto';
import { CustomerDto } from 'src/modules/customer-auth/rest/dto/customer.dto';

export const customer: CustomerDto = {
    id: '472560d2-5138-466c-8dc4-d705585021bc',
    phone: '01770964628',
    otp: '12345',
    email: 'ismail@gmail.com'
}

export const createCustomerRequestWithPhone: Partial<CreateCustomerDto> = {
    phone: '01770964628',
    otp: '12345',
    password: 'ismail'
};

export const createCustomerRequestWithEmail: Partial<CreateCustomerDto> = {
    email: 'ismail@gmail.com',
    otp: '12345',
    password: 'ismail'
};

export const invalidCreateCustomerRequestWithoutOtp: Partial<CreateCustomerDto> = {
    phone: '01770964628',
    password: 'ismail'
}

export const invalidCreateCustomerRequestWithoutPassword: Partial<CreateCustomerDto> = {
    email: 'ismail@gmail.com',
    otp: '12345',
}

export const invalidCreateCustomerRequestWithLessThanSixCharactersPassword: Partial<CreateCustomerDto> = {
    email: 'ismail@gmail.com',
    password: 'ism',
}

export const validCustomerSignInDataWithEmail: CustomerSignInDto = {
    email: 'ismail@gmail.com',
    password: 'ismail'
};

export const validCustomerSignInDataWithPhone: CustomerSignInDto = {
    phone: '01770964628',
    password: 'ismail'
};

export const invalidCustomerSignInDataWithEmail: CustomerSignInDto = {
    email: 'is6526@gmail.com',
    password: 'ismail'
};

export const invalidCustomerSignInDataWithPhone: CustomerSignInDto = {
    phone: '01770964627',
    password: 'ismail'
};

export const invalidCustomerSignInDataWithoutPassword = {
    phone: '01770964627',
}

export const invalidCustomerSignInDataWithoutPhoneAndEmail = {
    password: 'ismail'
}