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
} from 'models';

@Injectable()
export class UserService {
    constructor(private userRepo: UserRepository, private helper: Helper) { }

    async getUser(userId: string): Promise<GetUserResponse> {
        const user = await this.userRepo.findUser({ id: userId });
        if (!user) return this.helper.serviceResponse.errorResponse(GetUserErrorMessages.CAN_NOT_GET_USER, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(user, HttpStatus.OK);
    }

    async updateUser(userId: string, data: UpdatedUserDto): Promise<UpdateUserResponse> {
        let user = await this.userRepo.findUser({ id: userId });
        if (!user) return this.helper.serviceResponse.errorResponse(UpdateUserErrorMessages.CAN_NOT_GET_USER, null, HttpStatus.BAD_REQUEST);

        user = Object.assign(user, data);
        user.displayName = user.firstName + ' ' + user.lastName;
        const { addresses, ...rest } = user;

        // user update his/her old address
        if (data.address && data.address.id) {
            const updatedUser = await this.userRepo.updateUserAndAddress(userId, rest, data.address);
            if (!updatedUser) return this.helper.serviceResponse.errorResponse(UpdateUserErrorMessages.CAN_NOT_UPDATE_USER_ADDRESS, null, HttpStatus.BAD_REQUEST);
            return this.helper.serviceResponse.successResponse(updatedUser, HttpStatus.OK);
        }

        // user add his/her new address
        if (data.address && !data.address.id) {
            const updatedUser = await this.userRepo.updateUserWithNewAddress(userId, rest, data.address);
            if (!updatedUser) return this.helper.serviceResponse.errorResponse(UpdateUserErrorMessages.CAN_NOT_ADD_USER_NEW_ADDRESS, null, HttpStatus.BAD_REQUEST);
            return this.helper.serviceResponse.successResponse(updatedUser, HttpStatus.OK);
        }

        const updatedUser = await this.userRepo.updateUser(userId, user);
        if (!updatedUser) return this.helper.serviceResponse.errorResponse(UpdateUserErrorMessages.CAN_NOT_UPDATE_USER, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedUser, HttpStatus.OK);
    }

    async changePassword(userId: string, passwordDetails: ChangePasswordDto): Promise<ChangePasswordResponse> {
        const user = await this.userRepo.getUserPassword({ id: userId });
        if (!user) return this.helper.serviceResponse.errorResponse(ChangePasswordErrorMessages.CAN_NOT_GET_USER, null, HttpStatus.BAD_REQUEST);

        const doesPasswordMatch = await bcrypt.compare(passwordDetails.currentPassword, user.password);
        if (!doesPasswordMatch) return this.helper.serviceResponse.errorResponse(ChangePasswordErrorMessages.CURRENT_PASSWORD_IS_INCORRECT, null, HttpStatus.BAD_REQUEST,);

        user.password = await bcrypt.hash(passwordDetails.newPassword, authConfig.salt!);

        const updatedUser = await this.userRepo.updateUser(userId, user);
        if (!updatedUser) return this.helper.serviceResponse.errorResponse(ChangePasswordErrorMessages.CAN_NOT_CHANGE_PASSWORD, null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse({ message: ChangePasswordSuccessMessage.CHANGE_PASSWORD_SUCCESSFUL }, HttpStatus.OK);
    }
}