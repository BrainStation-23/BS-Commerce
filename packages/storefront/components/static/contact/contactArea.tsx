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
            <li className="py-3 border-t border-inherit border-solid">
              <i className="bi bi-house-door-fill"></i> Address : No 40 Baria
              Sreet 133/2 NewYork City
            </li>
            <li className="py-3 border-t border-inherit border-solid">
              <i className="bi bi-envelope"></i> E-mail: info@yourdomain.com
            </li>
            <li className="py-3 border-t border-inherit border-solid">
              <i className="bi bi-telephone"></i> +88013245657
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/4">
          <h3 className="text-xl capitalize font-semibold my-5 md:mt-0">
            Tell Us Your Project
          </h3>
          <form method="post" action="/">
            <Input label="Name" value="" type="text" name="name" />
            <Input label="Email" value="" type="email" name="email" />
            <Input label="Subject" value="" type="text" name="subject" />
            <Textarea label="Message" value="" name="message" />
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
