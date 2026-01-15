import type { FC } from "react";
import OrderTypeChart from "./orderChart";
import UserTypeChart from "./userChart";
const LineCharts: FC = () => {
  return (
    <>
      <div
        className="row"
        style={{
          ["marginTop" as any]: "10px",
        }}
      >
        <div
          className="col-6 col-md-12 col-lg-6 col-xl-6"
          style={{ padding: "20px" }}
        >
          <OrderTypeChart />
        </div>
        <div
          className="col-6 col-md-12 col-lg-6 col-xl-6"
          style={{ padding: "20px" }}
        >
          <UserTypeChart />
        </div>
      </div>
    </>
  );
};

export default LineCharts;
