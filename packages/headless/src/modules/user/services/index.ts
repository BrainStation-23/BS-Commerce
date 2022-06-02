import { HttpStatus, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { Helper } from "src/helper/helper.interface";
import { ServiceErrorResponse, ServiceSuccessResponse } from "src/helper/serviceResponse/service.response.interface";
import { UserRepository } from "../repositories";
import { authConfig } from "config/auth";
import { ChangePasswordDto, UpdatedUserDto } from "../dto/user.dto";
import type { GetUserSuccessResponse, GetUserErrorResponse, UpdateUserSuccessResponse, UpdateUserErrorResponse, ChangePasswordSuccessResponse, ChangePasswordErrorResponse } from 'models'

@Injectable()
export class UserService {
    constructor(private userRepo: UserRepository, private helper: Helper) { }

    async getUser(userId: string): Promise<ServiceErrorResponse | ServiceSuccessResponse> {
        const user = await this.userRepo.findUser({ id: userId });
        if (!user) return this.helper.serviceResponse.errorResponse('Can\'t Get User.', null, HttpStatus.BAD_REQUEST) as GetUserErrorResponse;
        return this.helper.serviceResponse.successResponse(user, HttpStatus.OK) as GetUserSuccessResponse;
    }

    async updateUser(userId: string, data: UpdatedUserDto): Promise<ServiceErrorResponse | ServiceSuccessResponse> {
        let user = await this.userRepo.findUser({ id: userId });
        if (!user) return this.helper.serviceResponse.errorResponse('Can\'t Get User.', null, HttpStatus.BAD_REQUEST) as GetUserErrorResponse;

        user = Object.assign(user, data);
        user.displayName = user.firstName + ' ' + user.lastName;
        const { addresses, ...rest } = user;

        // user update his/her old address
        if (data.address && data.address.id) {
            const updatedUser = await this.userRepo.updateUserAndAddress(userId, rest, data.address);
            if (!updatedUser) return this.helper.serviceResponse.errorResponse('Can\'t Update This User Address.', null, HttpStatus.BAD_REQUEST) as UpdateUserErrorResponse;
            return this.helper.serviceResponse.successResponse(updatedUser, HttpStatus.OK) as UpdateUserSuccessResponse;
        }

        // user add his/her new address
        if (data.address && !data.address.id) {
            const updatedUser = await this.userRepo.updateUserWithNewAddress(userId, rest, data.address);
            if (!updatedUser) return this.helper.serviceResponse.errorResponse('Can\'t Add new Address.', null, HttpStatus.BAD_REQUEST) as UpdateUserErrorResponse;
            return this.helper.serviceResponse.successResponse(updatedUser, HttpStatus.OK) as UpdateUserSuccessResponse;
        }

        const updatedUser = await this.userRepo.updateUser(userId, user);
        if (!updatedUser) return this.helper.serviceResponse.errorResponse('Can\'t Update This User.', null, HttpStatus.BAD_REQUEST) as UpdateUserErrorResponse;
        return this.helper.serviceResponse.successResponse(updatedUser, HttpStatus.OK) as UpdateUserSuccessResponse;

    }

    async changePassword(userId: string, passwordDetails: ChangePasswordDto): Promise<ServiceErrorResponse | ServiceSuccessResponse> {

        const user = await this.userRepo.getUserPassword({ id: userId });
        if (!user) return this.helper.serviceResponse.errorResponse('User is not found.', null, HttpStatus.BAD_REQUEST) as GetUserErrorResponse;

        const doesPasswordMatch = await bcrypt.compare(passwordDetails.currentPassword, user.password);
        if (!doesPasswordMatch) return this.helper.serviceResponse.errorResponse('Current Password is incorrect.', null, HttpStatus.BAD_REQUEST,) as ChangePasswordErrorResponse;

        user.password = await bcrypt.hash(passwordDetails.newPassword, authConfig.salt!);

        const updatedUser = await this.userRepo.updateUser(userId, user);
        if (!updatedUser) return this.helper.serviceResponse.errorResponse('Can\'t Change Password.', null, HttpStatus.BAD_REQUEST) as ChangePasswordErrorResponse;
        return this.helper.serviceResponse.successResponse(updatedUser, HttpStatus.OK) as ChangePasswordSuccessResponse;
    }
}