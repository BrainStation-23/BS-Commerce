import Image from "next/image";

import {productInterface} from "@/components/home/imageSlider/models/index";

const SinglSlide = (props: { product: productInterface }) => {
  const { title, description, deatils, image } = props.product;
  return (
    <div className="grid items-center h-72 sm:h-72 md:h-72 lg:h-80 xl:h-96 2xl:h-96 2xl:">
      <div className="absolute inset-0 scale-125 md:inset-0 md:scale-125 lg:scale-100 ">
        <Image src={image} alt="..." layout="fill" />
      </div>
      <div className="container mx-auto font-[sans-serif] text-center md:text-left md:pl-8 xl:pl-4  z-10 lg:pt-4 ">
        <h1 className=" lg:text-left font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          {title}
        </h1>
        <h2 className="font-thin lg:mt-3 text-xl md:text-2xl lg:text-3xl xl:text-4xlh 2xl:text-5xl">
          {description}
        </h2>
        <div className="font-thin mt-1 lg:mt-4 text-sm md:text-base md:w-2/4 lg:w-11/12">
          {deatils}
        </div>
        <div className="mt-3 lg:mt-8">
          <button className="bg-green-600 hover:bg-neutral-700 text-white font-bold uppercase py-2 px-4 rounded-lg left-0 text-xs sm:text-xs md:text-sm xl:text-base">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglSlide;
