import { IOrderResponseData } from 'models';
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'customHooks/hooks';
import ReorderModal from '@/components/global/components/modal/reorderModal';
import { productsState } from 'toolkit/productsSlice';
import { addToCart } from 'toolkit/cartSlice';
import { IProductOrderData } from 'models';
interface Props {
  singleOrder: IOrderResponseData;
}
const ReOrder: React.FC<Props> = ({ singleOrder }: Props) => {
  const dispatch = useAppDispatch();
  const [showCartModal, setShowCartModal] = useState<boolean>(false);
  const [unavailableProd, setUnavailableProd] = useState<IProductOrderData[]>(
    []
  );
  const [newProduct, setNewProduct] = useState<IProductOrderData[]>([]);
  const [message, setMessage] = useState('');
  const [cartToken, setCartToken] = useState(false);
  let { products } = singleOrder;
  const allProducts = useAppSelector(
    (state) => state.persistedReducer.product.featuredProducts
  );
  const orderedProductId = products.map((prod) => {
    return prod.productId;
  });
  const allProductsId = allProducts.map((prod) => {
    return prod.id;
  });

  const closeCartModal = () => {
    setShowCartModal(false);
    setUnavailableProd([]);
  };
  const handleReorder = () => {
    let matched = orderedProductId.filter((id) => allProductsId.includes(id));
    let unmatched = orderedProductId.filter(
      (id) => !allProductsId.includes(id)
    );

    if (unmatched.length > 0) {
      products.forEach((product: IProductOrderData) => {
        unmatched.forEach((id) => {
          if (product.productId == id) {
            unavailableProd.push(product);
          }
        });
      });
      let newProdData: IProductOrderData[] = [];

      matched.forEach((id) => {
        const np = products.find(
          (product: IProductOrderData) => product.productId === id
        );
        newProdData.push(np!);
      });
      setNewProduct(newProdData);

      setMessage(
        'Some of the Products are Not Available Now, Do You Still Want to Proceed?'
      );
      setShowCartModal(true);
    } else {
      setCartToken(true);
      //products should be added directly to the cart
      setMessage('Do You Want all of the Products to Re-Order?');
      setShowCartModal(true);
    }
  };
  const toCart = async () => {
    if (newProduct.length > 0) {
      newProduct.forEach((product: any) => {
        const cartProductInfo = {
          name: product.name,
          shortDescription: 'short des',
          fullDescription: 'full des',
          sku: 'sku',
          price: product.totalPrice,
          oldPrice: 40,
          cost: 10,
          showOnHomePage: true,
          includeInTopMenu: true,
          allowToSelectPageSize: true,
          published: true,
          displayOrder: 5,
          isFeatured: true,
          publishDat: '2020-07-10 15:00:00.000',
        };
        const cartProduct = {
          id: product.productId!,
          info: cartProductInfo!,
          photos: product.photos!,
        };
        const cartItem = {
          product: cartProduct!,
          productId: product.productId!,
          quantity: product.quantity,
        };
        dispatch(addToCart(cartItem));
      });
    }
    if (cartToken) {
      products.forEach((product: any) => {
        const cartProductInfo = {
          name: product.name,
          shortDescription: 'short des',
          fullDescription: 'full des',
          sku: 'sku',
          price: product.totalPrice,
          oldPrice: 40,
          cost: product.totalPrice,
          showOnHomePage: true,
          includeInTopMenu: true,
          allowToSelectPageSize: true,
          published: true,
          displayOrder: 5,
          isFeatured: true,
          publishDat: '2020-07-10 15:00:00.000',
        };
        const cartProduct = {
          id: product.productId!,
          info: cartProductInfo!,
          photos: product.photos!,
        };
        const cartItem = {
          product: cartProduct!,
          productId: product.productId!,
          quantity: product.quantity,
        };
        dispatch(addToCart(cartItem));
      });
    }
  };
  const handleReorderCheckout = () => {
    toCart();
  };
  return (
    <>
      <div className="flex justify-center pt-6">
        <button
          onClick={handleReorder}
          className="rounded bg-green-700 py-2 px-8 font-bold text-white hover:bg-black"
          id="re-order"
        >
          Reorder
        </button>
      </div>
      <ReorderModal
        open={showCartModal}
        onClose={closeCartModal}
        message={message}
        onCheckOutReorder={handleReorderCheckout}
        unavailableProd={unavailableProd}
      />
    </>
  );
};

export default ReOrder;