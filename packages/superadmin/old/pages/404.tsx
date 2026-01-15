import type { NextPage } from "next";

const PageNotFOund: NextPage = () => {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <span className="display-1 d-block">404</span>
              <div className="mb-4 lead">
                The page you are looking for was not found.
              </div>
              <a href="/home" className="btn btn-link">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFOund;
