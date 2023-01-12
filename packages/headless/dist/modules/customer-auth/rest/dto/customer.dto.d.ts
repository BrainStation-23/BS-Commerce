import { Customer } from '@bs-commerce/models';
export declare class CustomerDto implements Customer {
    id: string;
    name: string;
    phone?: string;
    email?: string;
}
