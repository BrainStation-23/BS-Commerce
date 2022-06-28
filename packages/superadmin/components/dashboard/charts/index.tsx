import type { FC } from "react";
import LineCharts from "./lineChart/main";
import PieChart from "./pieChart/main";
const StatChart: FC = () => {
  return (
    <>
      <LineCharts />
      <div>
        <PieChart />
      </div>
    </>
  );
};

export default StatChart;
