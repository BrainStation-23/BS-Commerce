import { NextPage } from "next";
import RegisteredCustomersReportComponent from "../../components/report/customer-report/registered-customer-report";

const RegisteredCustomersReport: NextPage = () => {
  return (
    <>
      <div className="bg-light">
        <main className="px-4">
          <RegisteredCustomersReportComponent />
        </main>
      </div>
    </>
  );
};

export default RegisteredCustomersReport;
