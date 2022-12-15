import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={(styles.flexContainer, styles.mb)}>
          <Link
            className={clsx("button button--secondary button--lg", styles.mr)}
            to="/docs/intro"
          >
            Storefront demo
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Storefront admin
          </Link>
        </div>
        <div className={styles.mb}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Static Storefront
          </Link>
        </div>
        <Link className="button button--secondary button--lg" to="/docs/intro">
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
