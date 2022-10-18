import Path from '@/modules/global/components/path';
import OrderList from '../orderList';
import InformationForm from './informationForm';
import CheckoutFooter from '../checkoutFooter';

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
          <div className="flex-initial lg:w-3/5 xl:w-3/5">
            <div className="mx-4 mt-5 divide-y-2 sm:mx-4 md:mx-28 lg:mx-28 xl:mx-28">
              <InformationForm setModal={setModal} />
              <br />
              <CheckoutFooter />
            </div>
          </div>
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
