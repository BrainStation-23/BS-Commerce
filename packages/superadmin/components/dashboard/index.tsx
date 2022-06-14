import type { NextComponentType } from "next";
import DateTimeFilter from "./filter/main";
import StatWidgets from "./widgets/main";
const Dashboard: NextComponentType = () => {
  return (
    <>
      <div className="main-container">
        <DateTimeFilter />
        <StatWidgets />
      </div>
    </>
  );
};

export default Dashboard;
