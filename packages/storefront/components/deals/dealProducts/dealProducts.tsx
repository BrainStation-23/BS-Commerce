import axios from "axios";
import type { NextComponentType } from "next";
import { useEffect, useState } from "react";
import productData from "../../../allData/product-data.json";
import DealProductCard from "./dealProductCard/dealProductCard";
const DealProductSegment: NextComponentType = () => {

  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 xl:grid-cols-3 xl:gap-3 justify-items-center">
          {productData["products"] &&
            productData["products"].length > 0 &&
            productData.products.map((product: any) => (
              <DealProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default DealProductSegment;
