import type { NextComponentType } from "next";
import { useState } from "react";
import { products } from "../../allData/product-data.json";
import { vendors } from "../../allData/vendor-data.json";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Product } from "models";
interface SingleProduct {
  product: Product;
}

const ProductDescription = ({product}: SingleProduct) => {
	//const product = products.find((product) => product.id === 1);
	const vendor = vendors.find((vendor) => vendor.id === 1);
	const [description, setDescription] = useState("block");
	const [review, setReview] = useState("hidden");
	const [shipping, setShipping] = useState("hidden");
	const [size_chart, setSize_chart] = useState("hidden");

	const handleDescription = () => {
		setDescription("block");
		setReview("hidden");
		setShipping("hidden");
		setSize_chart("hidden");
	};

	const handleReview = () => {
		setDescription("hidden");
		setReview("block");
		setShipping("hidden");
		setSize_chart("hidden");
	};

	const handleShipping = () => {
		setDescription("hidden");
		setReview("hidden");
		setShipping("block");
		setSize_chart("hidden");
	};

	const handleSize = () => {
		setDescription("hidden");
		setReview("hidden");
		setShipping("hidden");
		setSize_chart("block");
	};

	return (
		<>
			<div className="lg:w-4/5 mx-auto flex flex-wrap mt-5 border-2 border-g-300 text-slate-600">
				<div className="lg:w-fit flex flex-wrap border-b-2">
					<ul>
						<button
							onClick={handleDescription}
							className="text-xl font-semibold mx-10 sm:mx-16 md:mx-20"
						>
							Description
						</button>
						<button
							onClick={handleReview}
							className="text-xl font-semibold mx-10 sm:mx-16 md:mx-20"
						>
							Review
						</button>
						<button
							onClick={handleShipping}
							className="text-xl font-semibold mx-10 sm:mx-16 md:mx-20"
						>
							Shipping Policy
						</button>
						<button
							onClick={handleSize}
							className="text-xl font-semibold mx-10 sm:mx-16 md:mx-10"
						>
							Size Chart
						</button>
					</ul>
				</div>
				<div className="mx-5">
					<p className={description}>{product.info.shortDescription}</p>
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
