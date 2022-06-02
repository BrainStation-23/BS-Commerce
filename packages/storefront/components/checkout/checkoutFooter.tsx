import Link from "next/link";

const CheckoutFooter = () => {
  return (
    <>
      <div className="mt-10 flex flex-wrap gap-4">
          <button className="text-xs mt-4">Refund policy</button>
          <button className="text-xs mt-4">Privacy policy</button>
          <button className="text-xs mt-4">Terms of service</button>
      </div>
    </>
  );
};

export default CheckoutFooter;
