import { HttpStatus, Injectable } from "@nestjs/common";
import * as Joi from "joi";
import { validateParams } from "src/decorators/service.validator";
import { UpdatedUser } from "src/entity/user";
import { Helper } from "src/helper/helper.interface";
import { ServiceErrorResponse, ServiceSuccessResponse } from "src/helper/serviceResponse/service.response.interface";
import { UserRepository } from "../repositories";
import { UserUpdateSchema } from "../validations/user.update.validator";

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
}