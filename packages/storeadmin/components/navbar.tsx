import type { NextComponentType } from "next";
import Link from "next/link";

const Navbar: NextComponentType = () => {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link href="/home">
                <a className="nav-link active" aria-current="page">
                  <i className="bi bi-house-door"></i>
                  Dashboard
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/orders">
                <a className="nav-link">
                  <i className="bi bi-file-earmark"></i>
                  Orders
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link">
                  <i className="bi bi-cart"></i>
                  Products
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link">
                  <i className="bi bi-people"></i>
                  Customers
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link">
                  <i className="bi bi-people"></i>
                  Reports
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link">
                  <i className="bi bi-people"></i>
                  Integrations
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
