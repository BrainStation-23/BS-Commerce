import { FC } from 'react';
import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import { IOrderResponseData } from 'models';
import DataTable from '@/components/order/ordersList/dataTable';
import Link from 'next/link';
import withAuth from '@/components/auth/withAuth';
interface Props {
  orderProducts: {
    data: {
      orderInfo: IOrderResponseData[];
    };
  };
}

const OrderMain: FC<Props> = ({ orderProducts }: Props) => {
  const storedOrderProducts = orderProducts?.data?.orderInfo;

  return (
    <>
      <Breadcrumb
        title="My order"
        pathArray={['Home', 'My order']}
        linkArray={['/', '/']}
      />
      <section className="container mx-auto px-4 ">
        <div className="flex flex-col items-center border-b py-6">
          <div
            className={
              storedOrderProducts?.length
                ? 'mb-2 w-full overflow-x-scroll xl:overflow-x-hidden'
                : 'mb-10'
            }
          >
            {storedOrderProducts?.length ? (
              <DataTable storedOrderProducts={storedOrderProducts} />
            ) : (
              'You have not placed any order yet'
            )}
          </div>
          <div className="mt-1" style={{ textAlign: 'center' }}>
            <button className="rounded-md bg-green-600 py-4 px-6 font-light text-white transition-all duration-200 ease-linear hover:bg-stone-900">
              <Link href="/">Go to home page</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(OrderMain);
