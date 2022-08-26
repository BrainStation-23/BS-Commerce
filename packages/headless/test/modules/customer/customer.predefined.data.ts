import { CustomerAddress } from 'src/entity/customer';
import { UpdateCustomerDto } from 'src/modules/customer/rest/dto';

export const validAddress: CustomerAddress = {
    firstName: 'James',
    lastName: 'Robert',
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

export const updateCustomerValidData: UpdateCustomerDto = {
    name: 'Robert',
}

export const updateCustomerInvalidData = {
    name: 'Robert',
    phone: 1770964628
}