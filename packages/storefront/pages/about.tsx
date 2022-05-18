import type { NextPage } from "next";
import Image from "next/image";

import Accordion from "@/components/accordion";
import PageTitle from "@/components/pageTitle";
import ThreeStoriesCard from "@/components/threeStoriesCard";
import Container from "@/components/container";

import { accordionBody, storiesBody } from "../utils/types";

import styles from "@/styles/About.module.css";

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

const About: NextPage = () => {
  return (
    <>
      <PageTitle title="About" />
      <div className={styles.aboutInfo_section}>
        <Container>
          <div className="row">
            <div className={`${styles.aboutInfo} col-12`}>
              <div className={styles.image_container}>
                <Image
                  src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about1_71e1f591-e3d4-456e-be12-03e0afed0c73.jpg?v=1588135206"
                  width="1296"
                  height="580"
                />
              </div>
              <h1>
                We Are A Digital Agency Focused On Delivering Content And
                Utility User-Experiences.
              </h1>
              <p>
                Adipiscing lacus ut elementum, nec duis, tempor litora turpis
                dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc
                eleifend feugiat lectus laoreet, vel nunc taciti integer cras.
                Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque mi,
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
          </div>
        </Container>
      </div>
      <div className={styles.service_area}>
        <Container>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className={styles.single_box}>
                <div className={styles.box_icone}>
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/About_icon1_50x50.png?v=1588134758"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="chose_content">
                  <h3>Creative Design</h3>
                  <p>
                    Erat metus sodales eget dolor consectetuer, porta ut purus
                    at et alias, nulla ornare velit amet
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className={styles.single_box}>
                <div className={styles.box_icone}>
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/About_icon2_50x50.png?v=1588134840"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="chose_content">
                  <h3>100% Money Back Guarantee</h3>
                  <p>
                    Erat metus sodales eget dolor consectetuer, porta ut purus
                    at et alias, nulla ornare velit amet
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className={styles.single_box}>
                <div className={styles.box_icone}>
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/About_icon3_50x50.png?v=1588134892"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="box_content">
                  <h3>Online Support 24/7</h3>
                  <p>
                    Erat metus sodales eget dolor consectetuer, porta ut purus
                    at et alias, nulla ornare velit amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <ThreeStoriesCard leftStory={false} threeStoriesList={threeStoriesList} />
      <div className={styles.faq_client_say_area}>
        <Container>
          <div className="row">
            <div className={`col-lg-6 col-md-6 ${styles.client_say}`}>
              <h2>What Can We Do For You?</h2>
              <Accordion accordionList={accordionList} />
            </div>
            <div className={`col-lg-6 col-md-6 ${styles.tesimonial}`}>
              <h2>What Our Customers Say?</h2>
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className={`carousel-item active ${styles.single_testimonial}`}
                    data-bs-interval="10000"
                  >
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/testimonial2_100x100.png?v=1588138748"
                      alt="files/testimonial2.png"
                      width={100}
                      height={100}
                    />
                    <div>
                      <div>Rebecka Filso</div>
                      <p>
                        I'm so happy with all of the themes, great support,
                        could not wish for more. These people are geniuses!
                        Kudo's from the Netherlands!..
                      </p>
                    </div>
                  </div>
                  <div
                    className={`carousel-item ${styles.single_testimonial}`}
                    data-bs-interval="2000"
                  >
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/testimonial1_100x100.png?v=1588138630"
                      alt="files/testimonial1.png"
                      width={100}
                      height={100}
                    />
                    <div>
                      <div>Rebecka Filso</div>
                      <p>
                        I'm so happy with all of the themes, great support,
                        could not wish for more. These people are geniuses!
                        Kudo's from the Netherlands!..
                      </p>
                    </div>
                  </div>
                  <div className={`carousel-item ${styles.single_testimonial}`}>
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/testimonial2_100x100.png?v=1588138748"
                      alt="files/testimonial2.png"
                      width={100}
                      height={100}
                    />
                    <div>
                      <div>Rebecka Filso</div>
                      <p>
                        I'm so happy with all of the themes, great support,
                        could not wish for more. These people are geniuses!
                        Kudo's from the Netherlands!..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
