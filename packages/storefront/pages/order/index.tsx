import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');
import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import { userAPI } from 'APIs';
import { IOrderResponseData } from 'models';
import DataTable from '@/components/order/dataTable';
import Link from 'next/link';

interface Props {
  orderProducts: IOrderResponseData[];
}

const Order: NextPage<Props> = ({ orderProducts }: Props) => {
  const storedOrderProducts = orderProducts?.data?.orderInfo;

  return (
    <>
      <Breadcrumb
        title="My order"
        pathArray={['Home', 'My order']}
        linkArray={['/', '/']}
      />
      <section className="container mx-auto px-4 ">
        <div className="flex flex-col items-center border-b py-16">
          <div className="mb-2 overflow-x-scroll w-full">
            {storedOrderProducts?.length > 0 ?< DataTable storedOrderProducts={storedOrderProducts}/> : "You have not placed any order yet"}
          </div>
          <div className="mt-1" style={{ textAlign: 'center' }}>
          <button className="rounded-md bg-green-600 py-2 px-6 font-light text-white transition-all duration-200 ease-linear hover:bg-stone-900">
            <Link href="/">Go to home page</Link>
          </button>
        </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let token = cookie?.parse(context.req.headers?.cookie);
  const orderProducts = await userAPI.getOrderProducts(token?.token);

  return {
    props: {
      orderProducts: orderProducts,
    },
  };
};

export default Order;
