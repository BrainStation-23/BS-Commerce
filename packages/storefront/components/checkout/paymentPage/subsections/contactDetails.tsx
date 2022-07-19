import { useAppSelector } from "customHooks/hooks";

interface Props {
  setModal: Function
}

const ContactDetails: React.FC<Props> = (props) => {
  const shippingInfo = useAppSelector(
    (state) => state.persistedReducer.checkout.shippingInfo
  );

  const { setModal } = props;
  return (
    <>
      <div className="flex flex-wrap flex-col border rounded-lg px-5">
        <div className="flex flex-wrap lg:items-center xl:items-center justify-between my-3 text-sm">
          <div className="flex flex-wrap flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-0 sm:gap-0 md:gap-6 lg:gap-6 xl:gap-6">
            <p className="text-gray-500">Contact</p>
            <p>{shippingInfo?.contact}</p>
          </div>
          <button
              onClick={() => {
                const obj = {
                    info: true,
                    ship: false,
                    pay: false,
                  }
                setModal(obj);
              }}
              className="ml-10 text-sm"
              style={{ border: "none" }}
            >
              Change
            </button>
        </div>
        <hr />
        <div className="flex flex-wrap lg:items-center xl:items-center justify-between my-3 text-sm">
          <div className="flex flex-wrap flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-0 sm:gap-0 md:gap-6 lg:gap-6 xl:gap-6">
            <p className="text-gray-500">Ship to</p>
            <p>{shippingInfo?.address}</p>
          </div>
          <button
              onClick={() => {
                const obj = {
                    info: true,
                    ship: false,
                    pay: false,
                  }
                setModal(obj);
              }}
              className="ml-10 text-sm"
              style={{ border: "none" }}
            >
              Change
            </button>
        </div>
        <hr />
        <div className="my-3 text-sm flex flex-wrap flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-0 sm:gap-0 md:gap-6 lg:gap-6 xl:gap-6">
          <p className="text-gray-500">Method</p>
          <p>Standard . Free</p>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
