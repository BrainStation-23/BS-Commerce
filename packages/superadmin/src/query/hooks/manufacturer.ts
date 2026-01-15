import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createManufacturer,
  getManufacturerDetails,
  getManufacturerList,
  updateManufacturer,
} from 'src/query/api/services/manufacturer';
import { QUERY_KEY } from 'src/query/lib/query-keys';
import {
  CreateManufacturerPayload,
  Manufacturer,
  ManufacturerListParams,
  ManufacturerListResponse,
  UpdateManufacturerPayload,
} from 'src/types/manufacturers';

/**
 * Hook to fetch manufacturer list
 *
 * @param params - The options for fetching manufacturers
 * @param enabled - Optional flag to override the default enabled state
 * @returns Query result with manufacturer list data
 */
export const useGetManufacturerList = (params?: ManufacturerListParams, enabled?: boolean) => {
  const queryResult = useQuery<ManufacturerListResponse>({
    queryKey: [QUERY_KEY.MANUFACTURER_LIST, params],
    queryFn: () => getManufacturerList(params),
    ...(enabled !== undefined && { enabled }),
  });

  return queryResult;
};

/**
 * Hook to fetch manufacturer details by ID
 *
 * @param manufacturerId - The manufacturer ID
 * @param enabled - Optional flag to override the default enabled state
 * @returns Query result with manufacturer details
 */
export const useGetManufacturerDetails = (manufacturerId: string, enabled: boolean = true) => {
  const queryResult = useQuery<Manufacturer>({
    queryKey: [QUERY_KEY.MANUFACTURER_DETAILS, manufacturerId],
    queryFn: () => getManufacturerDetails(manufacturerId),
    enabled: !!manufacturerId && enabled,
  });

  return queryResult;
};

/**
 * Hook to create a new manufacturer
 *
 * @returns Mutation result for creating a manufacturer
 */
export const useCreateManufacturer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateManufacturerPayload) => createManufacturer(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MANUFACTURER_LIST] });
    },
  });
};

/**
 * Hook to update an existing manufacturer
 *
 * @returns Mutation result for updating a manufacturer
 */
export const useUpdateManufacturer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateManufacturerPayload }) =>
      updateManufacturer(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MANUFACTURER_LIST] });
      if (variables.id) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.MANUFACTURER_DETAILS, variables.id],
        });
      }
    },
  });
};
