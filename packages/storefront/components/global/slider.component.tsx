import type { NextPage } from "next";
import { useState } from "react";
import SingleSlide from "../singleSlide.component";

const SliderComponent: NextPage = () => {
    const [slideDetails, updateSlideDetails] = useState([
        {
            id: Math.floor(Math.random() * 10), 
            Img: "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider1.jpg?v=1588047077",
            Description: "Fresh Farm Products",
            Deatils:
                "10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!",
            Title: "Vegetables Big Sale",
        },
        {
            id: Math.floor(Math.random() * 10), 
            Img: "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider2.jpg?v=1588047180",
            Title: "Fresh Vegetables",
            Description: "Natural Farm Products",
            Deatils:
                "Widest range of farm-fresh Vegetables, Fruits & seasonal produce",
        },
        {
            id: Math.floor(Math.random() * 10), 
            Img: "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/slider3.jpg?v=1588047393",
            Title: "Fresh Tomatoes",
            Description: "Natural Farm Products",
            Deatils:
                "Natural organic tomatoes make your health stronger. Put your information here",
        },
    ]);

    return (
        <>
            <div
                id="carouselExampleCaptions"
                className="carousel slide carousel-dark relative"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-0">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full ">
                    {slideDetails.map((data, index) => {
                        return (
                            <>
                                <div
                                    key={data.id}
                                    className={`carousel-item ${
                                        index == 0 ? "active" : ""
                                    } relative float-left w-full`}
                                >
                                    <SingleSlide
                                        Img={data?.Img}
                                        Title={data?.Title}
                                        Description={data?.Description}
                                        Deatils={data?.Deatils}
                                    />
                                </div>
                                ;
                            </>
                        );
                    })}
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon inline-block bg-no-repeat"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon inline-block bg-no-repeat"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default SliderComponent;
