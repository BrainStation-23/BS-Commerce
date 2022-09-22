import type { FC } from "react";
import LineCharts from "./lineChart/main";
import PieChart from "./pieChart/main";
const StatChart: FC = () => {
  return (
    <>
      <div className="container">
        <LineCharts />
        <br />
        <PieChart />
      </div>
    </>
  );
};

export default StatChart;
