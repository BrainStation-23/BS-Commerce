import Breadcrumb from "@/components/global/breadcrumbs/breadcrumb";
import type { NextPage } from "next";

const BreadcrumbTest: NextPage = () => {
  return (
    <>
        <Breadcrumb title="Breadcrumb" pathArray={["Home", "Breadcrumb"]} linkArray={["/home", "/breadcrumbtest"]} />
    </>
  );
};

export default BreadcrumbTest;
