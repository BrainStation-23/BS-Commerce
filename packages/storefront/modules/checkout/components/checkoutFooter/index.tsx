import Link from "next/link";
import { NextComponentType } from "next";

const CheckoutFooter: NextComponentType = () => {
  return <>
    <div className="flex flex-wrap gap-4">
      <Link href="/" passHref className="text-decoration-none text-xs mt-2">
        Refund policy
      </Link>
      <Link href="/" passHref className="text-decoration-none text-xs mt-2">
        Privacy policy
      </Link>
      <Link href="/" passHref className="text-decoration-none text-xs mt-2">
        Terms of service
      </Link>
    </div>
  </>;
};

export default CheckoutFooter;
