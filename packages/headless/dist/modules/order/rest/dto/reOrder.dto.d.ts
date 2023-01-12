import { IReOrderQuery } from '@bs-commerce/models';
export declare class ReOrderDto implements IReOrderQuery {
    orderId: string;
    overWriteCart?: boolean;
    ignoreInvalidItems?: boolean;
}
