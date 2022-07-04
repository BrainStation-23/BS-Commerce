import { useState, FC } from 'react';
import { vendors } from '../../allData/vendor-data.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Product } from 'models';
interface SingleProduct {
  product: Product;
}

const ProductDescription: FC<SingleProduct> = ({ product }) => {
  const vendor = vendors.find((vendor) => vendor.id === 1);
  const [description, setDescription] = useState('block');
  const [review, setReview] = useState('hidden');
  const [shipping, setShipping] = useState('hidden');
  const [size_chart, setSize_chart] = useState('hidden');

  const handleDescription = () => {
    setDescription('block');
    setReview('hidden');
    setShipping('hidden');
    setSize_chart('hidden');
  };

  const handleReview = () => {
    setDescription('hidden');
    setReview('block');
    setShipping('hidden');
    setSize_chart('hidden');
  };

  const handleShipping = () => {
    setDescription('hidden');
    setReview('hidden');
    setShipping('block');
    setSize_chart('hidden');
  };

  const handleSize = () => {
    setDescription('hidden');
    setReview('hidden');
    setShipping('hidden');
    setSize_chart('block');
  };

  return (
    <>
      <div className="lg:w-full mx-auto mt-16 border-2 border-g-300 text-slate-600">
        <div className="flex flex-wrap block border-b-2">
          <ul className="my-3">
            <button onClick={handleDescription} className="font-semibold mx-5">
              Description
            </button>
            <button onClick={handleReview} className="font-semibold mx-5">
              Review
            </button>
            <button onClick={handleShipping} className="font-semibold mx-5">
              Shipping Policy
            </button>
            <button onClick={handleSize} className="font-semibold mx-5 ">
              Size Chart
            </button>
          </ul>
        </div>

        <div className="m-5 flex ">
          <div className={description}>{product.info.shortDescription}</div>
          <p className={review}>{product.review ? product.review : ''}</p>
          <p className={shipping}>{vendor?.shipping_policy}</p>
          <div className={size_chart}>
            <h4 className="font-semibold">Size Chart</h4>
            <img alt="size" className="" src={vendor.size} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
