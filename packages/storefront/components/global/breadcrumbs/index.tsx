import React, { useEffect, useState } from "react";
import Breadcrumb from "./breadcrumb";
import BreadcrumbItem from "./breadcrumbItem";

const BreadcrumbLabel = (props: any) => {
  const router = props.route;
  const [breadcrumbs, setBreadcrumbs] = useState([
    { href: "/", label: "Home" },
  ]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const pathWithoutQuery = router.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    const homeIndex = pathArray.indexOf("home");
    if (homeIndex != -1) pathArray.splice(homeIndex, homeIndex);
    const accountIndex = pathArray.indexOf("account");
    if (accountIndex != -1) pathArray.splice(accountIndex, accountIndex);
    pathArray.shift();

    pathArray = pathArray.filter((path: any) => path !== "");

    const breadcrumbs = pathArray.map((path: any, index: number) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      if (index === pathArray.length - 1) {
        setTitle(path.charAt(0).toUpperCase() + path.slice(1));
      }
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      };
    });
    // console.log(breadcrumbs);
    // console.log(title);

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <>
      {router.asPath != "/home" && (
        <Breadcrumb title={title}>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          {breadcrumbs &&
            breadcrumbs.map((breadcrumb: any, index: number) => {
              return (
                <React.Fragment key={index}>
                  {index === breadcrumbs.length - 1 && (
                    <>
                      <BreadcrumbItem
                        key={index}
                        href="/account/sign-in"
                        style={{ pointerEvents: "none" }}
                      >
                        {breadcrumb.label}
                      </BreadcrumbItem>
                    </>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <BreadcrumbItem
                      key={index}
                      href={breadcrumb.href}
                    >
                      {breadcrumb.label}
                    </BreadcrumbItem>
                  )}
                </React.Fragment>
              );
            })}
        </Breadcrumb>
      )}
    </>
  );
};

export default BreadcrumbLabel;
