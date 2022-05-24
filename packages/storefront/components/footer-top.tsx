import type { NextComponentType } from "next";
import Image from "next/image";
import magnifier from "../public/magnifier.svg";

const FooterTop: NextComponentType = () => {
  return (
    <div>
      <div className="flex justify-center py-4 mb-3">
        <div className="grid gap-x-4 grid-cols-4 content-start w-3/5">
          <div className="flex flex-col">
            <span className="font-bold text-xl mb-2">BS-Commerce</span>
            <span className="text-sm mb-1">
              Serving Enterprises and SMEs with Technological Partnership Since
              2006.
            </span>
            <div className="text-sm">
              <div className="mb-1">
                <span className="font-medium mr-1">Address:</span>
                <span>
                  8th Floor, 2 Bir Uttam AK Khandakar Road, Dhaka 1212
                </span>
              </div>
              <div className="mb-1">
                <span className="font-medium mr-1">Email:</span>
                <span>sales@brainstation-23.com</span>
              </div>
              <div className="mb-1">
                <span className="font-medium mr-1">Call us:</span>
                <span>+8801674314359</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg mb-3">Information</span>
            <div className="flex flex-col text-sm gap-1">
              <a>About Us</a>
              <a>Delivery Information</a>
              <a>Privacy Policy</a>
              <a>Terms &amp; Condition</a>
              <a>Contact Us</a>
              <a>Site Map</a>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg mb-3">Extras</span>
            <div className="flex flex-col text-sm gap-1">
              <a>Brands</a>
              <a>Gifts Certificates</a>
              <a>Affiliate</a>
              <a>Specials</a>
              <a>Returns</a>
              <a>Order History</a>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg mb-3">
              Signup for newsletter
            </span>
            <span className="text-sm mb-4">
              Get updates by subscribe our weekly newsletter
            </span>
            <div className="flex flex-row items-center justify-between border-1 border-slate-200 rounded-full text-sm">
              <input
                className="ml-4 bg-white focus:outline-none py-2"
                type="search"
                name="search"
                placeholder="email@example.com"
              />

              <button
                type="submit"
                className="bg-green-600 h-full px-2 rounded-r-full hover:bg-stone-900 transition-all duration-200 ease-linear cursor-pointer uppcercase text-white text-sm"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
