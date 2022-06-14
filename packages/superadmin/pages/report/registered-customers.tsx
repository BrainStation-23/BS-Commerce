import { NextPage } from "next";
import RegisteredCustomersReportComponent from "../../components/report/customer-report/registered-customer-report";

const RegisteredCustomersReport: NextPage = () => {
  return (
    <>
      <div className="bg-light">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <RegisteredCustomersReportComponent />
        </main>
      </div>
    </>
  );
};

export default RegisteredCustomersReport;
