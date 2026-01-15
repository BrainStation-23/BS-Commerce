import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createProduct,
  deleteProduct,
  getProductBySku,
  getProductDetails,
  getProductList,
  updateProduct,
} from 'src/query/api/services/products/products';
import { QUERY_KEY } from 'src/query/lib/query-keys';
import {
  CreateProductPayload,
  Product,
  ProductListParams,
  ProductListResponse,
  UpdateProductPayload,
} from 'src/types/products';

/**
 * Hook to fetch product list
 *
 * @param params - The options for fetching products
 * @param enabled - Optional flag to override the default enabled state
 * @returns Query result with product list data
 */
export const useGetProductList = (params?: ProductListParams, enabled?: boolean) => {
  const queryResult = useQuery<ProductListResponse>({
    queryKey: [QUERY_KEY.PRODUCT_LIST, params],
    queryFn: () => getProductList(params),
    ...(enabled !== undefined && { enabled }),
  });

  return queryResult;
};

/**
 * Hook to fetch product by SKU
 *
 * @param sku - The SKU to search for
 * @param enabled - Optional flag to override the default enabled state
 * @returns Query result with product data
 */
export const useGetProductBySku = (sku: string, enabled: boolean = true) => {
  const queryResult = useQuery<Product>({
    queryKey: [QUERY_KEY.PRODUCT_BY_SKU, sku],
    queryFn: () => getProductBySku(sku),
    enabled: !!sku && enabled,
  });

  return queryResult;
};

/**
 * Hook to fetch product details by ID
 *
 * @param productId - The product ID
 * @param enabled - Optional flag to override the default enabled state
 * @returns Query result with product details
 */
export const useGetProductDetails = (productId: string, enabled: boolean = true) => {
  const queryResult = useQuery<Product>({
    queryKey: [QUERY_KEY.PRODUCT_DETAILS, productId],
    queryFn: () => getProductDetails(productId),
    enabled: !!productId && enabled,
  });

  return queryResult;
};

/**
 * Hook to create a new product
 *
 * @returns Mutation result for creating a product
 */
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateProductPayload) => createProduct(data),
    onSuccess: () => {
      // Invalidate product list query to refetch with new data
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT_LIST] });
    },
  });
};

/**
 * Hook to update an existing product
 *
 * @returns Mutation result for updating a product
 */
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateProductPayload }) =>
      updateProduct(id, data),
    onSuccess: (_, variables) => {
      // Invalidate product list query to refetch with updated data
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT_LIST] });
      // Invalidate specific product details if needed
      if (variables.id) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.PRODUCT_DETAILS, variables.id],
        });
      }
    },
  });
};

/**
 * Hook to delete a product
 *
 * @returns Mutation result for deleting a product
 */
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId: string) => deleteProduct(productId),
    onSuccess: () => {
      // Invalidate product list query to refetch with updated data
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT_LIST] });
    },
  });
};
