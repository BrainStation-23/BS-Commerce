import { Model } from 'sequelize-typescript';
import UserModel from './user.model';
export default class AddressModel extends Model {
    id: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
    postCode: string;
    userId: number;
    user: UserModel;
}
