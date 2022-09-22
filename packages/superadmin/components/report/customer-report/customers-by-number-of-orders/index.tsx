import CustomerSearch from '../common/customer-search';
import CustomerByNumberOfOrdersTable from './customer-by-number-of-orders-table';

const CustomersByNumberOfOrdersComponent = () => {
  return (
    <>
      <div>
        <h4 className="py-3">Customers by order total</h4>
        {/* <CustomerSearch /> */}
        <CustomerByNumberOfOrdersTable />
      </div>
    </>
  );
};

export default CustomersByNumberOfOrdersComponent;
