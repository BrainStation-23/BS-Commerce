import { Customer, CustomerAddress } from '../../../entity/customer';
import { Otp } from '../../../entity/otp';
import { ICustomerDatabase } from './customer.database.interface';
export declare class CustomerRepository {
    private readonly db;
    constructor(db: ICustomerDatabase);
    createCustomer(customer: Customer): Promise<Customer | null>;
    sendOtp(data: Otp): Promise<Otp | null>;
    verifyOtp(query: Record<string, any>): Promise<Otp | null>;
    findOtp(query: Record<string, any>): Promise<Otp | null>;
    deleteOtp(query: Record<string, any>): Promise<Otp | null>;
    updateOtp(query: Record<string, any>, data: object): Promise<Otp | null>;
    findCustomer(query: Record<string, any>): Promise<Customer | null>;
    updateCustomer(customerId: string, customer: Customer): Promise<Customer | null>;
    addCustomerNewAddress(customerId: string, address: CustomerAddress): Promise<Customer | null>;
    updateCustomerAddress(customerId: string, addressId: string, address: CustomerAddress): Promise<Customer | null>;
    deleteCustomerAddress(customerId: string, addressId: string): Promise<Customer | null>;
    getCustomerPassword(query: Record<string, any>): Promise<Customer | null>;
}
