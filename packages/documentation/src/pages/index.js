import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.flexContainer}>
          <Link
            className={styles.linkStyle}
            to="https://bs-commerce-storefront.vercel.app/"
          >
            <div className={styles.content}>
              <img
                src={require("/static/img/storefront.png").default}
                height={100}
                width={200}
              />
              <br />
              <div>
                <p className={clsx("hero__subtitle", styles.zmb)}>
                  Storefront demo
                </p>
                <p>A sample website for E-commerce business</p>
              </div>
            </div>
          </Link>

          <div className={styles.content}>
            <Link
              className={styles.linkStyle}
              to="https://bs-commerce-storeadmin.vercel.app/"
            >
              <img
                src={require("/static/img/storeadmin.png").default}
                height={100}
                width={200}
              />
              <br />
              <div>
                <p className={clsx("hero__subtitle", styles.zmb)}>
                  Storefront admin
                </p>
                <p>A sample website for E-commerce admin section</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.mb}>
          <Link
            className={clsx("hero__subtitle", styles.linkStyle)}
            to="/docs/category/tutorial---basics"
          >
            Static Storefront
          </Link>
        </div>
        <Link
          className={clsx("hero__subtitle", styles.linkStyle)}
          to="/docs/category/tutorial---basics"
        >
          Learn More About BS-Commerce
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
