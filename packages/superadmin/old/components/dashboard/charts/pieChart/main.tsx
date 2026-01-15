import type { FC } from "react";
import SellesPieChart from "./salesPie";
import StockPieChart from "./stockPie";
const PieChart: FC = () => {
  return (
    <>
      <div
        className="row"
        style={{
          ["paddingTop" as any]: "20px",
        }}
      >
        <div
          className="col-6 col-md-12 col-lg-6 col-xl-6"
          style={{ padding: "20px" }}
        >
          <SellesPieChart />
        </div>
        <div
          className="col-6 col-md-12 col-lg-6 col-xl-6"
          style={{ padding: "20px" }}
        >
          <StockPieChart />
        </div>
      </div>
    </>
  );
};

export default PieChart;
