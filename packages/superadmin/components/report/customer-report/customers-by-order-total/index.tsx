import CustomerByOrderTotalSearch from "./customer-by-order-total-search";
import CustomerByOrderTotalTable from "./customer-by-order-total-table";

const CustomersByOrderTotalComponent = () => {
  return (
    <>
      <div>
        <h4 className="py-3">Customers by order total</h4>
        <CustomerByOrderTotalSearch />
        <CustomerByOrderTotalTable />
      </div>
    </>
  );
};

export default CustomersByOrderTotalComponent;
