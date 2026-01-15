import { Helmet } from 'react-helmet-async';
import OrdersListView from 'src/sections/orders/view/orders-list-view';

// ----------------------------------------------------------------------

export default function OrdersListPage() {
  return (
    <>
      <Helmet>
        <title>Orders: List of orders</title>
      </Helmet>

      <OrdersListView />
    </>
  );
}
