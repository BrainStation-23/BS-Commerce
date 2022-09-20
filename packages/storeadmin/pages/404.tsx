import type { NextPage } from "next";
import Link from "next/link";

const PageNotFOund: NextPage = () => {
  return (
    <>
      <section className="py-5">
        <div className="px-lg-5 container mt-5 px-4">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <span className="display-1 d-block">404</span>
              <div className="lead mb-4">
                The page you are looking for was not found.
              </div>
              <Link href="/home">
                <a className="btn btn-link">Back to Home</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFOund;
