import React, { FC } from "react";

import Image from "next/image";
import Container from "./container";

import { storiesBody } from "../../../utils/types";

interface Props {
  leftStory: boolean;
  threeStoriesList: storiesBody[];
}

const ThreeStoriesCard: FC<Props> = ({ leftStory, threeStoriesList }) => {
  return (
    <div className="mb-10">
      <Container>
        <div className="flex flex-wrap">
          {threeStoriesList.map((item) => (
            <div className="basis-full p-1 md:basis-1/3 md:p-4" key={item.id}>
              <div className="w-full">
                <Image alt="" src={item.image} height={227} width={416} />
              </div>
              <div className={leftStory ? "pt-5" : "pt-5 text-center"}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ThreeStoriesCard;
