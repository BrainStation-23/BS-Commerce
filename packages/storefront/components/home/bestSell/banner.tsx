import { bannerTitle } from "./models";
import ShopNowIcon from "./shopNow";

const banner : bannerTitle = {
  title : "Natural Food",
}

const Banner = () => {
  return (
    <>
      <div className="m-auto h-96 mb-4 md:mb-0 md:h-full md:m-0 row-span-full flex flex-col-reverse bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner4_grande.jpg?v=1588052424')] bg-cover bg-no-repeat bg-center">
        <div className="ml-5 mb-6 lg:mb-7">
          <p className="text-4xl font-thin mb-2 w-1">
            {banner.title}
          </p>
          <ShopNowIcon />
        </div>
      </div>
    </>
  );
};

export default Banner;
