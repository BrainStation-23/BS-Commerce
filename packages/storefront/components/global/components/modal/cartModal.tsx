import { useAppDispatch } from 'customHooks/hooks';
import { CustomerProduct, Product, WishlistProduct } from '@bs-commerce/models';
import Image from 'next/image';
import Link from 'next/link';
import { setCartModalState } from 'toolkit/modalSlice';
import { XCircleIcon } from '../../layout/headerIcons';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  open: boolean;
  onClose: () => void;
  product?: Product | CustomerProduct | WishlistProduct;
}

const CartModal: React.FC<Props> = ({ open, onClose, product }: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  if (!open) return null;

  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={() => {
        dispatch(setCartModalState({ showModal: false }));
        onClose();
      }}
    >
      <div className="fixed inset-0 bg-neutral-900/40 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
            className="relative flex transform flex-row bg-white p-4 text-left shadow-xl transition-all"
          >
            <button
              className="absolute -right-7 -top-5 z-50"
              onClick={() => {
                dispatch(setCartModalState({ showModal: false }));
                onClose();
              }}
            >
              <XCircleIcon size={10} />
            </button>
            <div className="hidden sm:block">
              <Image
                src={product?.photos![0].url!}
                alt={product?.photos![0].alt || 'product image'}
                width={141}
                height={141}
                layout="fixed"
              />
            </div>
            <div className="block sm:hidden">
              <Image
                src={product?.photos![0].url!}
                alt={product?.photos![0].alt || 'product image'}
                width={80}
                height={80}
                layout="fixed"
              />
            </div>
            <div className="flex w-36 flex-col px-4 sm:w-80">
              <span className="mb-2 text-sm sm:mb-4 sm:text-base">
                {product?.info.name}
              </span>
              <div className="mb-3 flex flex-row text-sm text-primary sm:mb-6 sm:text-base">
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

              <div>
                <Link href="/cart" passHref>
                  <button
                    className="rounded-md bg-gray-200/70 px-2 py-2 text-xs uppercase transition-all duration-200 ease-linear hover:bg-primary hover:text-white dark:hover:bg-dark_primary sm:px-4 sm:text-base"
                    onClick={() => {
                      dispatch(setCartModalState({ showModal: false }));
                      onClose();
                    }}
                  >
                    {t('common:view_cart')}
                  </button>
                </Link>
                <Link href="/checkout" passHref>
                  <button
                    className="mt-2	 rounded-md bg-gray-200/70 px-2 py-2 text-xs uppercase transition-all duration-200 ease-linear hover:bg-primary hover:text-white dark:hover:bg-dark_primary sm:mt-0 sm:ml-3 sm:px-4 sm:text-base"
                    onClick={() => {
                      dispatch(setCartModalState({ showModal: false }));
                      onClose();
                    }}
                  >
                    {t('common:checkout')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
