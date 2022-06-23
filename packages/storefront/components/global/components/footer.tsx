import type { NextComponentType } from "next";
import { useRouter } from "next/router";

interface footerLink {
  name: string;
  link: string;
}

const Footer: NextComponentType = () => {
  const { pathname } = useRouter();
  const informationList: footerLink[] = [
    { name: "About Us", link: "/" },
    { name: "Delivery Information", link: "/" },
    { name: "Privacy Policy", link: "/" },
    { name: "Terms & Condition", link: "/" },
    { name: "Contact Us", link: "/" },
    { name: "Site Map", link: "/" },
  ];

  const extraList: footerLink[] = [
    { name: "Brands", link: "/" },
    { name: "Gifts Certificates", link: "/" },
    { name: "Affiliate", link: "/" },
    { name: "Specials", link: "/" },
    { name: "Returns", link: "/" },
    { name: "Order History", link: "/" },
  ];

  const address = {
    location: "8th Floor, 2 Bir Uttam AK Khandakar Road, Dhaka 1212",
    email: "sales@brainstation-23.com",
    mobile: "+8801674314359",
  };

  // put the pathname in 'includes' where footer needs to be hidden

  if (pathname.includes("/checkout")) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center py-4 mb-3 lg:py-16 container mx-auto">
        <div className="flex flex-col items-center gap-y-10 px-4 lg:px-0 md:flex-row md:flex-wrap md:items-start lg:w-full">
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
                <span>{address.location}</span>
              </div>
              <div className="mb-1">
                <span className="font-medium mr-1">Email:</span>
                <span>{address.email}</span>
              </div>
              <div className="mb-1">
                <span className="font-medium mr-1">Call us:</span>
                <span>{address.mobile}</span>
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
