import Breadcrumbs from "@/components/global/breadcrumbs";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const BreadcrumbTest: NextPage = () => {
    const router = useRouter();
  return (
    <>
        <Breadcrumbs route={router.asPath} />
    </>
  );
};

export default BreadcrumbTest;
