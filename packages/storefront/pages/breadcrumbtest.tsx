import Breadcrumb from "@/components/global/breadcrumbs/breadcrumb";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const BreadcrumbTest: NextPage = () => {
    const router = useRouter();
  return (
    <>
        <Breadcrumb router={router.asPath} />
    </>
  );
};

export default BreadcrumbTest;
