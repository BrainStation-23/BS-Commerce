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
        <div className={(styles.mb)} style={{ display: "flex", "justify-content": "center", gap: "100px" }}>
          <div style={{ width: "max-content"}}>
            <img src={require("/static/img/storefront.png").default} height={250} width={350} />
            <br/>
            <Link className={clsx("button button--secondary button--lg", styles.mr)} to="https://bs-commerce-storefront.vercel.app/">
              Storefront demo
            </Link>
          </div>

          <div style={{ width: "max-content"}}>
            <img src={require("/static/img/storeadmin.png").default} height={250} width={350} />
            <br/>
            <Link className="button button--secondary button--lg" to="https://bs-commerce-storeadmin.vercel.app/">
              Storefront admin
            </Link>
          </div>
        </div>
        <div className={styles.mb}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
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
    <Layout title={`Welcome to ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
