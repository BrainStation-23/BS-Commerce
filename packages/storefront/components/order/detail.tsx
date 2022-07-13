import { IOrderResponseData } from 'models';
import React from 'react';
import CartDetails from './cartTable/main';
interface Props {
  singleOrder: IOrderResponseData;
}

const Detail: React.FC<Props> = ({ singleOrder }: Props) => {
  return (
    <>
      <CartDetails singleOrder={singleOrder} />
    </>
  );
};

export default Detail;
