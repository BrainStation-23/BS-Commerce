import type { FC } from "react";
import LineCharts from "./lineChart/main";
import PieChart from "./pieChart/main";
const StatChart: FC = () => {
  return (
    <>
      <div style={{ marginLeft: "10px" }}>
        <LineCharts />
        <PieChart />
      </div>
    </>
  );
};

export default StatChart;
