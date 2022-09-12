import { CustomerProduct, Product, WishlistProduct } from '@bs-commerce/models';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  product: Product | CustomerProduct | WishlistProduct;
}

const CartToast: React.FC<Props> = ({ product }: Props) => {
  return (
    <>
      <div className="grid grid-cols-3 w-fit">
        <div className='col-span-1'>
        {product?.photos![0].url ? (
            <Image
              src={product?.photos![0].url!}
              alt={product?.photos![0].alt || 'product image'}
              width={80}
              height={80}
            />
          ) : (
            'Problem Rendering Image'
          )}
        </div>
        <div className="sm:px-4 col-span-2">
          <span className="mb-2">{product?.info.name}</span>
          <div className="mb-3 flex flex-row text-green-600">
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
            </svg>
            Added to cart successfully
          </div>

          <div className="ml-1 grid grid-cols-2 w-max text-xs sm:flex-row sm:text-xs">
            <div className="pb-2 pr-2 sm:pb-0 ">
              <Link href="/cart" passHref>
                <button className="rounded-md w-max bg-gray-200/70 py-1 px-2 uppercase transition-all duration-200 ease-linear hover:bg-green-600 hover:text-white">
                  View Cart
                </button>
              </Link>
            </div>
            <div>
              <Link href="/checkout" passHref>
                <button className="rounded-md bg-gray-200/70 py-1 px-1 uppercase transition-all duration-200 ease-linear hover:bg-green-600 hover:text-white">
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
