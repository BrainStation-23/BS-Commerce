import type { NextComponentType } from "next";

const Footer: NextComponentType = () => {
  const informationList = [
    { name: "About Us" },
    { name: "Delivery Information" },
    { name: "Privacy Policy" },
    { name: "Terms & Condition" },
    { name: "Contact Us" },
    { name: "Site Map" },
  ];

  const extraList = [
    { name: "Brands" },
    { name: "Gifts Certificates" },
    { name: "Affiliate" },
    { name: "Specials" },
    { name: "Returns" },
    { name: "Order History" },
  ];

  return (
    <>
      <div className="flex justify-center py-4 mb-3 lg:py-16 container mx-auto">
        <div className="flex flex-col items-center gap-y-10 px-4 md:flex-row md:flex-wrap md:items-start">
          {/* 1st portion */}
          <div className="flex flex-col items-center text-center md:w-full md:text-left md:items-start lg:w-1/3 lg:pr-4">
            <span className="font-black text-xl mb-2">BS Commerce</span>
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
          {/* Information */}
          <div className="flex flex-col text-center md:flex-1 md:text-left">
            <span className="font-medium text-lg mb-3">Information</span>
            <div className="flex flex-col text-sm gap-1">
              {informationList.map((link) => (
                <a
                  className="hover:text-green-600 transition-all duration-100 ease-linear cursor-pointer"
                  key={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          {/* Extras */}
          <div className="flex flex-col text-center md:flex-1 md:text-left">
            <span className="font-medium text-lg mb-3">Extras</span>
            <div className="flex flex-col text-sm gap-1">
              {extraList.map((link) => (
                <a
                  className="hover:text-green-600 transition-all duration-100 ease-linear cursor-pointer"
                  key={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex flex-col text-center md:flex-1 md:grow-[2] md:text-left">
            <span className="font-medium text-lg mb-3">
              Signup for newsletter
            </span>
            <span className="text-sm mb-4 text-center md:text-left">
              Get updates by subscribe our weekly newsletter
            </span>
            <div
              className={`flex flex-row items-center justify-between h-12 border border-slate-200 rounded-full text-sm w-full`}
            >
              <input
                className="ml-4 bg-white focus:outline-none"
                type="search"
                name="search"
                placeholder={`email@example.com`}
              />
              <div className="flex justify-center bg-green-600 w-24 h-full rounded-r-full hover:bg-stone-900 transition-all duration-200 ease-linear cursor-pointer">
                <button type="submit" className="text-white">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 py-4 flex text-center text-white text-sm font-normal md:text-left md:px-4 w-full">
        <div className="container mx-auto">
          <p className="">Copyright &copy; BS commerce All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
