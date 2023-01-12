import { Helper } from '../../../helper/helper.interface';
import { UserRepository } from '../repositories';
import { GetUserResponse, UpdateUserResponse, ChangePasswordResponse, UpdatedUserRequest } from '@bs-commerce/models';
import { ChangePassword } from '../../../entity/user';
export declare class UserService {
    private userRepo;
    private helper;
    constructor(userRepo: UserRepository, helper: Helper);
    getUser(userId: string): Promise<GetUserResponse>;
    updateUser(userId: string, data: UpdatedUserRequest): Promise<UpdateUserResponse>;
    changePassword(userId: string, passwordDetails: ChangePassword): Promise<ChangePasswordResponse>;
}
