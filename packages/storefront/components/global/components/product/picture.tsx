import React from "react";
import Image from "next/image";

const Picture = (props: any) => {
    const { product, height, width, src, alt }: any = props;

    return (
        <div>
            <img
                src={src}
                alt={alt}
                width="100%"
                height={height}
            />
        </div>
    );
};

export default Picture;
