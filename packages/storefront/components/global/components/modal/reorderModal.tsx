import { useAppDispatch } from 'customHooks/hooks';
// import { CustomerProduct, Product, WishlistProduct } from 'models';
import Image from 'next/image';
import Link from 'next/link';
import { setCartModalState } from 'toolkit/modalSlice';
import { XCircleIcon } from '../headerIcons';

interface Props {
  open: boolean;
  onClose: () => void;
  //   product?: Product | CustomerProduct | WishlistProduct;
}

const ReorderModal: React.FC<Props> = ({ open, onClose }: Props) => {
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
            {/* <div className="hidden sm:block">
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
            </div> */}
            <div className="flex w-36 flex-col px-4 sm:w-80">
              <span className="mb-2 text-sm sm:mb-4 sm:text-base">
                {/* {product?.info.name} */}
              </span>
              <div className="mb-3 flex justify-center text-sm text-green-600 sm:mb-6 sm:text-base">
                Are You Sure to Re-Order?
              </div>

              <div className="flex justify-center">
                <Link href="/cart" passHref>
                  <button
                    className="rounded-md bg-gray-200/70 px-2 py-2 text-xs uppercase transition-all duration-200 ease-linear hover:bg-green-600 hover:text-white sm:px-4 sm:text-base"
                    onClick={() => {
                      dispatch(setCartModalState({ showModal: false }));
                      onClose();
                    }}
                  >
                    Yes
                  </button>
                </Link>
                <button
                  className="mt-2	 rounded-md bg-gray-200/70 px-2 py-2 text-xs uppercase transition-all duration-200 ease-linear hover:bg-green-600 hover:text-white sm:mt-0 sm:ml-3 sm:px-4 sm:text-base"
                  onClick={() => {
                    dispatch(setCartModalState({ showModal: false }));
                    onClose();
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReorderModal;
