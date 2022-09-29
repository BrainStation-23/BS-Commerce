import type { NextComponentType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

interface footerLink {
  name: string;
  link: string;
}

const Footer: NextComponentType = () => {
  const { t } = useTranslation();
  const { pathname } = useRouter();
  const informationList: footerLink[] = [
    { name: `${t('common:about_us')}`, link: '/about' },
    { name: `${t('common:delivery_information')}`, link: '/' },
    { name: `${t('common:privacy_policy')}`, link: '/' },
    { name: `${t('common:Terms&Condition')}`, link: '/' },
    { name: `${t('common:contact_us')}`, link: '/contact' },
    { name: `${t('common:SiteMap')}`, link: '/' },
  ];

  const extraList: footerLink[] = [
    { name: `${t('common:brands')}`, link: '/' },
    { name: `${t('common:GiftsCertificates')}`, link: '/' },
    { name: `${t('common:Affiliate')}`, link: '/' },
    { name: `${t('common:Specials')}`, link: '/' },
    { name: `${t('common:Returns')}`, link: '/' },
    { name: `${t('common:OrderHistory')}`, link: '/order' },
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
            <span className="mb-2 text-xl font-black">
              {t('common:site_name')}
            </span>
            <span className="mb-1 text-sm">
              {t('common:footerDescription')}
            </span>
            <div className="text-sm">
              <div className="mb-1">
                <span className="mr-1 font-medium">{t('common:address')}:</span>
                <span>{address.location}</span>
              </div>
              <div className="mb-1">
                <span className="mr-1 font-medium">{t('common:email')}:</span>
                <span>{address.email}</span>
              </div>
              <div className="mb-1">
                <span className="mr-1 font-medium">{t('common:call_us')}:</span>
                <span>{address.mobile}</span>
              </div>
            </div>
          </div>
          {/* Information */}
          <div className="flex flex-col text-center md:flex-1 md:text-left">
            <span className="mb-3 text-lg font-medium">
              {t('common:information')}
            </span>
            <div className="flex flex-col gap-1 text-sm">
              {informationList.map((link) => (
                <Link href={link.link} passHref key={link.name}>
                  <a className="cursor-pointer transition-all duration-100 ease-linear hover:text-green-600">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          {/* Extras */}
          <div className="flex flex-col text-center md:flex-1 md:text-left">
            <span className="mb-3 text-lg font-medium">
              {t('common:Extras')}
            </span>
            <div className="flex flex-col gap-1 text-sm">
              {extraList.map((link) => (
                <Link key={link.name} passHref href={link.link}>
                  <a className="cursor-pointer transition-all duration-100 ease-linear hover:text-green-600">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex flex-col text-center md:flex-1 md:grow-[2] md:text-left">
            <span className="mb-3 text-lg font-medium">
              {t('common:Signup_for_newsletter')}
            </span>
            <span className="mb-4 text-center text-sm md:text-left">
              {t('common:Get_updates_by_subscribe_our_weekly_newsletter')}
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
              <div className="flex h-12 w-24 cursor-pointer justify-center rounded-r-full bg-green-600 transition-all duration-200 ease-linear hover:bg-stone-900">
                <button type="submit" className="text-white">
                  {t('common:SUBSCRIBE')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="hidden w-full bg-gray-900 py-4 text-center text-sm font-normal text-white md:px-4 md:text-left lg:flex">
        <div className="container mx-auto">
          <p className=""> {t('common:copyrignt')}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
