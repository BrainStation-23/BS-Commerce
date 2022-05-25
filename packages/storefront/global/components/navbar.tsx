import type { NextComponentType } from "next";
import Image from "next/image";
import { useState, useEffect } from "react";
import threeBar from "../../public/three-horizontal-lines.svg";
import caretSign from "../../public/caret-sign.svg";

const Navbar: NextComponentType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const setStickyNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight >= 140
        ? setStickyClass("fixed top-0 left-0 z-50 bg-white/95 w-full")
        : setStickyClass("static");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setStickyNavbar);

    return () => {
      window.removeEventListener("scroll", setStickyNavbar);
    };
  }, []);

  return (
    <nav className={`flex justify-center drop-shadow-lg ${stickyClass}`}>
      <div className="container">
        <div className="flex flex-row items-center">
          <div
            className="flex flex-row items-center relative rounded-t-2xl bg-green-600 text-white px-4 py-3 font-medium w-72 cursor-pointer"
            onClick={toggleOpen}
          >
            <Image src={threeBar} height={20} width={20} alt="" />
            <span className="ml-4 mr-auto">All Categories</span>
            <Image src={caretSign} alt="" />
          </div>
          <ul className="list-none flex flex-row gap-x-12 my-0">
            <li>
              <a className="link font-medium flex flex-row">Home</a>
            </li>
            <li>
              <a className="link font-medium flex flex-row">Shop</a>
            </li>
            <li>
              <a className="link font-medium flex flex-row">Product</a>
            </li>
            <li>
              <a className="link font-medium flex flex-row">Blog</a>
            </li>
            <li>
              <a className="link font-medium flex flex-row">Pages</a>
            </li>
            <li>
              <a className="link font-medium flex flex-row">Contact</a>
            </li>
          </ul>

          <div className="ml-auto flex flex-col text-sm text-gray-900">
            <span>+8801674314359</span>
            <span>Customer Support</span>
          </div>

          {isOpen && (
            <div className="flex flex-col gap-y-4 absolute bg-white text-black text-base w-72 px-4 py-3 rounded-b-sm shadow-md top-[56px]">
              <a className="link">Vegetables</a>
              <a className="link">Fruits</a>
              <a className="link">Salads</a>
              <a className="link">Fish &amp; Seafood</a>
              <a className="link">Fresh Meat</a>
              <a className="link">Butter &amp; Eggs</a>
              <a className="link">Milk</a>
              <a className="link">Oil &amp; Vinegars</a>
              <a className="link">Bread</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
