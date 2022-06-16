import type { NextComponentType } from "next";
import SellesPieChart from "./salesPie";
import StockPieChart from "./stockPie";
const PieChart: NextComponentType = () => {
  return (
    <>
      <div
        className="row"
        style={{
          ["paddingTop" as any]: "80px",
        }}
      >
        <div className="col-6 col-md-12 col-lg-6 col-xl-6">
          <SellesPieChart />
        </div>
        <div className="col-6 col-md-12 col-lg-6 col-xl-6">
          <StockPieChart />
        </div>
      </div>
    </>
  );
};

export default PieChart;
