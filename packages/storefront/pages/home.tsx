import type { InferGetServerSidePropsType, NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";
import productPic from "../public/product.jpeg";

const Home : NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Storefront</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* <div className="col mb-5">
              <div className="card h-100">
                <Image className="card-img-top" src={productPic} alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="/product/10"
                    >
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <Image className="card-img-top" src={productPic} alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="/product/10"
                    >
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {props.products.map((product: any) => {
              return (
                <div className="col mb-5">
                  <div className="card h-100">
                    <Image
                      className="card-img-top"
                      src={productPic}
                      height="200"
                      width="100"
                      alt="..."
                    />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{product.name}</h5>
                        <p>{product.price}</p>
                        {product.description}
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="/product/10"
                        >
                          View options
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/products`);
  const data: [] = await res.json();
  return {
    props: {
      products: data,
    },
  };
}
