import { CreateUserDto, SignInDataDto } from "src/modules/auth/rest/dto";
import { UserDto } from "src/modules/user/rest/dto";

export const admin: UserDto = {
    id: '472560d2-5138-466c-8dc4-d705585021bc',
    firstName: 'Robert',
    lastName: 'Tyler',
    displayName: 'Robert Tyler',
    username: 'robert@gmail.com',
    email: 'robert@gmail.com'
}

export const createAdminRequest: CreateUserDto = {
    firstName: 'Robert',
    lastName: 'Tyler',
    email: 'robert@gmail.com',
    password: 'admin@123'
};

export const invalidCreateAdminRequestWithoutFirstName = {
    lastName: 'Tyler',
    email: 'robert@gmail.com',
    password: 'admin@123'
}

export const invalidCreateAdminRequestWithoutLastName = {
    firstName: 'Robert',
    email: 'robert@gmail.com',
    password: 'admin@123'
}

export const invalidCreateAdminRequestWithoutEmail = {
    firstName: 'Robert',
    lastName: 'Tyler',
    password: 'admin@123'
}

export const invalidCreateAdminRequestInvalidEmail = {
    firstName: 'Robert',
    lastName: 'Tyler',
    email: 'robert@gma',
    password: 'admin@123'
}

export const invalidCreateAdminRequestWithoutPassword = {
    firstName: 'Robert',
    lastName: 'Tyler',
    email: 'robert@gmail.com',
}

export const invalidCreateAdminRequestWithLessThanSixCharactersPassword = {
    firstName: 'Robert',
    lastName: 'Tyler',
    email: 'robert@gmail.com',
    password: 'admin'
}

export const signInData: SignInDataDto = {
    username: 'robert@gmail.com',
    password: 'admin@123'
};

export const invalidSignInData: SignInDataDto = {
    username: 'robert@gmail.com',
    password: 'admin@'
}

export const invalidSignInAdminRequestWithoutPassword = {
    username: 'robert@gmail.com',
}

export const invalidSignInAdminRequestWithoutUsername = {
    password: 'admin@123'
}