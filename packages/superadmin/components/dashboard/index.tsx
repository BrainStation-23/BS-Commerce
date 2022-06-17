import { FC } from "react";
import DateTimeFilter from "./filter/main";
import StatWidgets from "./widgets/main";
import StatChart from "./charts/index";
const Dashboard: FC = () => {
  return (
    <>
      <div className="main-container">
        <DateTimeFilter />
        <StatWidgets />
        <StatChart />
      </div>
    </>
  );
};

export default Dashboard;
