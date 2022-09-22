import { NextPage } from 'next';
import CustomersByNumberOfOrdersComponent from '../../components/report/customer-report/customers-by-number-of-orders';

const CustomerByNumberOfOrders: NextPage = () => {
  return (
    <>
      <div className="bg-light">
        <main className="px-4">
          <CustomersByNumberOfOrdersComponent />
        </main>
      </div>
    </>
  );
};

export default CustomerByNumberOfOrders;
