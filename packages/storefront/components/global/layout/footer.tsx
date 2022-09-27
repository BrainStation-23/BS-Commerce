import type { NextComponentType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface footerLink {
  name: string;
  link: string;
}

const Footer: NextComponentType = () => {
  const { pathname } = useRouter();
  const informationList: footerLink[] = [
    { name: 'About Us', link: '/about' },
    { name: 'Delivery Information', link: '/' },
    { name: 'Privacy Policy', link: '/' },
    { name: 'Terms & Condition', link: '/' },
    { name: 'Contact Us', link: '/contact' },
    { name: 'Site Map', link: '/' },
  ];

  const extraList: footerLink[] = [
    { name: 'Brands', link: '/' },
    { name: 'Gifts Certificates', link: '/' },
    { name: 'Affiliate', link: '/' },
    { name: 'Specials', link: '/' },
    { name: 'Returns', link: '/' },
    { name: 'Order History', link: '/order' },
  ];

  const address = {
    location: '8th Floor, 2 Bir Uttam AK Khandakar Road, Dhaka 1212',
    email: 'sales@brainstation-23.com',
    mobile: '+8801674314359',
  };

  // put the pathname in 'includes' where footer needs to be hidden

  if (pathname.includes('/checkout')) {
    return null;
  }

  return (
    <>
      <div className="container mx-auto mb-3 flex justify-center px-4 py-4 lg:py-16">
        <div className="mb-20 flex flex-col items-center gap-y-10 px-4 md:mb-0 md:flex-row md:flex-wrap md:items-start lg:w-full lg:px-0">
          {/* 1st portion */}
          <div className="flex flex-col items-center text-center md:w-full md:items-start md:text-left lg:w-1/3 lg:pr-4">
            <span className="mb-2 text-xl font-black">BS Commerce</span>
            <span className="mb-1 text-sm">
              Serving Enterprises and SMEs with Technological Partnership Since
              2006.
            </span>
            <div className="text-sm">
              <div className="mb-1">
                <span className="mr-1 font-medium">Address:</span>
                <span>{address.location}</span>
              </div>
              <div className="mb-1">
                <span className="mr-1 font-medium">Email:</span>
                <span>{address.email}</span>
              </div>
              <div className="mb-1">
                <span className="mr-1 font-medium">Call us:</span>
                <span>{address.mobile}</span>
              </div>
            </div>
          </div>
          {/* Information */}
          <div className="flex flex-col text-center md:flex-1 md:text-left">
            <span className="mb-3 text-lg font-medium">Information</span>
            <div className="flex flex-col gap-1 text-sm">
              {informationList.map((link) => (
                <Link href={link.link} passHref key={link.name}>
                  <a className="cursor-pointer transition-all duration-100 ease-linear hover:text-primary">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          {/* Extras */}
          <div className="flex flex-col text-center md:flex-1 md:text-left">
            <span className="mb-3 text-lg font-medium">Extras</span>
            <div className="flex flex-col gap-1 text-sm">
              {extraList.map((link) => (
                <Link key={link.name} passHref href={link.link}>
                  <a className="cursor-pointer transition-all duration-100 ease-linear hover:text-primary">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex flex-col text-center md:flex-1 md:grow-[2] md:text-left">
            <span className="mb-3 text-lg font-medium">
              Signup for newsletter
            </span>
            <span className="mb-4 text-center text-sm md:text-left">
              Get updates by subscribe our weekly newsletter
            </span>
            <div
              className={`flex h-12 w-full flex-row items-center justify-between rounded-full border border-slate-200 text-sm`}
            >
              <input
                className="ml-4 bg-white focus:outline-none"
                type="search"
                name="search"
                placeholder={`email@example.com`}
              />
              <div className="flex h-12 w-24 cursor-pointer justify-center rounded-r-full bg-primary transition-all duration-200 ease-linear hover:bg-stone-900">
                <button type="submit" className="text-white">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="hidden w-full bg-gray-900 py-4 text-center text-sm font-normal text-white md:px-4 md:text-left lg:flex">
        <div className="container mx-auto">
          <p className="">Copyright &copy; BS commerce All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
