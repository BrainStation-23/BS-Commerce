import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { useState } from "react";
import { products } from "../../allData/product-data.json";

const ProductImagesSlider = () => {
	const product = products.find((product) => product.id === 1);
	var isAvailable = false;
	if (product.stock > 0) isAvailable = true;
	var productImages = [];
	productImages = product.images;

	const [activeThumb, setActiveThumb] = useState();

	return (
		<>
			<Swiper
				loop={true}
				spaceBetween={10}
				navigation={false}
				modules={[Navigation, Thumbs]}
				grabCursor={true}
				thumbs={{ swiper: activeThumb }}
				className="product-images-slider"
			>
				{productImages.map((item, index) => (
					<SwiperSlide key={index}>
						<div className="mb-5">
							<img
								src={item}
								alt="product images"
								width="600"
								height="600"
							/>
						</div>
						<div className="border text-xs border-[#40a944] rounded-lg bg-[#40a944] absolute top-3 left-3 px-1 py-1 text-white">
							{isAvailable ? "Sale" : "Soldout"}
						</div>
						{product.discountPercentage && isAvailable ? (
							<div className="border border-[#40a944] rounded-lg bg-[#40a944] absolute top-3 right-3 px-1 py-1 text-white text-xs">
								<p>{`-${product.discountPercentage}%`}</p>
							</div>
						) : null}
					</SwiperSlide>
				))}
			</Swiper>

			<div className="ml-8 md:ml-16 w-4/5">
				<Swiper
					onSwiper={setActiveThumb}
					loop={true}
					navigation={true}
					spaceBetween={10}
					slidesPerView={4}
					modules={[Navigation, Thumbs]}
					className="product-images-slider-thumbs"
				>
					{productImages.map((item, index) => (
						<SwiperSlide key={index}>
							<div className="">
								<img
									src={item}
									alt="product images"
									width="600"
									height="600"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

ProductImagesSlider.propTypes = {
	images: PropTypes.array.isRequired,
};

export default ProductImagesSlider;
