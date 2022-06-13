import type { NextPage } from "next";
import LogPage from "../../components/system/log";


const Log: NextPage = () => {
  return (
    <div className="bg-light">
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <LogPage />
      </main>
    </div>
  );
};

export default Log;