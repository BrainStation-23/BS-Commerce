export interface OrderSortingQuery{
    sortField?: SortField;
    sortType?: string;
}

export enum SortField{
    orderedDate = 'orderedDate'
}