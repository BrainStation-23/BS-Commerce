import React, { useState } from 'react';

import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { userAPI } from 'APIs';
import {
  Product,
  ResponseItem,
  WishlistItem,
  ICompareItems,
  ProductPhoto,
} from '@bs-commerce/models';
import { addToCart, storeAllCartItems } from 'store/slices/cartSlice';
import { setModalState, setLoginModalState } from 'store/slices/modalSlice';
import {
  deleteItemFromWishlist,
  storeWishlist,
} from 'store/slices/productsSlice';
import {
  storeCompare,
  storeProductsToComparePublic,
} from 'store/slices/compareSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks/index';
import useTranslation from 'next-translate/useTranslation';

import Breadcrumb from '@/modules/common/breadcrumbs/breadcrumb';
import ProductImagesSlider from '@/modules/productPage/components/productImageSlider';
import ProductDescription from '@/modules/productPage/components/productDescription';
import SimilarProducts from '@/modules/productPage/components/similarProducts';
import CartToast from '@/modules/common/toast/cartToast';
import RatingStars from '@/modules/productPage/components/ratingStars';
import TextButton from '@/modules/common/buttons/textButton';
import ButtonType1 from '@/modules/common/buttons/buttonType1';
import ButtonType2 from '@/modules/common/buttons/buttonType2';
import BuyProductQuantity from './components/buyProductQuatity';
interface SingleProduct {
  product: Product;
}

