import { CustomerProduct, Product, WishlistProduct } from '@bs-commerce/models';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import Link from 'next/link';
import ButtonPrimary from '../buttons/buttonPrimary';
import CheckIcon from '../icons/checkIcon';

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
            <CheckIcon />
            {t('common:added_to_cart_successfully')}
          </div>
          <div className="ml-1 grid w-max grid-cols-2 text-xs sm:flex-row sm:text-xs">
            <div className="pb-2 pr-2 sm:pb-0 ">
              <Link href="/cart" passHref>
                <ButtonPrimary
                  className="rounded uppercase"
                  text={t('common:view_cart')}
                />
              </Link>
            </div>
            <div>
              <Link href="/checkout" passHref>
                <ButtonPrimary
                  className="rounded uppercase"
                  text={t('common:checkout')}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartToast;
