const CardComponent = (props) => {
    const {Title , Description , Deatils} = props;
    return (
        <>
            <div
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
                                <p>
                                    {Deatils}
                                </p>
                                <a className="btnReadMore" href="/products/12-unique-content-for-each-product-on-the-product-tab" >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardComponent;
