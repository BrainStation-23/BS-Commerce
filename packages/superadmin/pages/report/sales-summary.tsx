import { NextPage } from 'next';
import SalesSummaryComponent from '../../components/report/sales-summary';

const SalesSummary: NextPage = () => {
  return (
    <>
      <div className="bg-light">
        <main className="px-4">
          <SalesSummaryComponent />
        </main>
      </div>
    </>
  );
};

export default SalesSummary;
