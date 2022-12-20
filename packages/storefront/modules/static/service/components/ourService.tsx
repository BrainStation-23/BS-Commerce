import { FC } from 'react';

import PageContainer from '@/modules/common/layout/pageContainer';
import useTranslation from 'next-translate/useTranslation';

const OurService: FC = () => {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <div className="py-14 text-center">
        <h2 className="text-2xl">{t('service:our_services')}</h2>
        <p className="mx-auto w-3/4">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit.
        </p>
      </div>
      <div className="flex flex-wrap pb-7">
        <div className="mb-7 flex w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">Web App Development</h3>
            <p className="text-sm">
              Develop robust online applications to suit your business needs and
              cater to your clients faithfully.
            </p>
          </div>
        </div>
        <div className="mb-7 flex w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="mt-1 h-7 w-7 text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">Mobile App Development</h3>
            <p className="text-sm">
              Developing innovative and native mobile apps for Android, iOS,
              BlackBerry and Windows platforms
            </p>
          </div>
        </div>
        <div className="mb-7 flex w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="h-8 w-8 text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">AEM Solutions</h3>
            <p className="text-sm">
              AEM brings your content management system (CMS) & digital asset
              management (DAM) in one place
            </p>
          </div>
        </div>
        <div className="mb-7 flex w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">ML & AI</h3>
            <p className="text-sm">
              Machine Learning and Artificial Intelligence solution for your
              organization by experts hand
            </p>
          </div>
        </div>
        <div className="mb-7 flex w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="h-8 w-8 text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">Cloud Solution</h3>
            <p className="text-sm">
              We help large companies with enterprise-oriented certified cloud
              and cyber security solutions
            </p>
          </div>
        </div>
        <div className="mb-7 flex w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="h-8 w-8 text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">E-Commerce</h3>
            <p className="text-sm">
              We provide ultimate e-commerce solution as well as customizations
              for your e-commerce business
            </p>
          </div>
        </div>
        <div className="mb-7 flex w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">BI Solution</h3>
            <p className="text-sm">
              Complete Business Intelligence Solutions to take better decisions
              for your organization
            </p>
          </div>
        </div>
        <div className="mb-7 flex w-full md:w-2/4 lg:w-1/4">
          <div className="mr-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="text-xs">
            <h3 className="text-base">ERP</h3>
            <p className="text-sm">
              ERP 23 is the all-in-one management software to streamline every
              process in your organization’s business
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default OurService;
