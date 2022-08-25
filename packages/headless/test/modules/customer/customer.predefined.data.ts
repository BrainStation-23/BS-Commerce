import { CustomerAddress } from 'src/entity/customer';
import { UpdateCustomerDto } from 'src/modules/customer/rest/dto';

export const CustomerId = '1556804d-411c-471e-b1d4-212ad06d890a';
export const CustomerEmail = 'robert@gmail.com';

export const validAddress: CustomerAddress = {
    firstName: 'James',
    lastName: 'Ben',
    addressLine1: 'Sector 11, Uttara, Dhaka',
    addressLine2: 'Sector 10, Uttara, Dhaka',
    country: 'BD',
    postCode: '1230',
    isDefault: true,
    company: 'etc',
    state: 'etc',
    phone: '01770964628',
    tag: 'HOME',
}

export const missingDataAddress = {}

export const invalidAddress = {
    addressLine1: 'Sector 10, Uttara, Dhaka',
    addressLine2: 'Sector 11, Uttara, Dhaka',
    postCode: 1234,
}

export const updateCustomerWIthExistingEmail: UpdateCustomerDto = {
    name: 'Robert',
    email: 'james@gmail.com'
}

export const updateCustomerValidData: UpdateCustomerDto = {
    name: 'Robert',
}

export const updateCustomerInvalidData = {
    name: 'Robert',
    phone: 1770964628
}