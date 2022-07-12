import { CreateUserDto, SignInDataDto } from 'src/modules/auth/dto';
import { UserDto } from 'src/modules/user/dto';

export const admin: UserDto = {
    id: '472560d2-5138-466c-8dc4-d705585021bc',
    firstName: 'Md Ismail',
    lastName: 'Hosen',
    displayName: 'Md Ismail Hosen',
    username: 'ismail61@gmail.com',
    email: 'ismail61@gmail.com'
}

export const createAdminRequest: CreateUserDto = {
    firstName: 'Md Ismail',
    lastName: 'Hosen',
    email: 'ismail61@gmail.com',
    password: 'ismail61'
};

export const invalidCreateAdminRequestWithoutFirstName = {
    lastName: 'Hosen',
    email: 'ismail61@gmail.com',
    password: 'ismail61'
}

export const invalidCreateAdminRequestWithoutLastName = {
    firstName: 'Md Ismail',
    email: 'ismail61@gmail.com',
    password: 'ismail61'
}

export const invalidCreateAdminRequestWithoutEmail = {
    firstName: 'Md Ismail',
    lastName: 'Hosen',
    password: 'ismail61'
}

export const invalidCreateAdminRequestInvalidEmail = {
    firstName: 'Md Ismail',
    lastName: 'Hosen',
    password: 'ismail61',
    email: 'ismail61@gma',
}

export const invalidCreateAdminRequestWithoutPassword = {
    firstName: 'Md Ismail',
    lastName: 'Hosen',
    email: 'ismail61@gmail.com',
}

export const invalidCreateAdminRequestWithLessThanSixCharactersPassword = {
    firstName: 'Md Ismail',
    lastName: 'Hosen',
    email: 'ismail61@gmail.com',
    password: 'isma',
}

export const signInData: SignInDataDto = {
    username: 'ismail61@gmail.com',
    password: 'ismail61'
};

export const invalidSignInData: SignInDataDto = {
    username: 'ismail60271@gmail.com',
    password: 'isma61@',
}

export const invalidSignInAdminRequestWithoutPassword = {
    username: 'ismail61@gmail.com',
}

export const invalidSignInAdminRequestWithoutUsername = {
    password: 'ismail61'
}