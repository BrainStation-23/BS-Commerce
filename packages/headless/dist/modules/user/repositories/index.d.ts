import { Address, User } from '../../../entity/user';
import { IUserDatabase } from './user.database.interface';
export declare class UserRepository {
    private readonly db;
    constructor(db: IUserDatabase);
    createUser(user: User): Promise<User | null>;
    findUser(query: Record<string, any>): Promise<User | null>;
    getUserPassword(query: Record<string, string>): Promise<User | null>;
    updateUser(userId: string, user: User): Promise<User | null>;
    updateUserWithNewAddress(userId: string, user: User, address: Address): Promise<User | null>;
    updateUserAndAddress(userId: string, user: User, address: Address): Promise<User | null>;
}
