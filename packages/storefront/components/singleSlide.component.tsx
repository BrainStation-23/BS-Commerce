import type { NextPage } from "next";

interface sliderProps {
    Title: string;
    Description: string;
    Deatils: string;
    Img : string;
}

const SingleSlide: NextPage<sliderProps> = (props) => {
    const { Title, Description, Deatils , Img } = props;
    return (
        <>
         <img
                    src={Img}
                    className="block w-full"
                    alt="..."
                />
               
                <div className="2xl:top-40 xl:top-30 lg:top-5 md:top-0  carousel-caption left-0 md:block w-4/5 lg:w-1/3 md:w-2/5 sm:w-full">
                    <h1 className="lg:text-left font-bold text-sm 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-1xl">{Title}</h1>
                    <h2 className="text-xs lg:text-left font-normal 2xl:text-1xl xl:text-base lg:text-base md:text-sm sm:text-sm">{Description}</h2>
                    <div className="text-xs lg:text-left 2xl:text-base xl:text-sm lg:text-sm md:text-xs sm:text-xs">{Deatils}</div>
                    <div className="lg:text-left py-2">

                    <button  
                        className="bg-green-500 hover:bg-neutral-700 text-white font-bold uppercase py-2 px-4 rounded left-0 text-xs xl:text-lg lg:text-base md:text-sm sm:text-xs" 
                        >
                        Read More
                    </button>
                        </div>
                </div>

           
        </>
    );
};

export default SingleSlide;
