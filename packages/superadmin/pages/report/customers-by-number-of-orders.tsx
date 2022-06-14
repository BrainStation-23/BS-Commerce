import { NextPage } from "next";
import CustomersByNumberOfOrdersComponent from "../../components/report/customer-report/customers-by-number-of-orders";

const CustomerByNumberOfOrders: NextPage = () => {
  return (
    <>
      <div className="bg-light">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <CustomersByNumberOfOrdersComponent />
        </main>
      </div>
    </>
  );
};

export default CustomerByNumberOfOrders;
