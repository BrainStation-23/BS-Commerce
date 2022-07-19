import React from "react";

const Picture = (props: any) => {
    const { height, src, alt }: any = props;

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
