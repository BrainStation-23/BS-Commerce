import Link from "next/link";

const CheckoutFooter = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Link href="/" passHref>
          <a className="text-decoration-none text-xs mt-2">Refund policy</a>
        </Link>
        <Link href="/" passHref>
          <a className="text-decoration-none text-xs mt-2">Privacy policy</a>
        </Link>
        <Link href="/" passHref>
          <a className="text-decoration-none text-xs mt-2">Terms of service</a>
        </Link>
      </div>
    </>
  );
};

export default CheckoutFooter;
