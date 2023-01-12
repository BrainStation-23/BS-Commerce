import { UserService } from '../services';
import { Admin, ChangePasswordInput, UpdateUserInput } from './user.model';
import { Helper } from '../../../helper/helper.interface';
export declare class UserResolver {
    private userService;
    private helper;
    constructor(userService: UserService, helper: Helper);
    getUser(admin: Admin): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    updateUser(data: UpdateUserInput, admin: Admin): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    changePassword(passwordDetails: ChangePasswordInput, admin: Admin): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
}
