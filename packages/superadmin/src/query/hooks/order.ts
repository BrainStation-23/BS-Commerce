import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getOrderList, getOrderDetails, changeOrderStatus } from 'src/query/api/services/order';
import { QUERY_KEY } from 'src/query/lib/query-keys';
import { OrderListParams, OrderListResponse, Order, ChangeOrderStatusPayload } from 'src/types/orders';

/**
 * Hook to fetch order list
 *
 * @param params - The options for fetching orders
 * @param enabled - Optional flag to override the default enabled state
 * @returns Query result with order list data
 */
export const useGetOrderList = (params?: OrderListParams, enabled?: boolean) => {
  const queryResult = useQuery<OrderListResponse>({
    queryKey: [QUERY_KEY.ORDER_LIST, params],
    queryFn: () => getOrderList(params),
    ...(enabled !== undefined && { enabled }),
  });

  return queryResult;
};

export const useGetOrderDetails = (orderId: string, enabled: boolean = true) => {
  const queryResult = useQuery<Order>({
    queryKey: [QUERY_KEY.ORDER_DETAILS, orderId],
    queryFn: () => getOrderDetails(orderId),
    enabled: !!orderId && enabled,
  });
  return queryResult;
};

export const useChangeOrderStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ChangeOrderStatusPayload) => changeOrderStatus(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.ORDER_LIST] });
      if (variables.orderId) {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.ORDER_DETAILS, variables.orderId] });
      }
    },
  });
};
