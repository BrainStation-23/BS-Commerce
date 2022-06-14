import { NextPage } from "next";
import CustomersByOrderTotalComponent from "../../components/report/customer-report/customers-by-order-total";

const BestCustomerByOrdeRTotal: NextPage = () => {
  return (
    <>
      <div className="bg-light">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <CustomersByOrderTotalComponent />
        </main>
      </div>
    </>
  );
};

export default BestCustomerByOrdeRTotal;
