import { SORT_ORDER } from 'src/config-global';

export interface PaginationQueryParams {
  // Pagination
  page: number;
  limit: number;
}

export interface SearchQueryParams extends PaginationQueryParams {
  search?: string;
  sort_by?: string;
  sort_order?: SORT_ORDER;
}

export interface PaginatedResponse<T> {
  total: number;
  page?: number;
  limit?: number;
  data: T[];
}
