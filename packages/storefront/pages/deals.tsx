import type { NextPage } from "next";
import Deals from "../components/deals/index";
const dealsOfTheWeek: NextPage = () => {
  return (
    <>
      <div>
        <Deals />
      </div>
    </>
  );
};

export default dealsOfTheWeek;
