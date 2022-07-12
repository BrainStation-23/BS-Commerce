import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');
import Breadcrumb from '@/components/global/breadcrumbs/breadcrumb';
import { userAPI } from 'APIs';
import { IOrderResponseData } from 'models';
import ShowData from '@/components/order/showData';
import DataTable from '@/components/order/dataTable';

interface Props {
  orderProducts: IOrderResponseData[];
}

const Order: NextPage<Props> = ({ orderProducts }: Props) => {
  const imageDimensions = { width: 1024, height: 456 };
  const storedOrderProducts = orderProducts?.data?.orderInfo;

  return (
    <>
      <Breadcrumb
        title="My order"
        pathArray={['Home', 'My order']}
        linkArray={['/', '/']}
      />
      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center border-b py-16">
          <div className="mb-8">
            <DataTable storedOrderProducts={storedOrderProducts}/>
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
