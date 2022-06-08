import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Helper } from 'src/helper/helper.interface';
import { UserRepository } from '../repositories';
import { authConfig } from 'config/auth';
import { ChangePasswordDto, UpdatedUserDto } from '../dto';
import {
    GetUserResponse,
    UpdateUserResponse,
    ChangePasswordResponse,
    GetUserErrorMessages,
    UpdateUserErrorMessages,
    ChangePasswordErrorMessages,
    ChangePasswordSuccessMessage
} from 'models'

@Injectable()
export class UserService {
    constructor(private userRepo: UserRepository) { }

    async getUser(userId: string): Promise<GetUserResponse> {
        const user = await this.userRepo.findUser({ id: userId });
        if (!user) return { error: GetUserErrorMessages.CAN_NOT_GET_USER, errors: null, code: HttpStatus.BAD_REQUEST };
        return { data: user, code: HttpStatus.OK };
    }

    async updateUser(userId: string, data: UpdatedUserDto): Promise<UpdateUserResponse> {
        let user = await this.userRepo.findUser({ id: userId });
        if (!user) return { error: UpdateUserErrorMessages.CAN_NOT_GET_USER, errors: null, code: HttpStatus.BAD_REQUEST };

        user = Object.assign(user, data);
        user.displayName = user.firstName + ' ' + user.lastName;
        const { addresses, ...rest } = user;

        // user update his/her old address
        if (data.address && data.address.id) {
            const updatedUser = await this.userRepo.updateUserAndAddress(userId, rest, data.address);
            if (!updatedUser) return { error: UpdateUserErrorMessages.CAN_NOT_UPDATE_USER_ADDRESS, errors: null, code: HttpStatus.BAD_REQUEST };
            return { data: updatedUser, code: HttpStatus.OK };
        }

        // user add his/her new address
        if (data.address && !data.address.id) {
            const updatedUser = await this.userRepo.updateUserWithNewAddress(userId, rest, data.address);
            if (!updatedUser) return { error: UpdateUserErrorMessages.CAN_NOT_ADD_USER_NEW_ADDRESS, errors: null, code: HttpStatus.BAD_REQUEST };
            return { data: updatedUser, code: HttpStatus.OK };
        }

        const updatedUser = await this.userRepo.updateUser(userId, user);
        if (!updatedUser) return { error: UpdateUserErrorMessages.CAN_NOT_UPDATE_USER, errors: null, code: HttpStatus.BAD_REQUEST };
        return { data: updatedUser, code: HttpStatus.OK };
    }

    async changePassword(userId: string, passwordDetails: ChangePasswordDto): Promise<ChangePasswordResponse> {
        const user = await this.userRepo.getUserPassword({ id: userId });
        if (!user) return { error: ChangePasswordErrorMessages.CAN_NOT_GET_USER, errors: null, code: HttpStatus.BAD_REQUEST };

        const doesPasswordMatch = await bcrypt.compare(passwordDetails.currentPassword, user.password);
        if (!doesPasswordMatch) return { error: ChangePasswordErrorMessages.CURRENT_PASSWORD_IS_INCORRECT, errors: null, code: HttpStatus.BAD_REQUEST };

        user.password = await bcrypt.hash(passwordDetails.newPassword, authConfig.salt!);

        const updatedUser = await this.userRepo.updateUser(userId, user);
        if (!updatedUser) return { error: ChangePasswordErrorMessages.CAN_NOT_CHANGE_PASSWORD, errors: null, code: HttpStatus.BAD_REQUEST };
        return { data: { message: ChangePasswordSuccessMessage.CHANGE_PASSWORD_SUCCESSFUL }, code: HttpStatus.OK };
    }
}