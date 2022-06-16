import type { NextComponentType } from "next";
import OrderTypeChart from "./orderChart";
import UserTypeChart from "./userChart";
const LineCharts: NextComponentType = () => {
  return (
    <>
      <div
        className="row"
        style={{
          ["paddingTop" as any]: "80px",
        }}
      >
        <div className="col-6 col-md-12 col-lg-6 col-xl-6">
          <OrderTypeChart />
        </div>
        <div className="col-6 col-md-12 col-lg-6 col-xl-6">
          <UserTypeChart />
        </div>
      </div>
    </>
  );
};

export default LineCharts;
