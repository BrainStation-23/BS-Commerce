import { CustomerProduct, Product, WishlistProduct } from '@bs-commerce/models';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  product: Product | CustomerProduct | WishlistProduct;
}

const CartToast: React.FC<Props> = ({ product }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid w-fit grid-cols-3">
        <div className="col-span-1">
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
        <div className="col-span-2 sm:px-4">
          <span className="mb-2">{product?.info.name}</span>
          <div className="mb-3 flex flex-row text-primary">
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
            {t('common:added_to_cart_successfully')}
          </div>

          <div className="ml-1 grid w-max grid-cols-2 text-xs sm:flex-row sm:text-xs">
            <div className="pb-2 pr-2 sm:pb-0 ">
              <Link href="/cart" passHref>
                <button className="w-max rounded-md bg-gray-200/70 py-1 px-2 uppercase transition-all duration-200 ease-linear hover:bg-primary hover:text-white">
                  {t('common:view_cart')}
                </button>
              </Link>
            </div>
            <div>
              <Link href="/checkout" passHref>
                <button className="rounded-md bg-gray-200/70 py-1 px-1 uppercase transition-all duration-200 ease-linear hover:bg-primary hover:text-white">
                  {t('common:checkout')}
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
