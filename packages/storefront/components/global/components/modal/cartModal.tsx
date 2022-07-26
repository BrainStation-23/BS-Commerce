import { Product } from 'models';
import Image from 'next/image';
import Link from 'next/link';
import { XCircleIcon } from '../headerIcons';

interface Props {
  open: boolean;
  onClose: () => void;
  product: Product;
}

const CartModal: React.FC<Props> = ({ open, onClose, product }: Props) => {
  if (!open) return null;
  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
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
            <button className="absolute -right-7 -top-5 z-50" onClick={onClose}>
              <XCircleIcon size={8} />
            </button>
            <Image
              src={product.photos![0].url!}
              alt={product.photos![0].alt || 'product image'}
              width={141}
              height={141}
            />
            <div className="flex w-80 flex-col px-4">
              <span className="mb-4">{product.info.name}</span>
              <div className="mb-8 flex flex-row text-green-600">
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
                    className="rounded-md bg-gray-200/70 py-2 px-4 uppercase transition-all duration-200 ease-linear hover:bg-green-600 hover:text-white"
                    onClick={onClose}
                  >
                    View Cart
                  </button>
                </Link>
                <Link href="/checkout" passHref>
                  <button
                    className="ml-3 rounded-md bg-gray-200/70 py-2 px-4 uppercase transition-all duration-200 ease-linear hover:bg-green-600 hover:text-white"
                    onClick={onClose}
                  >
                    Checkout
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
