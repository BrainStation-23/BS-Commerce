import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import CarouselSlider from "../global/components/CarouselSlider";
import { SwiperSlide } from "swiper/react";
import SinglePic from "./singleSlide.component";

const ImageSlider = () => {
  const slideDetails = [
    {
      id: Math.floor(Math.random() * 10),
      image:
        "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider1.jpg?v=1588047077",
      description: "Fresh Farm Products",
      deatils:
        "10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!",
      title: "Vegetables Big Sale",
    },
    {
      id: Math.floor(Math.random() * 10),
      image:
        "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider2.jpg?v=1588047180",
      title: "Fresh Vegetables",
      description: "Natural Farm Products",
      deatils:
        "Widest range of farm-fresh Vegetables, Fruits & seasonal produce",
    },
    {
      id: Math.floor(Math.random() * 10),
      image:
        "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider3.jpg?v=1588047393",
      title: "Fresh Tomatoes",
      description: "Natural Farm Products",
      deatils:
        "Natural organic tomatoes make your health stronger. Put your information here",
    },
  ];
  const sss = {
    id: Math.floor(Math.random() * 10),
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider3.jpg?v=1588047393",
    title: "Fresh Tomatoes",
    description: "Natural Farm Products",
    deatils:
      "Natural organic tomatoes make your health stronger. Put your information here",
  };
  return (
    <>
      <CarouselSlider>
        {slideDetails?.map((data) => (
          <SwiperSlide key={data?.id}>
            <SinglePic product={data} />
          </SwiperSlide>
        ))}
      </CarouselSlider>
    </>
  );
};

export default ImageSlider;
