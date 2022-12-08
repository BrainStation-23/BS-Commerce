import { useAppDispatch } from 'store/hooks/index';
// import { CustomerProduct, Product, WishlistProduct } from 'models';
import Image from 'next/image';

import Link from 'next/link';
import { setCartModalState } from 'store/slices/modalSlice';
import { IOrderProduct } from '@bs-commerce/models';
import XCircleIcon from '@/modules/common/icons/xCircleIcon';
import ElementButton from '@/modules/common/buttons/elementButton';
import ButtonSecondary from '@/modules/common/buttons/buttonSecondary';
import ButtonPrimary from '@/modules/common/buttons/buttonPrimary';
interface Props {
  open: boolean;
  onClose: () => void;
  onReorder: (overWriteCart: boolean, ignoreInvalidItems: boolean) => void;
  message: String;
  unavailableProducts: IOrderProduct[];
}

const ReorderModal: React.FC<Props> = ({
  open,
  onClose,
  message,
  unavailableProducts,
  onReorder,
}: Props) => {
  const dispatch = useAppDispatch();
  if (!open) return null;

  const handleYes = () => {
    if (
      message === 'SOME PRODUCTS ARE NOT AVAILABLE. DO YOU WISH TO CONTINUE?'
    ) {
      onReorder(false, true);
    } else if (
      message ===
      'YOUR ITEMS IN THE CART WILL BE REPLACED. DO YOU WANT TO CONTINUE?'
    ) {
      onReorder(true, true);
    } else if (message === 'THESE ITEMS ARE NOT AVAILABLE RIGHT NOW') {
    }
  };

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
            <ElementButton
              onClickFunction={() => {
                dispatch(setCartModalState({ showModal: false }));
                onClose();
              }}
              className="absolute -right-7 -top-5 z-50"
            >
              <XCircleIcon size={10} />
            </ElementButton>
            <div className="flex w-36 flex-col px-4 sm:w-80">
              <span className="mb-2 text-sm sm:mb-4 sm:text-base"></span>
              <div
                id="reorderModalMessage"
                className="mb-3 flex justify-center text-sm text-primary sm:mb-6 sm:text-base"
              >
                {message}
              </div>
              {unavailableProducts.length > 0 ? (
                <span>
                  {unavailableProducts.map((product) => (
                    <div key={product.productId}>
                      <div className="flex py-2">
                        <Image
                          src={product?.photos![0].url!}
                          alt={product?.photos![0].alt || 'product image'}
                          width={80}
                          height={80}
                          layout="fixed"
                        />
                        <span className="v-screen flex items-center justify-center pl-2">
                          {product.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </span>
              ) : (
                ''
              )}
              <div className="flex justify-center py-4">
                {message === 'THESE ITEMS ARE NOT AVAILABLE RIGHT NOW' ? (
                  <ButtonPrimary
                    onClickFunction={() => {
                      dispatch(setCartModalState({ showModal: false }));
                      onClose();
                    }}
                    text="Okay"
                    className="mx-2 w-fit rounded-md p-2 uppercase transition-all duration-200 ease-linear"
                  />
                ) : (
                  <>
                    <ButtonPrimary
                      onClickFunction={() => {
                        dispatch(setCartModalState({ showModal: false }));
                        onClose();
                      }}
                      text="yes"
                      className="mx-2 w-fit rounded-md p-2 uppercase transition-all duration-200 ease-linear"
                    />
                    <ButtonPrimary
                      onClickFunction={() => {
                        dispatch(setCartModalState({ showModal: false }));
                        onClose();
                      }}
                      text="No"
                      className="mx-2 w-fit rounded-md p-2 uppercase transition-all duration-200 ease-linear"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReorderModal;
