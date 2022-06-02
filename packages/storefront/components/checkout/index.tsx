import InformationPage from "./informationPage";
import OrderList from "./orderList";

const CheckoutComponent = (props: any) => {
  return (
    <>
      <div className="row">
        <div className="flex flex-wrap sm:flex-col-reverse md:flex-col-reverse lg:flex-row justify-between">
          <InformationPage/>
          <OrderList />
        </div>
      </div>
    </>
  );
};

export default CheckoutComponent;
