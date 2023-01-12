import { UserService } from '../services';
import { User } from '../../../entity/user';
import { Response } from 'express';
import { ChangePasswordDto, UpdatedUserDto } from './dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(user: User, res: Response): Promise<{
        data: User;
        code: number;
    } | {
        error: import("@bs-commerce/models").GetUserErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    updateUser(data: UpdatedUserDto, userInfo: User, res: Response): Promise<{
        data: User;
        code: number;
    } | {
        error: import("@bs-commerce/models").UpdateUserErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    changePassword(passwordDetails: ChangePasswordDto, userInfo: User, res: Response): Promise<{
        error: import("@bs-commerce/models").ChangePasswordErrorMessages;
        errors: DescriptiveError;
        code: number;
    } | {
        data: {
            message?: import("@bs-commerce/models").ChangePasswordSuccessMessage;
        };
        code: number;
    }>;
}
