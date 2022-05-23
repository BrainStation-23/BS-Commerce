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
                <div className="carousel-caption hidden md:block absolute">
                    <h1 className="">{Title}</h1>
                    <h2 className="">{Description}</h2>
                    <p className="">{Deatils}</p>
                    <a  
                        className="bg-green-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded"
                        href=""
                    >
                        Read More
                    </a>
                </div>
           

           
        </>
    );
};

export default SingleSlide;
