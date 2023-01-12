import { OrderSortingQuery } from '@bs-commerce/models';
import { SortField, SortTypesDto } from '../../../../entity/order';
export declare class OrderSortQueryDto implements OrderSortingQuery {
    sortField?: SortField;
    sortType?: SortTypesDto;
}
