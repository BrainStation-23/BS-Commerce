import type { NextPage } from "next";

import ScheduledTask from "../../components/system/scheduled-task";

const ScheduledTaskPage: NextPage = () => {
  return (
    <div className="bg-light">
      <main className=" px-4">
        <ScheduledTask />
      </main>
    </div>
  );
};

export default ScheduledTaskPage;
