import type { FC } from 'react';
import SellesPieChart from './salesPie';
import SalesPieNew from './salesPieNew';
import StockPieChart from './stockPie';
import StockPieNew from './stockPieNew';
const PieChart: FC = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-12 col-lg-6 col-xl-6 ps-0 gx-4">
            <SalesPieNew />
          </div>
          <div className="col-6 col-md-12 col-lg-6 col-xl-6 ps-0 gx-4">
            <StockPieNew />
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChart;
