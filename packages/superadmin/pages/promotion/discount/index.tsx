import type { NextPage } from 'next';
import DiscountsList from '../../../components/discount/discountList';
import SearchDiscount from '../../../components/discount/searchDiscount';

const Discounts: NextPage = () => {
  return (
    <>
      <main className="px-5">
        <h2>Discounts</h2>

        <div className="mt-2 pt-1">
          {/* <SearchDiscount /> */}
          <DiscountsList />
        </div>
      </main>
    </>
  );
};

export default Discounts;
