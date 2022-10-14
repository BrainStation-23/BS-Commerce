import Path from '@/modules/global/components/path';
import InformationPage from './informationPage';
import OrderList from '../orderList';

const path = {
  cart: false,
  info: true,
  shipping: false,
  payment: false,
};
interface Props {
  setModal: Function;
}

const CheckoutInformationComponent: React.FC<Props> = ({ setModal }: Props) => {
  // const {setModal} = props;
  return (
    <>
      <div className="row">
        <div className="hidden lg:mx-28 lg:mt-10 lg:block xl:mx-28 xl:mt-10 xl:block">
          <Path
            cart={path.cart}
            info={path.info}
            shipping={path.shipping}
            payment={path.payment}
            setModal={setModal}
          />
        </div>
        <div className="flex flex-col-reverse flex-wrap justify-between divide-x-0 lg:flex-row lg:divide-x-2">
          <InformationPage setModal={setModal} />
          <div className="mx-5 block md:mx-28 lg:hidden">
            <Path
              cart={path.cart}
              info={path.info}
              shipping={path.shipping}
              payment={path.payment}
              setModal={setModal}
            />
          </div>
          <OrderList />
        </div>
      </div>
    </>
  );
};

export default CheckoutInformationComponent;
