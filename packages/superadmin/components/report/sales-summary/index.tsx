import SalesSummarySearch from './sales-summary-search';
import SalesTable from './sales-summary-table';

const SalesSummaryComponent = () => {
  return (
    <>
      <div>
        <h4 className="py-3">Sales Summary</h4>
        {/* <SalesSummarySearch /> */}
        <SalesTable />
      </div>
    </>
  );
};

export default SalesSummaryComponent;
