import * as Joi from 'joi';
import { ChangePassword } from 'src/entity/user';
export const ChangePasswordSchema = Joi.object<ChangePassword, true>({
    currentPassword: Joi.string().min(6).required().messages({ 'string.min': 'Password must be minimum 6 Characters', }),
    newPassword: Joi.string().min(6).required().messages({ 'string.min': 'Password must be minimum 6 Characters', }),
});
