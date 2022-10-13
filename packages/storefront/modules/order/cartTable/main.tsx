import React from 'react';
import DataTable from './dataTable';
import { OrderByUserId } from '@bs-commerce/models';
interface Props {
  singleOrder: OrderByUserId;
}

const CartDetails: React.FC<Props> = ({ singleOrder }: Props) => {
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center">
          <DataTable singleOrder={singleOrder} />
        </div>
      </div>
    </>
  );
};

export default CartDetails;
