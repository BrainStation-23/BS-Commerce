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
  addToWishlist,
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

  const modalStateLogin = useAppSelector(
    (state) => state.persistedReducer.modal.setModalLogin
  );

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
  const [wishlist, setWishlist] = useState([]);
  const [modalCmp, setModalCmp] = useState(false);
  const [showCartModal, setShowCartModal] = useState<boolean>(false);
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
      //dispatch(setLoginModalState(!modalOn));
    }
  };

  const modalState = useAppSelector(
    (state) => state.persistedReducer.modal.setModal
  );

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
      // setShowCartModal(true);
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
        // console.log(newList);
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

  const closeCartModal = () => {
    setShowCartModal(false);
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

      <section className="body-font overflow-hidden bg-white text-gray-700 dark:bg-dark_bg">
        <div className="container mx-auto px-5 pt-24 pb-16">
          <div>
            <div className="mx-auto flex flex-wrap">
              <div className="w-full md:w-1/2">
                <div className="relative inset-0 z-0 bg-cover bg-center">
                  <ProductImagesSlider product={product}></ProductImagesSlider>
                </div>
              </div>
              <div className="mt-10 w-full md:mt-0 md:w-1/2 md:pl-5 ">
                <h2 className="title-font mb-1 text-xl font-normal text-gray-900 dark:text-dark_text">
                  {product.info.name}
                </h2>
                <RatingStars />
                <div className="ml-1 mb-1 mt-2 text-gray-900 dark:text-dark_text">
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
                <div className="flex">
                  <span className="title-font mt-2 mb-2 ml-1 text-2xl font-medium text-primary dark:text-dark_text">
                    {Intl.NumberFormat(
                      `${currency.currencyLanguage}-${currency.currencyStyle}`,
                      {
                        style: 'currency',
                        currency: `${currency.currencyName}`,
                      }
                    ).format(product?.info?.price)}
                  </span>
                </div>
                <div className="flex">
                  <span className="ml-1 mb-1 mt-2 text-sm text-gray-900 dark:text-dark_text">
                    {t('product-details:availability')}:
                  </span>
                  {isAvailable ? (
                    <span className="ml-2 mb-1 mt-2 text-sm text-primary dark:text-dark_primary">
                      Available
                    </span>
                  ) : (
                    <span className="ml-2 mb-1 mt-2 text-sm text-primary">
                      Out of stock
                    </span>
                  )}
                </div>

                <p className="py- ml-1 mb-1 mt-2 text-sm text-gray-900 dark:text-dark_text">
                  {product?.info?.shortDescription}
                </p>
                <div className="flex text-black dark:text-dark_text">
                  <div className="title-text flex items-center lg:mx-2">
                    {t('product-details:quantity')}
                    <div className="m-1 rounded border-2 border-gray-200 md:ml-4">
                      <button
                        onClick={() =>
                          amount > 1 ? setAmount(amount - 1) : ''
                        }
                        // {...(amount <= 1 ? (disableDecrement = true) : null)}
                        disabled={disableDecrement}
                        className="p-2"
                      >
                        -
                      </button>
                      <span className="p-2">{amount}</span>
                      <button
                        onClick={() => setAmount(amount + 1)}
                        disabled={disableIncrement}
                        className="p-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {isAvailable ? (
                    <button
                      onClick={() => {
                        toCart();
                      }}
                      className="my-1 ml-2 rounded bg-primary px-2 text-white hover:bg-gray-600 focus:outline-none dark:bg-dark_primary sm:px-12 lg:px-16"
                      type="button"
                      data-modal-toggle="popup-modal"
                    >
                      {t('product-details:add_to_cart')}
                    </button>
                  ) : (
                    <button
                      disabled={true}
                      className="my-1 ml-2 rounded bg-primary px-2 text-white hover:bg-gray-600 focus:outline-none dark:bg-dark_primary sm:px-12 lg:px-16"
                    >
                      Soldout
                    </button>
                  )}
                </div>
                <div className=" flex flex-wrap">
                  <button
                    disabled={!isAvailable}
                    className="mt-5 ml-1 flex w-full items-center justify-center rounded bg-black py-2 text-white  transition duration-200 ease-out hover:bg-primary hover:ease-in dark:bg-white dark:text-black dark:hover:bg-dark_primary dark:hover:bg-dark_primary dark:hover:text-white md:px-32	"
                    onClick={toCart}
                  >
                    <span className="mx-auto">
                      {t('product-details:buy_now')}
                    </span>
                  </button>
                </div>
                <div className="text-grey-700 ml-1 dark:text-dark_text">
                  <div className="flex flex-row items-start gap-x-2">
                    <button
                      onClick={() =>
                        clicked
                          ? deleteFromWishlist(product?.id!)
                          : toWishlist(product?.id!, 1)
                      }
                      // disabled={clicked ? true : false}
                      className="mt-10 hover:text-primary"
                    >
                      {clicked
                        ? `${t('product-details:remove_from_wishlist')}`
                        : `${t('product-details:add_to_wishlist')}`}
                    </button>
                    <div
                      className="mt-10 underline hover:text-primary dark:hover:text-dark_primary"
                      hidden={!clicked}
                    >
                      <button onClick={handleClickToWishlist}>
                        Go to wishlist
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      className="mt-2 hover:text-primary dark:hover:text-dark_primary"
                      onClick={() => {
                        handleAddToCompare();
                      }}
                    >
                      {inCompareList
                        ? `${t('product-details:show_in_compare')}`
                        : `${t('product-details:compare')}`}
                    </button>
                  </div>
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
