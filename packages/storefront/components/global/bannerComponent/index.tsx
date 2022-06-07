import Banner from "./banner";
import BannerBodyText from "./bannerBodyText";
import BannerHeading from "./bannerHeading";

const BannerPage = () => {
  return (
    <>
      <div className="row">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 m-3 sm:m-3 md:m-3 lg:m-16 xl:m-16 gap-5 sm:gap-5 md:gap-7 lg:gap-12 xl:gap-12">
          <Banner
            position="relative"
            width="w-full"
            height="h-48 sm:h-48 md:h-48 lg:h-56 xl:h-56"
            buttonText="Shop Now"
            linkhref="/home" //need to modify href later
            bg="bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner3.jpg?v=1588050023')] bg-cover bg-no-repeat bg-center"
            buttonPosition="absolute bottom-4 sm:bottom-4 md:bottom-7 lg:bottom-16 xl:bottom-16 left-0 sm:left-0 lg:left-10 xl:left-10"
            buttonEdge="rounded-lg"
            hasButton={true}
            buttonPadding="px-3 sm:px-3 md:px-3 lg:px-5 xl:px-5 py-2"
            buttonMargin="m-5"
            buttonBg="bg-green-600/100"
            onHover="bg-black"
            buttonTextColor="text-white"
            hasBodyText={true}
            bodyText={
              <BannerBodyText
                text="Fresh Vegetables"
                textColor="text-gray-500"
                textSize="text-2xl"
                fontWeight="font-normal"
                margin="mx-5 sm:mx-5 md:mx-5 lg:mx-14 xl:mx-14 m-14 sm:my-14 md:my-12 lg:my-14 xl:my-14"
              />
            }
          />
          <Banner
            position="relative"
            width="w-full"
            height="h-48 sm:h-48 md:h-48 lg:h-56 xl:h-56"
            buttonText="Shop Now"
            linkhref="/home" //need to modify href later
            bg="bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner3.jpg?v=1588050023')] bg-cover bg-no-repeat bg-center"
            buttonPosition="absolute bottom-4 sm:bottom-4 md:bottom-7 lg:bottom-16 xl:bottom-16 left-0 sm:left-0 lg:left-10 xl:left-10"
            buttonEdge="rounded-lg"
            hasButton={true}
            buttonPadding="px-3 sm:px-3 md:px-3 lg:px-5 xl:px-5 py-2"
            buttonMargin="m-5"
            buttonBg="bg-green-600/100"
            onHover="bg-black"
            buttonTextColor="text-white"
            hasBodyText={true}
            bodyText={
              <BannerBodyText
                text="Natural Fresh Fruits"
                textColor="text-gray-500"
                textSize="text-2xl"
                fontWeight="font-normal"
                margin="mx-5 sm:mx-5 md:mx-5 lg:mx-14 xl:mx-14 m-14 sm:my-14 md:my-12 lg:my-14 xl:my-14"
              />
            }
          />
        </div>
      </div>

      <br />
      <div className="row">
        <div className="grid grid-cols-1">
          <Banner
            position="relative"
            width="w-full"
            height="h-52 sm:h-52 md:h-52 lg:h-80 xl-80"
            hasButton={true}
            buttonText="Discover Now"
            linkhref="/home" //need to modify href later
            bg="bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner3.jpg?v=1588050023')] bg-cover bg-no-repeat bg-center"
            buttonPosition="absolute bottom-3 sm:bottom-3 md:bottom-3 lg:bottom-16 xl:bottom-16 left-0 sm:left-0 md:left-0 lg:left-10 xl:left-10"
            buttonEdge="rounded-lg"
            buttonPadding="px-3 sm:px-3 md:px-9 lg:px-9 xl:px-9 py-2 sm:py-2 lg:py-2.5 xl:py-2.5"
            buttonMargin="m-5"
            buttonBg="bg-green-600/100"
            onHover="bg-black"
            buttonTextColor="text-white"
            hasHeading={true}
            heading={
              <BannerHeading
                largeHeading="true"
                largeHeadingText="SALE 50% OFF"
                mediumHeading="true"
                mediumHeadingText="ALL VEGETABLE PRODUCTS"
                smallHeading="true"
                smallHeadingText="Black Fridays!"
                smallHeadingColor="text-green-600"
              />
            }
          />
        </div>
      </div>
    </>
  );
};

export default BannerPage;
