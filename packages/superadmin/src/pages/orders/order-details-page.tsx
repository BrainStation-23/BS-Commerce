import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { LoadingScreen } from 'src/components/loading-screen';
import OrderDetailsView from 'src/sections/orders/view/order-details-view';
import { useGetOrderDetails } from 'src/query/hooks/order';

export default function OrderDetailsPage() {
  const { orderId } = useParams<{ orderId: string }>();

  const {
    data: order,
    isPending,
    error,
  } = useGetOrderDetails(orderId || '', !!orderId);

  if (isPending) {
    return <LoadingScreen />;
  }

  if (error || !order) {
    return (
      <Container maxWidth="xl">
        <div>Error loading order or order not found</div>
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>Order: Details</title>
      </Helmet>

      <Container maxWidth="xl">
        <OrderDetailsView order={order} />
      </Container>
    </>
  );
}
