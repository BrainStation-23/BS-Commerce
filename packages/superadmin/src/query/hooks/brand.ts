import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createBrand, getBrandDetails, getBrandList, updateBrand } from 'src/query/api/services/brand';
import { QUERY_KEY } from 'src/query/lib/query-keys';
import { Brand, BrandListParams, BrandListResponse, CreateBrandPayload, UpdateBrandPayload } from 'src/types/brands';

/**
 * Hook to fetch brand list
 *
 * @param params - The options for fetching brands
 * @param enabled - Optional flag to override the default enabled state
 * @returns Query result with brand list data
 */
export const useGetBrandList = (params?: BrandListParams, enabled?: boolean) => {
  const queryResult = useQuery<BrandListResponse>({
    queryKey: [QUERY_KEY.BRAND_LIST, params],
    queryFn: () => getBrandList(params),
    ...(enabled !== undefined && { enabled }),
  });

  return queryResult;
};

/**
 * Hook to fetch brand details by ID
 *
 * @param brandId - The brand ID
 * @param enabled - Optional flag to override the default enabled state
 * @returns Query result with brand details
 */
export const useGetBrandDetails = (brandId: string, enabled: boolean = true) => {
  const queryResult = useQuery<Brand>({
    queryKey: [QUERY_KEY.BRAND_DETAILS, brandId],
    queryFn: () => getBrandDetails(brandId),
    enabled: !!brandId && enabled,
  });

  return queryResult;
};

/**
 * Hook to create a new brand
 *
 * @returns Mutation result for creating a brand
 */
export const useCreateBrand = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateBrandPayload) => createBrand(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.BRAND_LIST] });
    },
  });
};

/**
 * Hook to update an existing brand
 *
 * @returns Mutation result for updating a brand
 */
export const useUpdateBrand = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateBrandPayload }) => updateBrand(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.BRAND_LIST] });
      if (variables.id) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.BRAND_DETAILS, variables.id],
        });
      }
    },
  });
};
