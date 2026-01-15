import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createCategory, getCategoryDetails, getCategoryList } from 'src/query/api/services/category';
import { QUERY_KEY } from 'src/query/lib/query-keys';
import { Category, CategoryListResponse, CreateCategoryPayload } from 'src/types/categories';

/**
 * Hook to fetch category list
 *
 * @param enabled - Optional flag to override the default enabled state
 * @returns Query result with category list data
 */
export const useGetCategoryList = (enabled: boolean = true) => {
  const queryResult = useQuery<CategoryListResponse>({
    queryKey: [QUERY_KEY.CATEGORY_LIST],
    queryFn: () => getCategoryList(),
    enabled,
  });

  return queryResult;
};

/**
 * Hook to fetch category details by ID
 *
 * @param categoryId - The category ID
 * @param enabled - Optional flag to override the default enabled state
 * @returns Query result with category details
 */
export const useGetCategoryDetails = (categoryId: string, enabled: boolean = true) => {
  const queryResult = useQuery<Category>({
    queryKey: [QUERY_KEY.CATEGORY_DETAILS, categoryId],
    queryFn: () => getCategoryDetails(categoryId),
    enabled: !!categoryId && enabled,
  });

  return queryResult;
};

/**
 * Hook to create a new category
 *
 * @returns Mutation result for creating a category
 */
export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateCategoryPayload) => createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CATEGORY_LIST] });
    },
  });
};
