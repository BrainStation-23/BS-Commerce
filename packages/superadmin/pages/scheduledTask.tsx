import type { NextPage } from "next";

import ScheduledTask from "../components/scheduled-task";

const ScheduledTaskPage: NextPage = () => {
  return (
    <div className="bg-light">
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <ScheduledTask />
      </main>
    </div>
  );
};

export default ScheduledTaskPage;
