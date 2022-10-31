import React, { FC } from 'react';

import PageContainer from '@/modules/common/layout/pageContainer';
import Accordion from '@/modules/common/accordion';

import { accordionBody } from 'APIs/utils/types';

interface Props {
  accordionList: accordionBody[];
}

const FaqContentArea: FC<Props> = ({ accordionList }) => {
  const heading =
    'Below are frequently asked questions, you may find the answer foryourself';
  const details =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id eratsagittis, faucibus metus malesuada, eleifend turpis. Mauris semperaugue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue.In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrumsit amet. Nulla convallis mauris vitae congue consequat. Donecinterdum nunc purus, vitae vulputate arcu fringilla quis. Vivamusiaculis euismod dui.';
  return (
    <PageContainer>
      <div className="pb-5">
        <h4 className="mb-4 text-lg font-semibold">{heading}</h4>
        <p>{details}</p>
      </div>
      <div className="py-5">
        {accordionList?.map((item) => (
          <Accordion title={item.title} body={item.body} key={item.id} />
        ))}
      </div>
    </PageContainer>
  );
};

export default FaqContentArea;