const ProductDetailsComponent: React.FC<SingleProduct> = ({
  product,
}: SingleProduct) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { t } = useTranslation();
  const currency = useAppSelector((state) => state.persistedReducer.currency);

  const [modalOn, setModalOn] = useState(false);

  const cartData = useAppSelector(
    (state) => state.persistedReducer.cart.allCartItems
  );

  const wishlistData = useAppSelector(
    (state) => state.persistedReducer.product.wishlist
  );
  const findWishlistProduct = wishlistData?.items?.find(
    (item: WishlistItem) => item.productId === product.id
  );

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  const compareProducts = useAppSelector(
    (state) => state?.persistedReducer?.compare?.compareList?.items
  );

  const inCompareList = compareProducts?.find(
    (compareProduct: ICompareItems) => compareProduct.productId === product.id
  );

  var isAvailable = true;
  var disableDecrement = false;
  var disableIncrement = false;
  let i = 0;
  let clicked = false;
  const [amount, setAmount] = useState(1);
  const [modalCmp, setModalCmp] = useState(false);
  const [alreadyInCart, setAlreadyInCart] = useState<boolean>(false);

  if (findWishlistProduct) {
    clicked = true;
  }

  const handleAddToCompare = async () => {
    if (token) {
      if (inCompareList) {
        dispatch(setModalState(!modalCmp));
      } else {
        try {
          const res = await userAPI.addToCompare(product?.id!);
          if ('data' in res!) {
            dispatch(setModalState(!modalCmp));
            dispatch(storeCompare(res.data));
          }
        } catch (error) {
          toast.error('Error happend.', {
            containerId: 'bottom-right',
          });
        }
      }
    } else {
      const productPhotos = product?.photos!.map(
        (photo: ProductPhoto) => photo?.url!
      );
      const productDetails = {
        info: {
          name: product?.info?.name!,
          price: product?.info?.price!,
          shortDescription: product?.info?.shortDescription!,
          fullDescription: product?.info?.shortDescription!,
          oldPrice: product?.info?.oldPrice!,
        },
        meta: {
          friendlyPageName: product?.meta?.friendlyPageName!,
        },
        photos: productPhotos!,
      };
      dispatch(
        storeProductsToComparePublic({
          productId: product?.id!,
          productDetails: productDetails!,
        })
      );
      dispatch(setModalState(!modalCmp));
    }
  };

  const toCart = async () => {
    if (token) {
      const cartProduct = {
        id: product.id!,
        info: product.info!,
        meta: { friendlyPageName: product.meta?.friendlyPageName! },
        photos: product.photos!,
      };
      const cartItem = {
        product: cartProduct!,
        productId: product.id!,
        quantity: amount,
      };
      // console.log(cartItem);
      setAmount(amount);
      if (alreadyInCart) {
        const cart = await userAPI.updateCartItem({
          productId: cartItem.productId,
          quantity: amount,
        });
        dispatch(storeAllCartItems(cart?.data?.items!));
      } else {
        const cart = await userAPI.addToCart({
          productId: cartItem.productId,
          quantity: amount,
        });
        dispatch(storeAllCartItems(cart?.data?.items!));
      }
      toast(<CartToast product={product} />, {
        containerId: 'bottom-left',
      });
      dispatch(addToCart(cartItem));
    } else {
      dispatch(setLoginModalState(!modalOn));
    }
  };

  const toWishlist = async (id: string, quantity: number) => {
    if (token) {
      const data = {
        productId: id,
        quantity,
      };
      const reduxData = {
        product: {
          id: id,
          info: product.info,
          photos: product.photos,
        },
        productId: id,
        quantity: quantity,
      };
      try {
        await userAPI.addToWishList(data);
        const newList = await userAPI.getCustomerWishlist(token);
        dispatch(storeWishlist(newList!));
        clicked = true;
        toast.success(`${t('common:item_added_to_wishlist')}`, {
          containerId: 'bottom-right',
        });
      } catch (error) {
        // console.log(error);
        toast.error('Failed to add item to wishlist', {
          containerId: 'bottom-right',
        });
      }
    } else {
      // router.push('/account/sign-in');
      dispatch(setLoginModalState(!modalOn));
    }
  };

  const deleteFromWishlist = async (productId: string) => {
    if (token) {
      try {
        await userAPI.deleteWishlistItem(productId);
        toast.error(`${t('common:item_removed_from_wishlist')}`, {
          containerId: 'bottom-right',
        });
        dispatch(deleteItemFromWishlist(productId));
      } catch (error) {
        toast.error('Failed to remove item from wishlist', {
          containerId: 'bottom-right',
        });
      }
    } else {
      dispatch(setLoginModalState(!modalOn));
    }
  };

  const handleClickToWishlist = () => {
    if (token) {
      router.push('/wishlist');
    } else {
      dispatch(setLoginModalState(!modalOn));
    }
  };

  useEffect(() => {
    dispatch(setModalState(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  useEffect(() => {
    let itemAmountInCart: ResponseItem | undefined = cartData?.find(
      (item: ResponseItem) => {
        if (item.productId === product.id) {
          return item;
        }
      }
    );

    if (!itemAmountInCart) {
      const cartProduct = {
        id: product.id!,
        info: product.info!,
        meta: { friendlyPageName: product.meta?.friendlyPageName! },
        photos: product.photos!,
      };
      itemAmountInCart = {
        product: cartProduct!,
        productId: product.id!,
        quantity: 1,
      };
      setAlreadyInCart(false);
    } else {
      setAlreadyInCart(true);
    }
    setAmount(itemAmountInCart?.quantity!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        title={product?.info?.name}
        pathArray={[`${t('common:home')}`, product.info?.name]}
        linkArray={['/', '/product' + product.id]}
      />

      <section className="overflow-hidden bg-white dark:bg-dark_bg">
        <div className="container mx-auto px-5 pt-24 pb-16 text-primary dark:text-dark_text">
          <div>
            <div className="mx-auto flex flex-wrap">
              <div className="w-full md:w-1/2">
                <ProductImagesSlider product={product}></ProductImagesSlider>
              </div>
              <div className="mt-10 w-full md:mt-0 md:w-1/2 md:pl-5 ">
                <h2 className="mb-1 text-xl font-normal text-gray-900 dark:text-dark_text">
                  {product.info.name}
                </h2>
                <RatingStars />
                <div className="my-2 ml-1 text-gray-900 dark:text-dark_text">
                  <span className="text-sm">
                    {t('product-details:manufacturer')}:{' '}
                    {product?.manufacturer?.name
                      ? product?.manufacturer?.name
                      : '---'}
                  </span>
                  <span className="ml-2 mr-2 text-sm">|</span>
                  <span className="text-sm dark:text-dark_text">
                    {t('product-details:sku')}: {product?.info?.sku}
                  </span>
                </div>
                <div className="m-2 ml-1 text-2xl font-medium ">
                  {Intl.NumberFormat(
                    `${currency.currencyLanguage}-${currency.currencyStyle}`,
                    {
                      style: 'currency',
                      currency: `${currency.currencyName}`,
                    }
                  ).format(product?.info?.price)}
                </div>
                <div className="flex text-sm">
                  <span className="my-2 ml-1 text-gray-900 dark:text-dark_text">
                    {t('product-details:availability')}:
                  </span>
                  <span className="my-2 ml-2 text-primary dark:text-dark_primary">
                    {isAvailable ? 'Available' : 'Out of stock'}
                  </span>
                </div>
                <p className="m-2 ml-1 text-sm text-gray-900 dark:text-dark_text">
                  {product?.info?.shortDescription}
                </p>
                <BuyProductQuantity
                  amount={amount}
                  disableDecrement={disableDecrement}
                  setAmount={setAmount}
                  disableIncrement={disableIncrement}
                  isAvailable={isAvailable}
                  toCart={toCart}
                />
                <ButtonType1
                  className="mt-2"
                  disabled={!isAvailable}
                  onClickFunction={toCart}
                  text={t('product-details:buy_now')}
                />
                <div className="text-grey-700 ml-1 dark:text-dark_text">
                  <div className="flex gap-x-4">
                    <TextButton
                      onClickFunction={() =>
                        clicked
                          ? deleteFromWishlist(product?.id!)
                          : toWishlist(product?.id!, 1)
                      }
                      text={
                        clicked
                          ? `${t('product-details:remove_from_wishlist')}`
                          : `${t('product-details:add_to_wishlist')}`
                      }
                    />
                    <div hidden={!clicked}>
                      <TextButton
                        onClickFunction={handleClickToWishlist}
                        text={`Go to wishlist`}
                      />
                    </div>
                  </div>
                  <TextButton
                    onClickFunction={handleAddToCompare}
                    text={
                      inCompareList
                        ? `${t('product-details:show_in_compare')}`
                        : `${t('product-details:compare')}`
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <ProductDescription product={product} />
        </div>
        <div>
          <SimilarProducts />
        </div>
      </section>
    </>
  );
};

export default ProductDetailsComponent;
