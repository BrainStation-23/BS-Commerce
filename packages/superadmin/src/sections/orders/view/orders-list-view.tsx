import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {
  Card,
  Container,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import AlertMessage from 'src/components/alert-message';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { LoadingScreen } from 'src/components/loading-screen';
import NavigationLink from 'src/components/navigation-link';
import Scrollbar from 'src/components/scrollbar';
import {
  TableHeadCustom,
  TableNoData,
  TablePaginationCustom,
} from 'src/components/table';
import OrderStatusLabel from 'src/components/order-status-label';
import PaymentStatusLabel from 'src/components/payment-status-label';
import ShippingStatusLabel from 'src/components/shipping-status-label';
import { useGetOrderList } from 'src/query/hooks/order';
import { paths } from 'src/routes/paths';
import { Order, OrderListParams, OrderStatus, PaymentStatus, ShippingStatus } from 'src/types/orders';
import { formatErrorMessage } from 'src/utils/format-error-message';
import { formatDateForList } from 'src/utils/convert-to-time-zone';
import OrderTableToolbar from '../components/orders-table-toolbar';

const tableLabels = [
  {
    id: 'orderId',
    label: 'Order ID',
    flex: 1,
    minWidth: 150,
  },
  {
    id: 'customer',
    label: 'Customer',
    flex: 1.2,
    minWidth: 180,
  },
  {
    id: 'orderStatus',
    label: 'Order Status',
    flex: 1,
    minWidth: 120,
  },
  {
    id: 'paymentStatus',
    label: 'Payment Status',
    flex: 1,
    minWidth: 130,
  },
  {
    id: 'shippingStatus',
    label: 'Shipping Status',
    flex: 1,
    minWidth: 140,
  },
  {
    id: 'totalCost',
    label: 'Total Cost',
    flex: 1,
    minWidth: 120,
  },
  {
    id: 'orderedDate',
    label: 'Ordered Date',
    flex: 1,
    minWidth: 150,
  },
  {
    id: 'actions',
    label: 'Action',
    flex: 0.8,
    minWidth: 100,
    align: 'center' as const,
  },
];

export default function OrderListView() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getFilterValue = (key: string) => {
    const value = searchParams.get(key);
    return value && value !== '' ? value : undefined;
  };

  const [filters, setFilters] = useState<OrderListParams>({
    shippingStatus: getFilterValue('shippingStatus') as ShippingStatus | undefined,
    orderStatus: getFilterValue('orderStatus') as OrderStatus | undefined,
    paymentStatus: getFilterValue('paymentStatus') as PaymentStatus | undefined,
    startDate: getFilterValue('startDate'),
    endDate: getFilterValue('endDate'),
  });
  const [initialFilters] = useState<OrderListParams | null>({
    shippingStatus: undefined,
    orderStatus: undefined,
    paymentStatus: undefined,
    startDate: undefined,
    endDate: undefined,
  });

  const {
    error: orderListError,
    isFetching: isFetchingOrderList,
    data: orderListResponse,
  } = useGetOrderList(filters, true);

  const orders: Order[] = orderListResponse?.data?.orders || [];
  const error = orderListError;
  const isFetching = isFetchingOrderList;
  const notFound = !isFetching && orders.length === 0;

  // Handle filter changes
  const handleFilterChange = useCallback((name: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // Update URL params when filters change
  useEffect(() => {
    const params: any = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== '' && value !== null) {
        params[key] = value as string;
      }
    });
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  // Update filters from URL
  useEffect(() => {
    const getValue = (key: string) => {
      const value = searchParams.get(key);
      return value && value !== '' ? value : undefined;
    };

    setFilters({
      shippingStatus: getValue('shippingStatus') as ShippingStatus | undefined,
      orderStatus: getValue('orderStatus') as OrderStatus | undefined,
      paymentStatus: getValue('paymentStatus') as PaymentStatus | undefined,
      startDate: getValue('startDate'),
      endDate: getValue('endDate'),
    });
  }, [searchParams]);

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <CustomBreadcrumbs
        heading="Orders"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Orders', href: paths.orders.root },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
        convertToTitleCase={false}
      />

      {!!error && <AlertMessage severity="error" message={formatErrorMessage(error)} />}

      <OrderTableToolbar
        filters={filters}
        initialFilters={initialFilters}
        onFilters={handleFilterChange}
      />

      {isFetching ? (
        <LoadingScreen />
      ) : (
        <Card>
          <Grid xs={12}>
            <TableContainer sx={{ position: 'relative', overflow: 'unset', alignItems: 'center' }}>
              <Scrollbar>
                <Table sx={{ minWidth: 800 }}>
                  <TableHeadCustom headLabel={tableLabels} />
                  <TableBody>
                    {orders.map((order: Order) => (
                      <TableRow key={order._id}>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {order.orderId}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Stack spacing={0.5}>
                            <Typography variant="body2">
                              {order.billingAddress.firstName} {order.billingAddress.lastName}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              {order.billingAddress.email}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              {order.billingAddress.phoneNumber}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <OrderStatusLabel status={order.orderStatus} />
                        </TableCell>
                        <TableCell>
                          <PaymentStatusLabel status={order.paymentStatus} />
                        </TableCell>
                        <TableCell>
                          <ShippingStatusLabel status={order.shippingStatus} />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            ৳{order.totalCost}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {formatDateForList(order.orderedDate)}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <NavigationLink
                            variant="outlined"
                            endIcon={<ArrowRightAltIcon />}
                            href={paths.orders.orderDetails(order.orderId)}
                          >
                            View
                          </NavigationLink>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableNoData notFound={notFound} />
                  </TableBody>
                </Table>
              </Scrollbar>
            </TableContainer>
            {orderListResponse && (
              <TablePaginationCustom
                count={orders.length}
                page={1}
                rowsPerPage={filters.limit || 10}
                onPageChange={() => { }}
                onRowsPerPageChange={() => { }}
              />
            )}
          </Grid>
        </Card>
      )}
    </Container>
  );
}
