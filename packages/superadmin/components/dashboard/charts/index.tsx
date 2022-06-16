import type { NextComponentType } from "next";
import LineCharts from "./lineChart/main";
import PieChart from "./pieChart/main";
const StatChart: NextComponentType = () => {
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
