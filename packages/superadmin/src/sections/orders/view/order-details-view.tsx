import { useState } from 'react';
import {
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import BackButton from 'src/components/back-button';
import AlertMessage from 'src/components/alert-message';
import ErrorAlertList from 'src/components/alert-message/error-alert-list';
import OrderStatusLabel from 'src/components/order-status-label';
import PaymentStatusLabel from 'src/components/payment-status-label';
import ShippingStatusLabel from 'src/components/shipping-status-label';
import { useSnackbar } from 'src/components/snackbar';
import { useRouter } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';
import { Order, OrderStatus, PaymentStatus, ShippingStatus, StatusType, ChangeOrderStatusPayload } from 'src/types/orders';
import { useChangeOrderStatus } from 'src/query/hooks/order';
import { formatErrorMessage } from 'src/utils/format-error-message';
import { formatDateForList } from 'src/utils/convert-to-time-zone';
import ConfirmDialog from 'src/components/dialogs/confirmation-dialog';

type Props = {
  order: Order;
};

export default function OrderDetailsView({ order }: Props) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [errorMsg, setErrorMsg] = useState<string | string[] | null>(null);
  const [orderStatus, setOrderStatus] = useState<OrderStatus>(order.orderStatus);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>(order.paymentStatus);
  const [shippingStatus, setShippingStatus] = useState<ShippingStatus>(order.shippingStatus);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingStatusType, setPendingStatusType] = useState<StatusType | null>(null);
  const [pendingStatusValue, setPendingStatusValue] = useState<
    OrderStatus | PaymentStatus | ShippingStatus | null
  >(null);

  const changeStatusMutation = useChangeOrderStatus();

  const handleStatusChange = async (statusType: StatusType, statusValue: OrderStatus | PaymentStatus | ShippingStatus) => {
    try {
      setErrorMsg(null);
      const payload: ChangeOrderStatusPayload = {
        orderId: order.orderId,
        statusType,
        statusValue,
      };
      await changeStatusMutation.mutateAsync(payload);
      enqueueSnackbar('Status updated successfully');

      // Update local state
      if (statusType === 'orderStatus') {
        setOrderStatus(statusValue as OrderStatus);
      } else if (statusType === 'paymentStatus') {
        setPaymentStatus(statusValue as PaymentStatus);
      } else if (statusType === 'shippingStatus') {
        setShippingStatus(statusValue as ShippingStatus);
      }
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error?.message);
      setErrorMsg(errorMessage);
      console.error('Error updating status:', error);
    }
  };

  const handleOpenConfirm = (statusType: StatusType, statusValue: OrderStatus | PaymentStatus | ShippingStatus) => {
    setPendingStatusType(statusType);
    setPendingStatusValue(statusValue);
    setConfirmOpen(true);
  };

  const handleCloseConfirm = () => {
    if (!changeStatusMutation.isPending) {
      setConfirmOpen(false);
    }
  };

  const handleConfirmChange = async () => {
    if (!pendingStatusType || !pendingStatusValue) return;
    await handleStatusChange(pendingStatusType, pendingStatusValue);
    setConfirmOpen(false);
  };

  return (
    <Grid container spacing={3}>
      <Grid xs={12} sx={{ p: 3 }}>
        <CustomBreadcrumbs
          heading="Order Details"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'Orders', href: paths.orders.root },
            { name: 'Order Details', href: '#' },
          ]}
          sx={{ mb: { xs: 3, md: 5 } }}
          convertToTitleCase={false}
        />

        <Card sx={{ p: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <BackButton />
            <Stack direction="row" spacing={2}>
              <OrderStatusLabel status={orderStatus} />
              <PaymentStatusLabel status={paymentStatus} />
              <ShippingStatusLabel status={shippingStatus} />
            </Stack>
          </Box>

          {!!errorMsg && (
            <Box sx={{ mb: 3 }}>
              {Array.isArray(errorMsg) ? (
                <ErrorAlertList errors={errorMsg} />
              ) : (
                <AlertMessage severity="error" message={errorMsg} />
              )}
            </Box>
          )}

          <Grid container spacing={3} sx={{ p: 4 }}>
            {/* Order Information */}
            <Grid xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Order Information
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Order ID
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {order.orderId}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Ordered Date
                    </Typography>
                    <Typography variant="body1">
                      {formatDateForList(order.orderedDate)}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Payment Method
                    </Typography>
                    <Typography variant="body1">
                      {order.paymentMethod}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Shipping Method
                    </Typography>
                    <Typography variant="body1">
                      {order.shippingMethod}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            {/* Status Updates */}
            <Grid xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Update Status
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Order Status</InputLabel>
                      <Select
                        value={orderStatus}
                        label="Order Status"
                        onChange={(e) => setOrderStatus(e.target.value as OrderStatus)}
                      >
                        {Object.values(OrderStatus).map((status) => (
                          <MenuItem key={status} value={status}>
                            {status}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <LoadingButton
                      variant="outlined"
                      onClick={() => handleOpenConfirm('orderStatus', orderStatus)}
                      loading={changeStatusMutation.isPending}
                      disabled={orderStatus === order.orderStatus}
                    >
                      Update
                    </LoadingButton>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Payment Status</InputLabel>
                      <Select
                        value={paymentStatus}
                        label="Payment Status"
                        onChange={(e) => setPaymentStatus(e.target.value as PaymentStatus)}
                      >
                        {Object.values(PaymentStatus).map((status) => (
                          <MenuItem key={status} value={status}>
                            {status}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <LoadingButton
                      variant="outlined"
                      onClick={() => handleOpenConfirm('paymentStatus', paymentStatus)}
                      loading={changeStatusMutation.isPending}
                      disabled={paymentStatus === order.paymentStatus}
                    >
                      Update
                    </LoadingButton>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Shipping Status</InputLabel>
                      <Select
                        value={shippingStatus}
                        label="Shipping Status"
                        onChange={(e) => setShippingStatus(e.target.value as ShippingStatus)}
                      >
                        {Object.values(ShippingStatus).map((status) => (
                          <MenuItem key={status} value={status}>
                            {status.replace(/([A-Z])/g, ' $1').trim()}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <LoadingButton
                      variant="outlined"
                      onClick={() => handleOpenConfirm('shippingStatus', shippingStatus)}
                      loading={changeStatusMutation.isPending}
                      disabled={shippingStatus === order.shippingStatus}
                    >
                      Update
                    </LoadingButton>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            {/* Billing Address */}
            <Grid xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Billing Address
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    {order.billingAddress.firstName} {order.billingAddress.lastName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {order.billingAddress.email}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {order.billingAddress.phoneNumber}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {order.billingAddress.addressLine1}
                  </Typography>
                  {order.billingAddress.addressLine2 && (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {order.billingAddress.addressLine2}
                    </Typography>
                  )}
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {order.billingAddress.city}, {order.billingAddress.postCode}
                  </Typography>
                </Stack>
              </Box>
            </Grid>

            {/* Shipping Address */}
            <Grid xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Shipping Address
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    {order.shippingAddress.firstName} {order.shippingAddress.lastName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {order.shippingAddress.email}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {order.shippingAddress.phoneNumber}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {order.shippingAddress.addressLine1}
                  </Typography>
                  {order.shippingAddress.addressLine2 && (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {order.shippingAddress.addressLine2}
                    </Typography>
                  )}
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {order.shippingAddress.city}, {order.shippingAddress.postCode}
                  </Typography>
                </Stack>
              </Box>
            </Grid>

            {/* Products */}
            <Grid xs={12}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Products
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell>SKU</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {order.products.map((product) => (
                        <TableRow key={product.productId}>
                          <TableCell>
                            <Stack direction="row" spacing={2} alignItems="center">
                              <Avatar
                                src={product.photos?.[0]?.url || ''}
                                alt={product.name}
                                variant="rounded"
                                sx={{ width: 56, height: 56 }}
                              />
                              <Typography variant="body2">{product.name}</Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2">{product.sku}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="body2">৳{product.price}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="body2">{product.quantity}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              ৳{product.totalPrice}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>

            {/* Order Summary */}
            <Grid xs={12}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Order Summary
                </Typography>
                <Stack spacing={2} sx={{ maxWidth: 400, ml: 'auto' }}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2">Product Cost:</Typography>
                    <Typography variant="body2">৳{order.productCost}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2">Shipping Cost:</Typography>
                    <Typography variant="body2">৳{order.shippingCost}</Typography>
                  </Box>
                  <Divider />
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6">Total Cost:</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      ৳{order.totalCost}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Card>

        <ConfirmDialog
          open={confirmOpen}
          onCancel={handleCloseConfirm}
          onConfirm={handleConfirmChange}
          header="Update Status"
          contentText={
            pendingStatusType && pendingStatusValue
              ? `Are you sure you want to update ${pendingStatusType} to "${String(
                  pendingStatusValue
                )}"?`
              : undefined
          }
          dialogType="edit"
          isLoading={changeStatusMutation.isPending}
        />
      </Grid >
    </Grid >
  );
}
