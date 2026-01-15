import {
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import { ClearButton } from 'src/components/clear-button';
import {
  OrderListParams,
  OrderStatus,
  PaymentStatus,
  ShippingStatus,
} from 'src/types/orders';

// ----------------------------------------------------------------------

type Props = {
  filters: OrderListParams;
  initialFilters: OrderListParams | null;
  onFilters: (name: string, value: any) => void;
};

export default function OrderTableToolbar({
  filters,
  initialFilters,
  onFilters,
}: Props) {
  const handleOrderStatusChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedStatus = event.target.value as OrderStatus | '';
      onFilters('orderStatus', selectedStatus || undefined);
    },
    [onFilters]
  );

  const handlePaymentStatusChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedStatus = event.target.value as PaymentStatus | '';
      onFilters('paymentStatus', selectedStatus || undefined);
    },
    [onFilters]
  );

  const handleShippingStatusChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedStatus = event.target.value as ShippingStatus | '';
      onFilters('shippingStatus', selectedStatus || undefined);
    },
    [onFilters]
  );

  const handleResetFilters = useCallback(() => {
    if (initialFilters) {
      onFilters('startDate', initialFilters.startDate || undefined);
      onFilters('endDate', initialFilters.endDate || undefined);
      onFilters('orderStatus', initialFilters.orderStatus || undefined);
      onFilters('paymentStatus', initialFilters.paymentStatus || undefined);
      onFilters('shippingStatus', initialFilters.shippingStatus || undefined);
    }
  }, [onFilters, initialFilters]);

  const hasFilterChanges = useCallback(() => {
    if (!initialFilters) return false;

    return (
      filters.startDate !== initialFilters.startDate ||
      filters.endDate !== initialFilters.endDate ||
      filters.orderStatus !== initialFilters.orderStatus ||
      filters.paymentStatus !== initialFilters.paymentStatus ||
      filters.shippingStatus !== initialFilters.shippingStatus
    );
  }, [filters, initialFilters]);

  return (
    <Stack spacing={2} sx={{ py: 2.5 }}>
      <Stack
        spacing={2}
        alignItems={{ md: 'center' }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        {/* <Stack sx={{ width: 1, display: { xs: 'none', md: 'flex' } }}>{filtersContent}</Stack> */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={2}
          flex={1}
          sx={{ width: 1 }}
        >
          <TextField
            select
            size="medium"
            label="Order Status"
            value={filters.orderStatus || ''}
            onChange={handleOrderStatusChange}
            sx={{
              minWidth: { xs: '100%', md: 160 },
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={OrderStatus.PENDING}>{OrderStatus.PENDING}</MenuItem>
            <MenuItem value={OrderStatus.PROCESSING}>{OrderStatus.PROCESSING}</MenuItem>
            <MenuItem value={OrderStatus.CANCELLED}>{OrderStatus.CANCELLED}</MenuItem>
            <MenuItem value={OrderStatus.COMPLETED}>{OrderStatus.COMPLETED}</MenuItem>
          </TextField>

          <TextField
            select
            size="medium"
            label="Payment Status"
            value={filters.paymentStatus || ''}
            onChange={handlePaymentStatusChange}
            sx={{
              minWidth: { xs: '100%', md: 160 },
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={PaymentStatus.PENDING}>{PaymentStatus.PENDING}</MenuItem>
            <MenuItem value={PaymentStatus.PAID}>{PaymentStatus.PAID}</MenuItem>
            <MenuItem value={PaymentStatus.CANCELLED}>{PaymentStatus.CANCELLED}</MenuItem>
          </TextField>

          <TextField
            select
            size="medium"
            label="Shipping Status"
            value={filters.shippingStatus || ''}
            onChange={handleShippingStatusChange}
            sx={{
              minWidth: { xs: '100%', md: 180 },
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={ShippingStatus.NOT_YET_SHIPPED}>Not Yet Shipped</MenuItem>
            <MenuItem value={ShippingStatus.PARTIALLY_SHIPPER}>{ShippingStatus.PARTIALLY_SHIPPER}</MenuItem>
            <MenuItem value={ShippingStatus.SHIPPED}>Shipped</MenuItem>
            <MenuItem value={ShippingStatus.DELIVERED}>Delivered</MenuItem>
          </TextField>

          <DatePicker
            label="Start Date"
            value={filters.startDate ? dayjs(filters.startDate) : null}
            onChange={(date) => {
              let dayjsDate: dayjs.Dayjs | null = null;
              if (date) {
                dayjsDate = dayjs.isDayjs(date) ? date : dayjs(date);
              }
              onFilters('startDate', dayjsDate ? dayjsDate.format('YYYY-MM-DD') : undefined);
            }}
            maxDate={filters.endDate ? dayjs(filters.endDate) : dayjs()}
            slotProps={{ textField: { fullWidth: true, } }}
            sx={{
              width: { xs: '100%', md: 'auto' },
              maxWidth: { md: 200 },
            }}
          />

          <DatePicker
            label="End Date"
            value={filters.endDate ? dayjs(filters.endDate) : null}
            onChange={(date) => {
              let dayjsDate: dayjs.Dayjs | null = null;
              if (date) {
                dayjsDate = dayjs.isDayjs(date) ? date : dayjs(date);
              }
              onFilters('endDate', dayjsDate ? dayjsDate.format('YYYY-MM-DD') : undefined);
            }}
            minDate={filters.startDate ? dayjs(filters.startDate) : undefined}
            maxDate={dayjs()}
            slotProps={{ textField: { fullWidth: true, } }}
            sx={{
              width: { xs: '100%', md: 'auto' },
              maxWidth: { md: 200 },
            }}
          />

          {hasFilterChanges() && (
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                width: { xs: '100%', md: 'auto' },
                justifyContent: { xs: 'flex-start', md: 'flex-end' },
              }}
            >
              <ClearButton onClick={handleResetFilters} />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack >
  );
}
