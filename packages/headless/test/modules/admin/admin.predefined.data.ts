import { AddressDto, UpdatedUserDto, UserDto } from 'src/modules/user/dto';

export const AdminId = '21b38a0b-95f8-43bf-90f1-7dfb64ed885b';
export const Username = 'ismail61@gmail.com';

const addressWithId: AddressDto = {
    id: 'b41a11a5-b3f8-4e8b-8645-bbad7e9e1327',
    addressLine1: 'Sector 11, Uttara, Dhaka',
    addressLine2: 'Sector 10, Uttara, Dhaka',
    city: 'Dhaka',
    country: 'BD',
    postCode: '1230',
}

const addressWithoutId: AddressDto = {
    addressLine1: 'Sector 10, Uttara, Dhaka',
    addressLine2: 'Sector 11, Uttara, Dhaka',
    city: 'Dhaka',
    country: 'BD',
    postCode: '1230',
}

const invalidAddress = {
    addressLine1: 'Sector 10, Uttara, Dhaka',
    addressLine2: 'Sector 11, Uttara, Dhaka',
    postCode: '1230',
}

export const updateAdminWithNewAddress: UpdatedUserDto = {
    firstName: 'Md Ismail',
    lastName: 'Hosen',
    phone: '01770964628',
    gender: 'male',
    address: addressWithoutId,
    status: 'active',
}

export const updateAdminWithOldAddress: UpdatedUserDto = {
    firstName: 'Md Ismail',
    lastName: 'Hosen',
    phone: '01770964628',
    gender: 'male',
    address: addressWithId,
    status: 'active',
}

export const updateAdminWithoutAddress: UpdatedUserDto = {
    firstName: 'Md Ismail',
    lastName: 'Hosen',
    phone: '01770964628',
    gender: 'male',
    status: 'active',
}

export const updateAdminWithNewAddressMissingData = {
    firstName: 'Md Ismail',
    address: invalidAddress,
    status: 'active',
}