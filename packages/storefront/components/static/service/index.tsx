import type { NextComponentType } from "next";

import PageTitle from "@/components/global/components/pageTitle";
import ThreeStoriesCard from "@/components/global/components/threeStoriesCard";
import OurService from "@/components/static/service/ourService";
import UnlimitedService from "@/components/static/service/unlimitedService";

import { storiesBody } from "../../../utils/types";

const threeStoriesList: storiesBody[] = [
  {
    id: "507f1f77bcf86cd799439011",
    title: "Our Mission",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about2_large.jpg?v=1588135255",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
  },
  {
    id: "507f1f77bcf86cd799439012",
    title: "History Of Us",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about3_large.jpg?v=1588135320",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
  },
  {
    id: "507f1f77bcf86cd799439013",
    title: "What Do We Do?",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about4_large.jpg?v=1588135356",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
  },
];

const ServiceComponent: NextComponentType = () => {
  return (
    <>
      <PageTitle title="Service" />
      <ThreeStoriesCard leftStory={true} threeStoriesList={threeStoriesList} />
      <div className="bg-gray-200 ">
        <OurService />
      </div>
      <div className="mb-2">
        <UnlimitedService />
      </div>
    </>
  );
};

export default ServiceComponent;
