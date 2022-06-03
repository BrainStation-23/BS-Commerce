import ShopNowIcon from "./shopNow";

const Banner = () => {
  return (
    <>
      <div className=" row-span-full flex flex-col-reverse bg-[url('https://cdn.shopify.com/s/files/1/0359/6350/2651/files/banner4_grande.jpg?v=1588052424')] bg-clip-border bg-cover bg-no-repeat bg-center" style={{height:"430px", width:"350px"}}>
        <div className="ml-10 mb-9">
          <p className="sm:text-normal lg:text-5xl font-normal mb-4 w-1">Natural Food</p>
          <ShopNowIcon />
        </div>
      </div>
    </>
  );
};

export default Banner;
