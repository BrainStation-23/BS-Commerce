import Image from "next/image";

interface productInterface {
  title: string;
  description: string;
  deatils: string;
  image: string;
}

const SinglePic = (props: { product: productInterface }) => {
  const { title, description, deatils, image } = props.product;
  return (
    <div className="flex flex-row items-center h-72 sm:h-72 md:h-72 lg:h-80 xl:h-96 2xl:h-96">
      <div className="absolute inset-0 scale-125 md:inset-0 md:scale-125 lg:scale-100 ">
        <Image src={image} alt="..." layout="fill" />
      </div>
        <div className="text-center md:text-left pl-10 md:pl-16 lg:pl-20 xl:pl-32 z-10 2xl:top-40 md:top-0 lg:top-5 xl:top-30  left-0 md:block w-4/5 md:w-2/5 sm:w-full lg:w-1/2 xl:w-5/12">
          <h1 className="lg:text-left font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl  2xl:text-5xl ">
            {title}
          </h1>
          <h2 className="lg:mt-3 font-light text-xl md:text-2xl lg:text-3xl xl:text-4xl  2xl:text-5xl">
            {description}
          </h2>
          <div className="mt-1 lg:mt-4 text-sm md:text-base xl:text-base 2xl:text-base">
            {deatils}
          </div>
          <div className="mt-3 lg:mt-8">
            <button className="bg-green-500 hover:bg-neutral-700 text-white font-bold uppercase py-2 px-4 rounded left-0 text-xs sm:text-xs md:text-sm xl:text-base 2xl:text-base">
              Read More
            </button>
          </div>
        </div>
    </div>
  );
};

export default SinglePic;
