import React, { FC } from "react";

import { Input } from "../../global/components/input";
import { Textarea } from "../../global/components/textarea";
import Container from "../../global/components/container";

const ContactArea: FC = () => {
  return (
    <Container>
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/4 pr-5">
          <h3 className="text-xl capitalize font-semibold mb-5">Contact Us</h3>
          <p className="text-sm mb-5">Your content here</p>
          <ul className="list-none m-0 p-0">
            <li className="py-3 border-t border-inherit border-solid flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Address : No 40 Baria Sreet 133/2 NewYork City
            </li>
            <li className="py-3 border-t border-inherit border-solid">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              E-mail: info@yourdomain.com
            </li>
            <li className="py-3 border-t border-inherit border-solid">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +88013245657
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/4">
          <h3 className="text-xl capitalize font-semibold my-5 md:mt-0">
            Tell Us Your Project
          </h3>
          <form method="post" action="/">
            <Input
              label="Name"
              value=""
              type="text"
              name="name"
              onChangeHandler={() => {}}
            />
            <Input
              label="Email"
              value=""
              type="email"
              name="email"
              onChangeHandler={() => {}}
            />
            <Input
              label="Subject"
              value=""
              type="text"
              name="subject"
              onChangeHandler={() => {}}
            />
            <Textarea
              label="Message"
              value=""
              name="message"
              onChangeHandler={() => {}}
            />
            <button
              className="font-normal h-10 px-10 p capitalize bg-black text-white rounded"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactArea;
