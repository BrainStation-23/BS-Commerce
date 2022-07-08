import React from "react";

const Picture = (props: any) => {
    const { height, width, src, alt }: any = props;

    return (
        <div>
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    );
};

export default Picture;
