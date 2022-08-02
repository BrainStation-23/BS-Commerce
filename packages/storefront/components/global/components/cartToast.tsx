import { CustomerProduct, Product, WishlistProduct } from 'models';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  product: Product | CustomerProduct | WishlistProduct;
}

const CartToast: React.FC<Props> = ({ product }: Props) => {
  return (
    <>
      <div className="flex flex-row ">
        <div className="col-span-2">
          <Image
            src={product?.photos![0].url!}
            alt={product?.photos![0].alt || 'product image'}
            width={140}
            height={140}
          />
        </div>
        <div className="flex w-80 flex-col px-4">
          <span className="mb-3">{product?.info.name}</span>
          <div className="mb-5 flex flex-row text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>{' '}
            Added to cart successfully
          </div>

          <div className="ml-1">
            <div className="items-canter mx-auto mb-2">
              <Link href="/cart" passHref>
                <button className="rounded-md bg-gray-200/70 py-1 px-2 uppercase transition-all duration-200 ease-linear hover:bg-green-600 hover:text-white">
                  View Cart
                </button>
              </Link>
            </div>
            <div>
              <Link href="/checkout" passHref>
                <button className="rounded-md bg-gray-200/70 py-1 px-2 uppercase transition-all duration-200 ease-linear hover:bg-green-600 hover:text-white">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartToast;
