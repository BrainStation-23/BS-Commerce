import { NextPage } from 'next';
import CustomersByOrderTotalComponent from '../../components/report/customer-report/customers-by-order-total';

const BestCustomerByOrdeRTotal: NextPage = () => {
  return (
    <>
      <div className="bg-light">
        <main className="px-4">
          <CustomersByOrderTotalComponent />
        </main>
      </div>
    </>
  );
};

export default BestCustomerByOrdeRTotal;
