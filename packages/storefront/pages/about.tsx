import type { NextPage } from "next";
import Image from "next/image";

import Accordion from "@/components/accordion";
import PageTitle from "@/components/pageTitle";
import ThreeStoriesCard from "@/components/threeStoriesCard";
import Container from "@/components/container";
import CarouselSlider from "@/components/CarouselSlider";

import { accordionBody, storiesBody, CarouselBody } from "../utils/types";

const accordionList: accordionBody[] = [
  {
    title: "Fast Free Delivery",
    body: "Nam liber tempor cum soluta nobis eleifend option. Congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem..",
  },
  {
    title: "More Than 30 Years In The Business",
    body: "Nam liber tempor cum soluta nobis eleifend option. Congue nihilimperdiet doming id quod mazim placerat facer possim assum. Typi nonhabent claritatem insitam est usus legentis in iis qui facit eorumclaritatem. Investigationes demonstraverunt lectores legere me.Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
  },
  {
    title: "100% Organic Foods",
    body: " Nam liber tempor cum soluta nobis eleifend option. Congue nihilimperdiet doming id quod mazim placerat facer possim assum. Typi nonhabent claritatem insitam est usus legentis in iis qui facit eorumclaritatem. Investigationes demonstraverunt lectores legere me.Claritas est etiam processus dynamicus, qui sequitur mutationemconsuetudium lectorum.",
  },
];

const threeStoriesList: storiesBody[] = [
  {
    title: "Our Mission",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about2_large.jpg?v=1588135255",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
  },
  {
    title: "History Of Us",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about3_large.jpg?v=1588135320",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
  },
  {
    title: "What Do We Do?",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about4_large.jpg?v=1588135356",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
  },
];

const CarouselList: CarouselBody[] = [
  {
    title: "Rebecka Filso",
    body: "I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses! Kudo's from the Netherlands!..",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/testimonial2_100x100.png?v=1588138748",
  },
  {
    title: "Rebecka Filso",
    body: "I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses! Kudo's from the Netherlands!..",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/testimonial1_100x100.png?v=1588138630",
  },
  {
    title: "Rebecka Filso",
    body: "I'm so happy with all of the themes, great support, could not wish for more. These people are geniuses! Kudo's from the Netherlands!..",
    image:
      "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/testimonial2_100x100.png?v=1588138748",
  },
];

const About: NextPage = () => {
  return (
    <>
      <PageTitle title="About" />
      <div className="py-12">
        <Container>
          <div className="flex items-center justify-center flex-col">
            <div className="w-full m-auto mb-5">
              <Image
                src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about1_71e1f591-e3d4-456e-be12-03e0afed0c73.jpg?v=1588135206"
                width="1296"
                height="580"
              />
            </div>
            <h1 className="text-xl capitalize mb-5">
              We Are A Digital Agency Focused On Delivering Content And Utility
              User-Experiences.
            </h1>
            <p className="text-center text-sm max-w-4xl mx-auto">
              Adipiscing lacus ut elementum, nec duis, tempor litora turpis
              dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc
              eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac
              pede dis, praesent nibh ac dui mauris sit. Pellentesque mi,
              facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac
              fringilla torquent lorem consectetuer, sociosqu phasellus risus
              urna aliquam, ornare.
            </p>
            <Image
              src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about-us-signature_medium.png?v=1588134272"
              width="228"
              height="129"
            />
          </div>
        </Container>
      </div>
      <div className="py-16 mb-16 bg-[url('//cdn.shopify.com/s/files/1/0359/6350/2651/files/about-us-policy-bg.jpg?v=1588134945')] bg-no-repeat bg-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="basis-full p-1 md:basis-1/3 md:p-4 text-center">
              <div className="mb-3 md:mb-4">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/About_icon1_50x50.png?v=1588134758"
                  width="48"
                  height="48"
                />
              </div>
              <div className="text-center">
                <h3 className="text-base md:text-xl">Creative Design</h3>
                <p className="text-sm md:text-base">
                  Erat metus sodales eget dolor consectetuer, porta ut purus at
                  et alias, nulla ornare velit amet
                </p>
              </div>
            </div>
            <div className="basis-full p-1 md:p-4 md:basis-1/3 text-center">
              <div className="mb-3 md:mb-4">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/About_icon2_50x50.png?v=1588134840"
                  width="48"
                  height="48"
                />
              </div>
              <div className="chose_content">
                <h3 className="text-base md:text-xl">
                  100% Money Back Guarantee
                </h3>
                <p className="text-sm md:text-base">
                  Erat metus sodales eget dolor consectetuer, porta ut purus at
                  et alias, nulla ornare velit amet
                </p>
              </div>
            </div>
            <div className="basis-full p-1 md:p-4 md:basis-1/3 text-center">
              <div className="mb-2 md:mb-4">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/About_icon3_50x50.png?v=1588134892"
                  width="48"
                  height="48"
                />
              </div>
              <div className="box_content">
                <h3 className="text-base md:text-xl">Online Support 24/7</h3>
                <p className="text-sm md:text-base">
                  Erat metus sodales eget dolor consectetuer, porta ut purus at
                  et alias, nulla ornare velit amet
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <ThreeStoriesCard leftStory={false} threeStoriesList={threeStoriesList} />
      <div className="pb-16">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-1 w-full md:p-4 md:w-2/4">
              <h2 className="text-2xl text-center mb-5">
                What Can We Do For You?
              </h2>
              {accordionList?.map((item, index) => (
                <Accordion title={item.title} body={item.body} key={index} />
              ))}
            </div>
            <div className="p-1 w-full md:p-4 md:w-2/4 text-center">
              <h2 className="text-2xl">What Our Customers Say?</h2>
              <div className="mt-5">
                <CarouselSlider CarouselList={CarouselList} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
