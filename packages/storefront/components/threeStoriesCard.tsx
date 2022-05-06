import React, { FC } from "react";

import Image from "next/image";

import styles from "../styles/ThreeStoriesCard.module.css";
import { StoriesBody } from "../utils/types";

interface Props {
  leftStory: boolean;
  threeStoriesList: StoriesBody[];
}

const ThreeStoriesCard: FC<Props> = ({ leftStory, threeStoriesList }) => {
  return (
    <div className={styles.about_gallery_section}>
      <div className={`${styles.about_gallery_container} container`}>
        <div className="row">
          {threeStoriesList.map((item, index) => (
            <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
              <div className="gallery_thumb">
                <Image alt="" src={item.image} height={227} width={416} />
              </div>
              <div
                className={
                  leftStory
                    ? styles.about_gallery_left_content
                    : styles.about_gallery_content
                }
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeStoriesCard;
