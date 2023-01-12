import { AuthService } from '../services';
import { AdminSignInInput, AdminSignUpInput } from './auth.model';
import { Helper } from '../../../helper/helper.interface';
export declare class AuthResolver {
    private authService;
    private helper;
    constructor(authService: AuthService, helper: Helper);
    signUp(admin: AdminSignUpInput): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    signIn(data: AdminSignInInput): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
}
