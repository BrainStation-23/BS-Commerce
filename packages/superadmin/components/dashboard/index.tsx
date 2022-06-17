import type { NextComponentType } from "next";
import DateTimeFilter from "./filter/main";
import StatWidgets from "./widgets/main";
import StatChart from "./charts/index";
const Dashboard: NextComponentType = () => {
  return (
    <>
      <div className="main-container" style={{ maxWidth: "1480px" }}>
        <DateTimeFilter />
        {/* <StatWidgets /> */}
        {/* <StatChart /> */}
      </div>
    </>
  );
};

export default Dashboard;
