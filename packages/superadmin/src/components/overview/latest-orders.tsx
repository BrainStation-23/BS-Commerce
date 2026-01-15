import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'src/routes/hooks';
import Iconify from 'src/components/iconify';

import { useGetOrderList } from 'src/query/hooks/order';
import {
  Order,
  OrderListParams,
} from 'src/types/orders';
import { formatDateForList } from 'src/utils/convert-to-time-zone';
import OrderStatusLabel from 'src/components/order-status-label';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  subheader?: string;
};

const defaultFilters: OrderListParams = {};

export default function LatestOrders({ title = 'Latest Orders', subheader }: Props) {
  const router = useRouter();
  const { data, isFetching, error } = useGetOrderList(defaultFilters, true);

  const orders: Order[] = data?.data?.orders || [];

  const latestOrders = orders.slice(0, 6);

  const handleViewAll = () => {
    router.push(paths.orders.root);
  };

  return (
    <Card>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <Button size="small" onClick={handleViewAll} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
            View
          </Button>
        }
        sx={{
          '& .MuiCardHeader-action': {
            alignSelf: 'center',
          },
        }}
      />

      <CardContent>
        {error && (
          <Typography variant="body2" color="error">
            Failed to load orders
          </Typography>
        )}

        {!isFetching && latestOrders.length === 0 && !error && (
          <Typography variant="body2" color="text.secondary">
            No orders found.
          </Typography>
        )}

        {latestOrders.length > 0 && (
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Customer</TableCell>
                  <TableCell>Order Status</TableCell>
                  <TableCell>Order Date</TableCell>
                  <TableCell align="right">Total Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {latestOrders.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>
                      <Stack spacing={0.5}>
                        <Typography variant="subtitle2">
                          {order.billingAddress.firstName} {order.billingAddress.lastName}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" noWrap>
                          {order.billingAddress.email}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <OrderStatusLabel status={order.orderStatus} />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {formatDateForList(order.orderedDate)}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        ৳{order.totalCost}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </CardContent>
    </Card >
  );
}

