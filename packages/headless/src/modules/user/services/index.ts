import { HttpStatus, Injectable } from "@nestjs/common";
import * as Joi from "joi";
import * as bcrypt from 'bcrypt';
import { validateParams } from "src/decorators/service.validator";
import { ChangePassword, UpdatedUser } from "src/entity/user";
import { Helper } from "src/helper/helper.interface";
import { ServiceErrorResponse, ServiceSuccessResponse } from "src/helper/serviceResponse/service.response.interface";
import { UserRepository } from "../repositories";
import { ChangePasswordSchema } from "../validations/password.validator";
import { UserUpdateSchema } from "../validations/user.validator";
import { authConfig } from "config/auth";

@Injectable()
export class UserService {
    constructor(private userRepo: UserRepository, private helper: Helper) { }

    @validateParams({ schema: Joi.string().required().label('userId') })
    async getUser(userId: string): Promise<ServiceErrorResponse | ServiceSuccessResponse> {
        const user = await this.userRepo.findUser({ id: userId });
        if (!user) return this.helper.serviceResponse.errorResponse('Can\'t Get User.', null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(user, HttpStatus.OK);
    }

    @validateParams({ schema: Joi.string().required().label('userId') }, { schema: UserUpdateSchema })
    async updateUser(userId: string, data: UpdatedUser): Promise<ServiceErrorResponse | ServiceSuccessResponse> {
        let user = await this.userRepo.findUser({ id: userId });

        user = Object.assign(user, data);
        user.displayName = user.firstName + ' ' + user.lastName;

        const updatedUser = await this.userRepo.updateUser(userId, user);
        if (!updatedUser) return this.helper.serviceResponse.errorResponse('Can\'t Update This User.', null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedUser, HttpStatus.OK);

    }

    @validateParams({ schema: Joi.string().required().label('userId') }, { schema: ChangePasswordSchema })
    async changePassword(userId: string, passwordDetails: ChangePassword): Promise<ServiceErrorResponse | ServiceSuccessResponse> {
        if (passwordDetails.newPassword !== passwordDetails.verifyPassword) return this.helper.serviceResponse.errorResponse('Passwords do not match.', null, HttpStatus.BAD_REQUEST);

        const user = await this.userRepo.getUserPassword({ id: userId });
        if (!user) return this.helper.serviceResponse.errorResponse('User is not found.', null, HttpStatus.BAD_REQUEST);

        const doesPasswordMatch = await bcrypt.compare(passwordDetails.currentPassword, user.password);
        if (!doesPasswordMatch) return this.helper.serviceResponse.errorResponse('Current Password is incorrect.', null, HttpStatus.BAD_REQUEST,);

        user.password = await bcrypt.hash(user.password, authConfig.salt!);

        const updatedUser = await this.userRepo.updateUser(userId, user);
        if (!updatedUser) return this.helper.serviceResponse.errorResponse('Can\'t Change Password.', null, HttpStatus.BAD_REQUEST);
        return this.helper.serviceResponse.successResponse(updatedUser, HttpStatus.OK);
    }
}