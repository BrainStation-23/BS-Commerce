import type { NextComponentType } from "next";

import PageTitle from "@/components/global/components/pageTitle";
import ThreeStoriesCard from "@/components/global/components/threeStoriesCard";
import ImageWithDescription from "@/components/static/about/imageWithDescription";
import ServiceArea from "@/components/static/about/serviceArea";
import ClientSayArea from "@/components/static/about/clientSayArea";

import { accordionBody, storiesBody, CarouselBody } from "../../../utils/types";

const accordionList: accordionBody[] = [
  {
    id: "507f1f77bcf86cd799439011",
    title: "Fast Free Delivery",
    body: "Nam liber tempor cum soluta nobis eleifend option. Congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem..",
  },
  {
    id: "507f1f77bcf86cd799439012",
    title: "More Than 30 Years In The Business",
    body: "Nam liber tempor cum soluta nobis eleifend option. Congue nihilimperdiet doming id quod mazim placerat facer possim assum. Typi nonhabent claritatem insitam est usus legentis in iis qui facit eorumclaritatem. Investigationes demonstraverunt lectores legere me.Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
  },
  {
    id: "507f1f77bcf86cd799439013",
    title: "100% Organic Foods",
    body: " Nam liber tempor cum soluta nobis eleifend option. Congue nihilimperdiet doming id quod mazim placerat facer possim assum. Typi nonhabent claritatem insitam est usus legentis in iis qui facit eorumclaritatem. Investigationes demonstraverunt lectores legere me.Claritas est etiam processus dynamicus, qui sequitur mutationemconsuetudium lectorum.",
  },
];

const threeStoriesList: storiesBody[] = [
  {
    id: "507f1f77bcf86cd799439014",
    title: "Our Mission",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about2_large.jpg?v=1588135255",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
  },
  {
    id: "507f1f77bcf86cd799439015",
    title: "History Of Us",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about3_large.jpg?v=1588135320",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
  },
  {
    id: "507f1f77bcf86cd799439016",
    title: "What Do We Do?",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about4_large.jpg?v=1588135356",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
  },
];

const CarouselList: CarouselBody[] = [
  {
    id: "507f1f77bcf86cd799439011",
    title: "Rebecka Filso",
    body: "I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses! Kudo's from the Netherlands!..",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/testimonial2_100x100.png?v=1588138748",
  },
  {
    id: "507f1f77bcf86cd799439018",
    title: "Rebecka Filso",
    body: "I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses! Kudo's from the Netherlands!..",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/testimonial1_100x100.png?v=1588138630",
  },
  {
    id: "507f1f77bcf86cd799439019",
    title: "Rebecka Filso",
    body: "I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses! Kudo's from the Netherlands!..",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/testimonial2_100x100.png?v=1588138748",
  },
];

const AboutComponent: NextComponentType = () => {
  return (
    <>
      <PageTitle title="About" />
      <div className="py-12">
        <ImageWithDescription />
      </div>
      <div className="py-16 mb-16 bg-[url('//cdn.shopify.com/s/files/1/0359/6350/2651/files/about-us-policy-bg.jpg?v=1588134945')] bg-no-repeat bg-center">
        <ServiceArea />
      </div>
      <ThreeStoriesCard leftStory={false} threeStoriesList={threeStoriesList} />
      <div className="pb-16">
        <ClientSayArea
          CarouselList={CarouselList}
          accordionList={accordionList}
        />
      </div>
    </>
  );
};

export default AboutComponent;
