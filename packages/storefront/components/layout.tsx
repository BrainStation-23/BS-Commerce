import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Breadcrumb from "./breadcrumbs/breadcrumb";
import BreadcrumbItem from "./breadcrumbs/breadcrumbItem";
import Footer from "./footer";
import Navbar from "./navbar";
import Viewport from "./viewport";

const Layout: NextComponentType = (props: any) => {
  const { children } = props;
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([
    { href: "/", label: "Home" },
  ]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    const homeIndex = pathArray.indexOf("home");
    if (homeIndex != -1) pathArray.splice(homeIndex, homeIndex);
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
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
      <Viewport />
      {/* <Navbar /> */}
      {router.asPath != "/home" && (
        <Breadcrumb title={title}>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          {breadcrumbs &&
            breadcrumbs.map((breadcrumb: any) => (
              <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
                {breadcrumb.label}
              </BreadcrumbItem>
            ))}
        </Breadcrumb>
      )}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
