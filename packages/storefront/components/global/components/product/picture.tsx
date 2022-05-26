import React from "react";
import Image from "next/image";

const Picture = (props: any) => {
    const { product }: any = props;

    return (
        <div>
            <Image
                src={product.images[0]}
                alt={product.category}
                width={280}
                height={280}
            />
        </div>
    );
};

export default Picture;
