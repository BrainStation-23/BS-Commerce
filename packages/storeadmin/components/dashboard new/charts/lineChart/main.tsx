import type { FC } from 'react';
import OrderTypeChart from './orderChart';
import OrderTypeChartNew from './orderChartNew';
import UserTypeChart from './userChart';
import UserTypeChartNew from './userChartNew';
const LineCharts: FC = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 col-md-12 col-lg-6 col-xl-6 ps-0 gx-4">
          <OrderTypeChartNew />
        </div>
        <div className="col-6 col-md-12 col-lg-6 col-xl-6 ps-0 gx-4">
          <UserTypeChartNew />
        </div>
      </div>
    </div>
  );
};

export default LineCharts;
