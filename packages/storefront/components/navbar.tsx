import type { NextComponentType } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar: NextComponentType = () => {
  const loggedInUser = useSelector((state: any) => state.userReducer.loggedInUser);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="/home">
            BS Commerce - Storefront
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/products">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/popular">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="new-items">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
              {loggedInUser ? (
                <>
                  <Link href="/sign-out">
                    <button className="btn btn-outline-dark">Sign-Out</button>
                  </Link>
                </>
              ) : (
                <Link href="/sign-in">
                  <button className="btn btn-outline-dark">Sign-In</button>
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
