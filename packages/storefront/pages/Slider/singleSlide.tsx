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
        <> <img
                    src={Img}
                    className="block w-full"
                    alt="..."
                />
                <div className="carousel-caption hidden md:block absolute">
                    <h1>{Title}</h1>
                    <h2>{Description}</h2>
                    <p>{Deatils}</p>
                    <a  
                        className="bg-green-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded"
                        href=""
                    >
                        Read More
                    </a>
                </div>
           

            {/* <div
                className="single_slider d-flex align-items-center"
                // data-bgimsg="//cdn.shopify.com/s/files/1/0359/6350/2651/files/slider2.jpg?v=1588047180"
                style={{
                    backgroundImage:
                        "url('//cdn.shopify.com/s/files/1/0359/6350/2651/files/slider2.jpg?v=1588047180')",
                }}
            >
                <div className="container">
                    <div id="addPadding" className="row">
                        <div className="col-md-6 text-left">
                            <div className="slider_content">
                                <h1>{Title}</h1>
                                <h2>{Description}</h2>
                                <p>{Deatils}</p>
                                <a
                                    className="btnReadMore"
                                    href="/products/12-unique-content-for-each-product-on-the-product-tab"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default SingleSlide;
