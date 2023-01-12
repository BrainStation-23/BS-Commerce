import { Model } from 'sequelize-typescript';
import { User } from '../../../entity/user';
import AddressModel from './address.model';
export default class UserModel extends Model<User> {
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
    username: string;
    phone: string;
    email: string;
    password: string;
    provider: string;
    resetPasswordToken: string;
    resetPasswordExpires: number;
    gender: string;
    addresses: AddressModel[];
    status: string;
}
