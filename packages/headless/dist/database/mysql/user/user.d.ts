import { Address, User } from '../../../entity/user';
import { IUserDatabase } from '../../../modules/user/repositories/user.database.interface';
export declare class UserDatabase implements IUserDatabase {
    createUser(user: User): Promise<User | null>;
    getUserPassword(query: Record<string, string>): Promise<User | null>;
    findUser(query: Record<string, any>): Promise<User | null>;
    updateUser(userId: string, user: User): Promise<User | null>;
    updateUserWithNewAddress(userId: string, user: User, address: Address): Promise<User | null>;
    updateUserAndAddress(userId: string, user: User, address: Address): Promise<User | null>;
}
