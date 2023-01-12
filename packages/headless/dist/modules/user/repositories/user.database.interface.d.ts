import { Address, User } from '../../../entity/user';
export declare abstract class IUserDatabase {
    abstract createUser: (user: User) => Promise<User | null>;
    abstract findUser: (query: Record<string, string>) => Promise<User | null>;
    abstract getUserPassword(query: Record<string, string>): Promise<User | null>;
    abstract updateUser: (userId: string, user: User) => Promise<User | null>;
    abstract updateUserWithNewAddress: (userId: string, user: User, address: Address) => Promise<User | null>;
    abstract updateUserAndAddress: (userId: string, user: User, address: Address) => Promise<User | null>;
}
