import React, { FC } from "react";
import Link from "next/link";

import styles from "../styles/PageTitle.module.css";

interface Props {
  title: string;
}

const PageTitle: FC<Props> = ({ title }) => {
  return (
    <div className={`${styles.title_page_overlay} overlay-bg my-5`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.title_content}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.title_list}>
                <Link href="/">
                  <a>Home / </a>
                </Link>
                <div>{title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
