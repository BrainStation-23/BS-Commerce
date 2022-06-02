import type { NextComponentType } from "next";

const FooterTop: NextComponentType = () => {
  return (
    <div>
      <div className="flex justify-center py-4 mb-3">
        <div className="grid gap-x-4 grid-cols-4 content-start container">
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
              <a className="link">About Us</a>
              <a className="link">Delivery Information</a>
              <a className="link">Privacy Policy</a>
              <a className="link">Terms &amp; Condition</a>
              <a className="link">Contact Us</a>
              <a className="link">Site Map</a>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg mb-3">Extras</span>
            <div className="flex flex-col text-sm gap-1">
              <a className="link">Brands</a>
              <a className="link">Gifts Certificates</a>
              <a className="link">Affiliate</a>
              <a className="link">Specials</a>
              <a className="link">Returns</a>
              <a className="link">Order History</a>
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
