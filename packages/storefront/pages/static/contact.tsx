import type { NextPage } from "next";

import PageTitle from "@/components/global/components/pageTitle";
import MapArea from "@/components/static/contact/mapArea";
import ContactArea from "@/components/static/contact/contactArea";

const Contact: NextPage = () => {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="mb-10">
        <MapArea />
      </div>
      <div className="mb-10">
        <ContactArea />
      </div>
    </>
  );
};

export default Contact;
