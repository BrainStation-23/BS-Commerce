import type { NextPage } from "next";
import Image from "next/image";

import PageTitle from "@/components/pageTitle";
import ThreeStoriesCard from "@/components/threeStoriesCard";
import Container from "@/components/container";

import { storiesBody } from "../utils/types";

import styles from "@/styles/Service.module.css";

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

const Service: NextPage = () => {
  return (
    <>
      <PageTitle title="Service" />
      <ThreeStoriesCard leftStory={true} threeStoriesList={threeStoriesList} />
      <div className={styles.our_services}>
        <Container>
          <div className="row">
            <div className="col-12">
              <div className={styles.services_title}>
                <h2>OUR SERVICES</h2>
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={styles.services_item}>
                <div className={styles.services_icone}>
                  <i className="bi bi-app-indicator" aria-hidden="true"></i>
                </div>
                <div className={styles.services_desc}>
                  <h3>Free Shipping</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={styles.services_item}>
                <div className={styles.services_icone}>
                  <i className="bi bi-arrow-clockwise" aria-hidden="true"></i>
                </div>
                <div className={styles.services_desc}>
                  <h3>WEB DESIGN</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={styles.services_item}>
                <div className={styles.services_icone}>
                  <i className="bi bi-app-indicator" aria-hidden="true"></i>
                </div>
                <div className={styles.services_desc}>
                  <h3>PHOTOGRAPHY</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={styles.services_item}>
                <div className={styles.services_icone}>
                  <i className="bi bi-arrow-clockwise" aria-hidden="true"></i>
                </div>
                <div className={styles.services_desc}>
                  <h3>WEB DEVELOPMENT</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={styles.services_item}>
                <div className={styles.services_icone}>
                  <i className="bi bi-app-indicator" aria-hidden="true"></i>
                </div>
                <div className={styles.services_desc}>
                  <h3>CODING</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={styles.services_item}>
                <div className={styles.services_icone}>
                  <i className="bi bi-app-indicator" aria-hidden="true"></i>
                </div>
                <div className={styles.services_desc}>
                  <h3>MARKETING</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={styles.services_item}>
                <div className={styles.services_icone}>
                  <i className="bi bi-app-indicator" aria-hidden="true"></i>
                </div>
                <div className={styles.services_desc}>
                  <h3>SUPPORT</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={styles.services_item}>
                <div className={styles.services_icone}>
                  <i className="bi bi-app-indicator" aria-hidden="true"></i>
                </div>
                <div className={styles.services_desc}>
                  <h3>GRAPHIC DESIGN</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.unlimited_services}>
        <Container>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <Image
                src="https://cdn.shopify.com/s/files/1/0359/6350/2651/files/services4.jpg?v=1590916919"
                alt=""
                width={555}
                height={435}
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="unlimited_services_content">
                <h1>UNLIMITED IDEAS</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium, suscipit dolorum ullam soluta voluptatem quasi
                  molestias illum possimus, accusantium assumenda inventore
                  debitis ducimus. Quis ducimus, consequatur corrupti, sunt
                  rerum sit atque eum inventore. Autem excepturi reiciendis
                  voluptate totam sit, sunt fugiat voluptatum beatae voluptas ab
                  quia vitae accusamus assumenda facilis perferendis, quam
                  itaque aliquid qui omnis culpa consectetur placeat ipsa
                  quaerat.&nbsp;
                </p>
                <div className={styles.view__work}>
                  <a href="/policies/terms-of-service">
                    More Info <i className="bi bi-caret-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Service;
