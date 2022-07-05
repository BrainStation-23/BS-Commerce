import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

import ViewCategory from "@/components/category/view";

const ViewCategoryPage: NextPage = () => {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setReady(true);
    }
  }, [router.isReady]);

  if (!ready) {
    return null;
  }

  return (
    <Fragment>
      <ViewCategory />
    </Fragment>
  );
};

export default ViewCategoryPage;
