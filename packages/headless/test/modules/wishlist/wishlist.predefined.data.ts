import { AddressDto, ChangePasswordDto, UpdatedUserDto } from 'src/modules/user/rest/dto';
import { AddToWishlistRequestDto } from 'src/modules/wishlist/rest/dto';
import { TestProductId } from 'test/test-utility';

export const invalidWishlistItem = {
    productId: TestProductId
}

export const validWishlistItem: AddToWishlistRequestDto = {
    productId: TestProductId,
    quantity: 2
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
    firstName: 'Robert',
    lastName: 'Tyler',
    phone: '01770964628',
    gender: 'male',
    address: addressWithoutId,
    status: 'active',
}

export const updateAdminWithOldAddress: UpdatedUserDto = {
    firstName: 'Robert',
    lastName: 'Tyler',
    phone: '01770964628',
    gender: 'male',
    address: adminAddress,
    status: 'active',
}

export const updateAdminWithoutAddress: UpdatedUserDto = {
    firstName: 'Robert',
    lastName: 'Tyler',
    phone: '01770964628',
    gender: 'male',
    status: 'active',
}

export const updateAdminWithNewAddressMissingData = {
    firstName: 'Robert',
    address: invalidAddress,
    status: 'active',
}

export const incorrectCurrentChangePasswordRequest: ChangePasswordDto = {
    currentPassword: 'incorrect',
    newPassword: 'admin@123',
}

export const changePasswordRequestWithLessThanSixCharactersNewPassword: ChangePasswordDto = {
    currentPassword: 'admin@123',
    newPassword: 'admin',
}

export const changePasswordRequestWithoutNewPassword = {
    currentPassword: 'admin@123',
}

export const validCurrentChangePasswordRequest: ChangePasswordDto = {
    currentPassword: 'admin@123',
    newPassword: 'admin@123',
}
