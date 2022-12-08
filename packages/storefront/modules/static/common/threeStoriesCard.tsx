import React, { FC } from 'react';

import Image from 'next/image';

import PageContainer from '@/modules/common/layout/pageContainer';

import { storiesBody } from 'APIs/utils/types';

interface Props {
  leftStory: boolean;
  threeStoriesList: storiesBody[];
}

const ThreeStoriesCard: FC<Props> = ({ leftStory, threeStoriesList }) => {
  return (
    <div className="mb-10">
      <PageContainer>
        <div className="flex flex-wrap">
          {threeStoriesList.map((item) => (
            <div
              className="basis-full p-1 md:basis-1/2 md:p-4 lg:basis-1/3"
              key={item.id}
            >
              <div className="w-full text-center">
                <Image alt="" src={item.image} height={227} width={416} />
              </div>
              {/* if story description need to show left align then leftStory props must be true */}
              <div className={leftStory ? 'pt-5' : 'pt-5 text-center'}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default ThreeStoriesCard;
